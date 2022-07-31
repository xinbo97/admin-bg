import Vue from 'vue'
import axios from './axios';
// import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import router from './router'
// 导入字体图标
import './assets/icon/iconfont.css'
// 导入全局样式表
import './assets/css/global.css'
import element from './plugins/element'

Vue.config.productionTip = false

Vue.prototype.$http = axios
Vue.use(element);
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
