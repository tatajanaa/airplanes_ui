import Vue from 'vue'
import App from './App.vue'
import store from "./store/store.js";
import VueApexCharts from 'vue-apexcharts'

Vue.component('apexchart', VueApexCharts)
Vue.config.productionTip = false
new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
