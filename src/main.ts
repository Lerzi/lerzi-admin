import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from '@/App.vue'
import { setupRouter } from '@/router'
import '@unocss/reset/tailwind.css'
import 'uno.css'

// 通用字体
import 'vfonts/Lato.css'
// 等宽字体
import 'vfonts/FiraCode.css'

import '@/assets/index.css'

const app = createApp(App)
const pinia = createPinia()
app.use(pinia)

setupRouter(app)

const meta = document.createElement('meta')
meta.name = 'naive-ui-style'
document.head.appendChild(meta)

app.mount('#app')
