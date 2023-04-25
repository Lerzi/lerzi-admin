import { NIcon, type MenuOption } from "naive-ui";
import { RouterLink, type RouteRecordRaw } from 'vue-router';
import type { Ref } from 'vue'

type menuType = 'RouterLink' | 'Text'

export function useMenus(routes: readonly RouteRecordRaw[], type: menuType = 'RouterLink'): Ref<MenuOption[]> {
  const res = ref<MenuOption[]>()
  res.value = loadMenus(routes, type)
  return res as Ref<MenuOption[]>
}

/**
 * 
 * @param routes 
 */
function loadMenus(routes: readonly RouteRecordRaw[], type: menuType): MenuOption[] {
  let res: MenuOption[] = []
  routes.forEach(route => {
    const { name, path, meta } = route;
    const routeName = name as string;

    let menuChildren: MenuOption[] | undefined
    if (route.children && route.children.length > 0) {
      menuChildren = loadMenus(route.children, type);
    }
    const menuItem: MenuOption = addMenuItem({
      routePath: path,
      title: meta?.title as string | undefined,
      routeName,
      children: menuChildren,
      icon: meta?.icon as string | undefined
    }, type)
    if (!meta?.hide) {
      res.push(menuItem)
    }
  })
  return res
}

interface Config {
  routePath: string
  title?: string
  routeName: string
  children?: MenuOption[],
  icon?: string
}


function addMenuItem(config: Config, type: menuType): MenuOption {
  const { children, title, routePath, icon } = config
  let res: MenuOption = {}
  res.label = () =>
    h(
      RouterLink,
      {
        to: {
          path: routePath,
        },
        style: 'width:100%'
      },
      { default: () => title }
    )

  if (children && children.length > 1) {
    res.children = children
    res.label = title
  }

  if (type === 'Text') {
    res.label = title
  }

  res.key = routePath
  res.icon = renderIcon(icon || 'i-carbon-list')

  return res
}

function renderIcon(icon: string) {
  return () => h(NIcon, null, { default: () => h('div', { class: icon, style: 'width: 20px;height:20px' }) })
}
