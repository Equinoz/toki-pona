import './assets/style/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { StatusBar, Style } from '@capacitor/status-bar'

import App from './App.vue'
import router from './router'

const app = createApp(App)

StatusBar.setBackgroundColor({ color: '#06222A' }).catch(()=>{});
const setStatusBarStyleDark = async () => {
  await StatusBar.setStyle({ style: Style.Dark }).catch(()=>{});
};
setStatusBarStyleDark();

app.use(createPinia())
app.use(router)

app.mount('#app')
