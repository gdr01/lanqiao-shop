import { createApp } from 'vue'
import App from './App.vue'
import './style/index.scss'
import router from './router'

//加上路由器相关配置
createApp(App).use(router) .mount('#app')
