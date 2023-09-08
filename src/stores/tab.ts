import type { RouteLocationNormalized } from "vue-router"

type Tab = RouteLocationNormalized & {
  meta: any
}

interface State {
  tabs: Tab[]
}
export const useTabStore = defineStore('tabStore', {
  state(): State {
    return {
      tabs: [{
        path: '/home/index',
        meta: {
          icon: "i-carbon-home",
          title: "首页"
        },
        matched: [],
        fullPath: "/home/index",
        query: {},
        hash: '',
        redirectedFrom: undefined,
        name: 'Home',
        params: {}
      }]
    } as State
  },
  actions: {
    addTab(route: RouteLocationNormalized) {
      console.log('route :>> ', route);
      this.tabs.push(route)
    },
    changeRoute(route: RouteLocationNormalized) {
      if (this.tabs.findIndex((item: RouteLocationNormalized) => item.path === route.path) === -1) {
        this.addTab(route)
      }
    }
  },
})