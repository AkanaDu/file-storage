/*
 * @Author: KafkaDu banshee1115@163.com
 * @Date: 2024-09-11 11:04:10
 * @LastEditors: KafkaDu banshee1115@163.com
 * @LastEditTime: 2024-09-11 16:36:03
 * @FilePath: \file-storage\src\main.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './tailwindcss.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
