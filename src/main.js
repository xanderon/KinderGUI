import Vue from 'vue'
import App from './App.vue'
import VueMaterial from 'vue-material';

import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/default.css';

import Receipts from "./components/Receipts.vue";
import AddReceipt from "./components/AddReceipt.vue";

import store from './store';

import VueRouter from 'vue-router';

Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(VueMaterial);

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', name: 'home', component: AddReceipt },
    { path: '/receipts', name: 'receipts', component: Receipts },
    { path: '/addReceipts', name: 'addReceipts', component: AddReceipt }
  ]
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
