# lerzi-admin

## 项目安装

```sh
pnpm install
```

### 开发环境

```sh
pnpm dev
```

### 生产环境

```sh
pnpm build
```

### 单元测试[Vitest](https://vitest.dev/)

```sh
pnpm test:unit
```

###  [ESLint](https://eslint.org/)

```sh
pnpm lint
```

## TODO LIST

- [ ] 动态路由&&权限
- [x] layout page header
  - [x] 退出登录
  - [x] 面包屑
  - [x] 用户中心
  - [x] GitHUb
  - [x] 搜索
  - [x] 全屏
- [x] 标签栏


## 目录结构

```bash
├── mock                       # 项目mock 模拟数据
├── public                     # 静态资源
│   │── favicon.svg            # favicon图标
├── src                        # 源代码
│   ├── api                    # 所有请求
│   ├── assets                 # 图片字体等静态资源
│   ├── components             # 全局公用组件
│   ├── composables             # 全局组合式函数
│   ├── layout                 # 全局 layout
│   ├── router                 # 路由
│   ├── store                  # 全局 store管理
│   ├── theme                 # 全局主题
│   ├── utils                  # 全局公用方法
│   ├── views                  # views 所有页面
│   ├── App.vue                # 入口页面
│   ├── auto-imports.d.ts      # 自动引入
│   ├── components.d.ts        # 自动引入组件
│   ├── global.d.ts			   # 全局命名空间
│   ├── main.ts                # 入口文件 加载组件 初始化等
├── index.html                   # html模板
├── .env.xxx                   # 环境变量配置
├── .eslintrc                  # eslint 配置项
├── uno.config.ts              # unocss 原子化Css 配置
├── vite.config.js              # vite 配置
├── postcss.config.js          # postcss 配置
└── package.json               # package.json
```
