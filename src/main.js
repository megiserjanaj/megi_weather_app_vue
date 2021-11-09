import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "/src/assets/styles/styles.scss";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  components: { App },
  render: (h) => h(App)
}).$mount("#app")
