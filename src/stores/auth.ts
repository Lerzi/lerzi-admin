import { login as apiLogin } from '@/api/auth'

export const useAuthStore = defineStore('authStore', {
  state() {
    return {

    }
  },
  actions: {
    login(username: string, password: string) {
      return new Promise<void>(async (resolve, reject) => {
        try {
          const res = await apiLogin({ username, password })
          console.log('res :>> ', res);
        } catch (error) {
          console.error(error);
        }
      })
    }
  }
})