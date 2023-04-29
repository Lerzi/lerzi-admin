import type { Router } from "vue-router";
import { isWhite } from "../whiteList";
interface Actions {
  flag: boolean,
  action: () => void
}


export function createGuard(router: Router) {

  router.beforeEach(async (to, form, next) => {
    window.$loadingBar?.start()
    const isLogin = Boolean(useStorage('Token', null).value)

    const { getRoles, getUserInfo, logout } = useAuthStore()

    // if (isLogin) {
    //   const { roles } = await getUserInfo()
    //   filterAsyncRoutes(roles, router)
    // }

    const actions: Actions[] = [
      {
        // 已登录状态 前往登录页，重定向到首页
        flag: isLogin && to.path === '/login',
        action() {
          next({ path: '/' });
        }
      },
      {
        // 白名单不需要登录 直接进入
        flag: isWhite(to.path),
        action() {
          next();
        },
      },
      {
        // 未登录状态，前往需要登录状态页面，重定向到登录页
        flag: !isLogin && !isWhite(to.path),
        action() {
          const redirect = to.fullPath;
          next({ path: '/login', query: { redirect } });
        },
      },
      {
        // 已登录状态，并且有权限 直接进入
        flag: isLogin && (Boolean(getRoles) && getRoles?.length > 0),
        action() {
          next();
        },
      },
      {
        // 已登录状态，无权限信息获取用户权限信息并挂载动态路由
        flag: isLogin,
        async action() {
          next();
        },
      }
    ]

    actions.some(item => {
      const { flag, action } = item
      if (flag) {
        action()
      }
      return flag;
    })
    // next();
  })

  router.afterEach(to => {
    window.$loadingBar?.finish()
  })

}

