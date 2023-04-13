import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/layout/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
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
          name: 'HomeIndex',
          component: () => import('@/views/index.vue'),
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
          name: 'AboutIndex',
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
      children: [
        {
          path: '/menus/menu1',
          name: 'MenusMenu1',
          // component: () => import('@/views/menus/menu1.vue'),
          meta: {
            title: '菜单1'
          },
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
      path: '/:pathMatch(.*)',
      name: 'error',
      redirect: '/404',
      meta: {
        title: '404',
        hide: true
      },
    },
  ],
})

export default router
