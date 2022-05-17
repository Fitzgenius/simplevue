import Vue from "vue";
import store from './store'
import { BootstrapVue, BootstrapVueIcons } from "bootstrap-vue";
import App from "./App.vue";
import titleMixin from './mixins/pageTitle'

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.mixin(titleMixin)
Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);

Vue.config.productionTip = false;

new Vue({
  store,
  render: (h) => h(App)
}).$mount("#app");
