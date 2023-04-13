import { NIcon, type MenuOption } from "naive-ui";
import { RouterLink, type RouteRecordRaw } from 'vue-router';

/**
 * 
 * @param routes 
 */
export function loadMenus(routes: readonly RouteRecordRaw[]): MenuOption[] {
  let res: MenuOption[] = []
  routes.forEach(route => {
    const { name, path, meta } = route;
    const routeName = name as string;

    let menuChildren: MenuOption[] | undefined
    if (route.children && route.children.length > 0) {
      menuChildren = loadMenus(route.children);
    }
    const menuItem: MenuOption = addMenuItem({
      routePath: path,
      title: meta?.title as string | undefined,
      routeName,
      children: menuChildren,
      icon: meta?.icon as string | undefined
    })
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


function addMenuItem(config: Config): MenuOption {
  const { children, title, routeName, routePath, icon } = config
  let res: MenuOption = {}
  res.label = () =>
    h(
      RouterLink,
      {
        to: {
          path: routePath,
        }
      },
      { default: () => title }
    )

  if (children && children.length > 1) {
    res.children = children
    res.label = title
  }

  res.key = routeName
  res.icon = renderIcon(icon || 'i-carbon-list')

  return res
}

function renderIcon(icon: string) {
  return () => h(NIcon, null, { default: () => h('div', { class: icon, style: 'width: 20px;height:20px' }) })
}
