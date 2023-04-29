import { fetchLogin, fetchUserInfo } from '@/api/auth'
import type { RemovableRef } from '@vueuse/core'
import { router } from '@/router'
import type { UserInfo } from '@/api/auth.type'
const token = useStorage('Token', null)

export const useAuthStore = defineStore('authStore', {
  state() {
    return {
      userInfo: {} as UserInfo,
      token: token as RemovableRef<null | string>
    }
  },
  actions: {
    login(username: string, password: string) {
      return new Promise<string>(async (resolve, reject) => {
        try {
          const { token } = await fetchLogin({ username, password })
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
    getUserInfo() {
      return new Promise<UserInfo>(async (resolve, reject) => {
        try {
          console.log('this.token :>> ', this.token);
          const userInfo = await fetchUserInfo(this.token as string);
          this.userInfo = userInfo
          resolve(userInfo)
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
    getToken(): null | string {
      return this.token
    },
    getRoles(): string[] {
      return this.userInfo.roles
    }
  }
})