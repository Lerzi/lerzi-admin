
import { asyncRoutes, constantRoutes, router } from '@/router'
import type { RouteRecordRaw } from 'vue-router';

/**
 * Use meta.role to determine if the current user has permission
 * @param roles
 * @param route
 */
function hasPermission(roles: string[], route: RouteRecordRaw) {
  if (route.meta && route.meta.roles) {
    const routeRoles: string[] = route.meta.roles as string[]
    return roles.some(role => routeRoles.includes(role))
  } else {
    return true
  }
}

function filterAsyncRoutes(routes: RouteRecordRaw[], roles: string[]) {

  routes.forEach(route => {
    const tmp = { ...route }
    if (hasPermission(roles, tmp)) {
      if (tmp.children) {
        filterAsyncRoutes(tmp.children, roles)
      }
      router.addRoute(tmp)
    }
  })

}

export const usePermissionStore = defineStore('permissionStore', {
  state() {
    return {
      routes: [] as RouteRecordRaw[],
      addRoutes: [] as RouteRecordRaw[]
    }
  },
  actions: {
    generateRoute(roles: string[]) {
      return new Promise((resolve) => {
        filterAsyncRoutes(asyncRoutes, roles)
        resolve('success')
        // this.addRoutes = accessedRoutes
        // this.routes = constantRoutes.concat(accessedRoutes)
        // resolve(accessedRoutes)
      });
    }
  },
})