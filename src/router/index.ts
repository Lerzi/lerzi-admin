import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import Layout from '@/layout/index.vue'
import type { App } from 'vue'
import { createGuard } from './guard'

export const constantRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    name: '',
    meta: {
      title: 'Root',
      hide: true
    },
    redirect: '/home/index',
  },
  {
    path: '/login',
    name: 'Login',
    meta: {
      title: 'login',
      hide: true
    },
    component: () => import('@/views/login.vue')
  },

  {
    path: '/home',
    name: 'Home',
    component: Layout,
    meta: {
      title: '首页',
      icon: 'i-carbon-home'
    },
    redirect: '/home/index',
    children: [
      {
        path: '/home/index',
        name: 'Home',
        component: () => import('@/views/index.vue'),
      },
    ],
  },

  {
    path: '/error',
    meta: {
      title: 'error',
      hide: true
    },
    name: 'Error',
    component: Layout,
    children: [
      {
        path: '/404',
        name: '404',
        component: () => import('@/views/404.vue'),
        meta: {
          title: '404',
          hide: true,
        }
      },
    ],
  },
  {
    path: '/about',
    name: 'About',
    component: Layout,
    meta: {
      title: '关于',
      icon: 'i-carbon-information-square'
    },
    redirect: '/about/index',
    children: [
      {
        path: '/about/index',
        name: 'About',
        component: () => import('@/views/about/index.vue'),
      },
    ],
  },
  {
    path: '/menus',
    name: 'Menus',
    component: Layout,
    meta: {
      title: '菜单列表'
    },
    redirect: '/menus/menu1',
    children: [
      {
        path: '/menus/menu1',
        name: 'MenusMenu1',
        // component: () => import('@/views/menus/menu1.vue'),
        meta: {
          title: '菜单1'
        },
        redirect: '/menus/menu1/submenu1',
        children: [
          {
            path: '/menus/menu1/submenu1',
            name: 'SubMenusMenu1',
            component: () => import('@/views/subMenus/menu1.vue'),
            meta: {
              title: '2菜单1'
            },
          },
          {
            path: '/menus/menu1/submenu2',
            name: 'SubMenusMenu2',
            component: () => import('@/views/subMenus/menu2.vue'),
            meta: {
              title: '2菜单2'
            },
          }
        ]
      },
      {
        path: '/menus/menu2',
        name: 'MenusMenu2',
        component: () => import('@/views/menus/menu2.vue'),
        meta: {
          title: '菜单2'
        }
      },
    ],
  },

  {
    path: '/:pathMatch(.*)',
    name: 'error',
    redirect: '/404',
    meta: {
      title: '404',
      hide: true
    },
  },
]

export const asyncRoutes: RouteRecordRaw[] = [
  {
    path: '/about',
    name: 'About',
    component: Layout,
    meta: {
      title: '关于',
      icon: 'i-carbon-information-square'
    },
    redirect: '/about/index',
    children: [
      {
        path: '/about/index',
        name: 'About',
        component: () => import('@/views/about/index.vue'),
      },
    ],
  },
  {
    path: '/menus',
    name: 'Menus',
    component: Layout,
    meta: {
      title: '菜单列表'
    },
    redirect: '/menus/menu1',
    children: [
      {
        path: '/menus/menu1',
        name: 'MenusMenu1',
        // component: () => import('@/views/menus/menu1.vue'),
        meta: {
          title: '菜单1'
        },
        redirect: '/menus/menu1/submenu1',
        children: [
          {
            path: '/menus/menu1/submenu1',
            name: 'SubMenusMenu1',
            component: () => import('@/views/subMenus/menu1.vue'),
            meta: {
              title: '2菜单1'
            },
          },
          {
            path: '/menus/menu1/submenu2',
            name: 'SubMenusMenu2',
            component: () => import('@/views/subMenus/menu2.vue'),
            meta: {
              title: '2菜单2'
            },
          }
        ]
      },
      {
        path: '/menus/menu2',
        name: 'MenusMenu2',
        component: () => import('@/views/menus/menu2.vue'),
        meta: {
          title: '菜单2'
        }
      },
    ],
  },

]

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: constantRoutes
})

export function setupRouter(app: App) {
  app.use(router)
  createGuard(router)
}

