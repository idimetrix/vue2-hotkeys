import Vue from "vue";
import App from "./App.vue";

import VueHotkeys from "./hotkeys";

Vue.use(VueHotkeys);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
