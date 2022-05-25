import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import CompositionApi from "@vue/composition-api";
import "@/assets/scss/main.scss";
import "@/plugins/api";
import axios from "@/plugins/axios";
import VueAxios from "vue-axios";

Vue.use(CompositionApi);
Vue.use(VueAxios, axios);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
