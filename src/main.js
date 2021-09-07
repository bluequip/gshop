import Vue from 'vue'
import App from './App.vue'
import router from "@/router";
import axios from "axios";

//将axios挂载到原型上
Vue.prototype.$axios = axios;

//配置全局的axios默认值（可选）

axios.defaults.baseURL = '/api';
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
