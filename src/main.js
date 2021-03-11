import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Carregando from "./components/helpers/Carregando";

Vue.config.productionTip = false;

// Componentes globais
Vue.component("Carregando", Carregando);

// Filters globais
Vue.filter("numeroPreco", (valor) => {
  valor = Number(valor);

  if (!isNaN(valor)) {
    return valor.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  }
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
