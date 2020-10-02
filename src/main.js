import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";

import VueLayers from "vuelayers";
import "vuelayers/lib/style.css"; // needs css-loader

import axios from "axios";

axios.defaults.baseURL = "/";

Vue.prototype.$ajax = axios;

Vue.use(VueLayers);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
