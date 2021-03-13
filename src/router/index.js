import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home";
import Produto from "../views/Produto";
import Login from "../views/Login";
import Usuario from "../views/Usuario/Usuario";
import UsuarioProdutos from "../views/Usuario/UsuarioProdutos";
import UsuarioEditar from "../views/Usuario/UsuarioEditar";
import UsuarioCompras from "../views/Usuario/UsuarioCompras";
import UsuarioVendas from "../views/Usuario/UsuarioVendas";
import PaginaNaoEncontrada from "../views/PaginaNaoEncontrada";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "*",
      component: PaginaNaoEncontrada,
    },
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/produto/:id",
      name: "Produto",
      component: Produto,
      props: true,
    },
    {
      path: "/login",
      name: "Login",
      component: Login,
    },
    {
      path: "/usuario",
      component: Usuario,
      meta: {
        login: true,
      },
      children: [
        {
          path: "",
          name: "Usuario",
          component: UsuarioProdutos,
        },
        {
          path: "compras",
          name: "Compras",
          component: UsuarioCompras,
        },
        {
          path: "vendas",
          name: "Vendas",
          component: UsuarioVendas,
        },
        {
          path: "usuario-editar",
          name: "Usuario-editar",
          component: UsuarioEditar,
        },
      ],
    },
  ],
  scrollBehavior() {
    return window.scrollTo({ top: 0, behavior: "smooth" });
  },
});

export default router;
