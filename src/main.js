import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Carregando from "./components/helpers/Carregando";
import ErroNotificacao from "./components/error/ErroNotificacao";

Vue.config.productionTip = false;

// Criando uma navigation guard caso o usuário tente
// entrar em alguma rota que seja necessário estar
// logado sem estar logado, ele seja redirecionado para
// a página de login
router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.login)) {
    if (store.state.login) {
      next("/Login");
    } else {
      next();
    }
  } else {
    next();
  }
});

// Componentes globais
Vue.component("Carregando", Carregando);
Vue.component("ErroNotificacao", ErroNotificacao);

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
