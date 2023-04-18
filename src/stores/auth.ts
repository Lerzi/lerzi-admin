import { login as apiLogin } from '@/api/auth'
import type { RemovableRef } from '@vueuse/core'
import { router } from '@/router'
// import { useStorage } from '@vueuse/core'
const token = useStorage('Token', null)
export const useAuthStore = defineStore('authStore', {
  state() {
    return {
      token: token as RemovableRef<null | string>
    }
  },
  actions: {
    login(username: string, password: string) {
      return new Promise<string>(async (resolve, reject) => {
        try {
          const { token } = await apiLogin({ username, password })
          if (token) {
            this.token = token
          }
          const { query } = router.currentRoute.value
          if (query?.redirect) {
            router.push(query.redirect as string)
          } else {
            router.push('/')
          }
        } catch (error) {
          console.error(error);
          reject(error)
        }
      })
    },
    logout() {
      this.token = null
      router.push('/login')
    }
  },
  getters: {
    getToken(): string | null {
      return this.token
    }
  }
})