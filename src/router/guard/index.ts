import type { Router } from "vue-router";

export function createGuard(router: Router) {

  router.beforeEach(async (to, form, next) => {
    window.$loadingBar?.start()

    next()
  })

  router.afterEach(to => {
    window.$loadingBar?.finish()
  })

}