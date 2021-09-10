import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import iView from 'iview';
import 'iview/dist/styles/iview.css';    // 使用 CSS
import VueParticles from 'vue-particles'
import '@/assets/font/汉仪雪君体简.TTF';
Vue.config.productionTip = false
Vue.use(iView);
Vue.use(VueParticles)
Vue.use(ElementUI)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
