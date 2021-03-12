import Vue from "vue";
import Vuex from "vuex";
import { api } from "../helpers/services";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
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
    usuarioProdutos: null,
  },
  mutations: {
    UPDATE_LOGIN(state, payload) {
      state.login = payload;
    },
    UPDATE_USUARIO(state, payload) {
      state.usuario = Object.assign(state.usuario, payload);
    },
    UPDATE_USUARIO_PRODUTOS(state, payload) {
      state.usuarioProdutos = payload;
    },
    ADD_USUARIO_PRODUTOS(state, paylaod) {
      state.usuarioProdutos.unshift(paylaod);
    },
  },
  actions: {
    async getUsuario(context, payload) {
      const response = await api.get(`/usuario/${payload}`);

      context.commit("UPDATE_USUARIO", response.data);
      context.commit("UPDATE_LOGIN", true);
    },
    async cadastrarUsuario(context, payload) {
      context.commit("UPDATE_USUARIO", { id: payload.email });
      await api.post("/usuario", payload);
    },
    deslogar(context) {
      context.commit("UPDATE_LOGIN", false);
      context.commit("UPDATE_USUARIO", {
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
      });
    },
    async getUsuarioProdutos(context) {
      const response = await api.get(
        `/produto?usuario_id=${context.state.usuario.id}`
      );

      context.commit("UPDATE_USUARIO_PRODUTOS", response.data);
    },
  },
});
