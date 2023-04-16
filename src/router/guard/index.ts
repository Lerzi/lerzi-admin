import type { Router } from "vue-router";

import { createDiscreteApi } from "naive-ui"

import { colors } from "@/theme/colors"

const loadingBarProviderProps = {
  loadingBarProviderProps: {
    loadingBarStyle: {
      loading: { background: colors.primary['DEFAULT'] },
      error: { background: colors.error['DEFAULT'] }
    }
  }
}

const { loadingBar } = createDiscreteApi(["loadingBar"], loadingBarProviderProps)
export function createGuard(router: Router) {

  router.beforeEach(async (to, form, next) => {
    console.log('loadingBar :>> ', loadingBar);

    loadingBar.start()
    next()
  })

  router.afterEach(to => {
    loadingBar.finish()
  })

}