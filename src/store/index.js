import Vue from "vue";
import Vuex from "vuex";
import { api } from "../helpers/services";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    login: false,
    usuario: {
      id: "",
      nome: "",
      email: "",
      senha: "",
      cep: "",
      rua: "",
      numero: "",
      bairro: "",
      cidade: "",
      estado: "",
    },
  },
  mutations: {
    UPDATE_LOGIN(state, payload) {
      state.login = payload;
    },
    UPDATE_USUARIO(state, payload) {
      state.usuario = payload;
    },
  },
  actions: {
    async getUsuario(context, payload) {
      const response = await api.get(`/usuario/${payload}`);

      context.commit("UPDATE_USUARIO", response.data);
      context.commit("UPDATE_LOGIN", true);
    },
  },
});
