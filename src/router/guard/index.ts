import type { Router } from "vue-router";

const isLogin = Boolean(useStorage('Token', null).value)

export function createGuard(router: Router) {

  router.beforeEach(async (to, form, next) => {
    window.$loadingBar?.start()
    if (isLogin) {
      // 已登录


    }
    next()
  })

  router.afterEach(to => {
    window.$loadingBar?.finish()
  })

}