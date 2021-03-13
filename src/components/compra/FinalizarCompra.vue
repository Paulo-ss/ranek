<template>
  <section>
    <h2>Endereço de envio</h2>

    <UsuarioForm>
      <button class="btn" @click="finalizarCompra">Finalizar compra</button>
    </UsuarioForm>

    <ErroNotificacao :erros="erros" />
  </section>
</template>

<script>
import UsuarioForm from "@/components/usuario/UsuarioForm";
import { api } from "../../helpers/services";
import { mapState } from "vuex";
import ErroNotificacao from "@/components/error/ErroNotificacao";

export default {
  name: "FinalizarCompra",
  props: {
    produto: Object,
  },
  data() {
    return {
      erros: [],
    };
  },
  components: {
    UsuarioForm,
    ErroNotificacao,
  },
  computed: {
    ...mapState(["usuario", "login"]),
    compra() {
      return {
        comprador_id: this.usuario.email,
        vendedor_id: this.produto.usuario_id,
        produto: this.produto,
        endereco: {
          cep: this.usuario.cep,
          rua: this.usuario.rua,
          numero: this.usuario.numero,
          bairro: this.usuario.bairro,
          cidade: this.usuario.cidade,
          estado: this.usuario.estado,
        },
      };
    },
  },
  methods: {
    async efetuarCompra() {
      await api.post("/transacao", this.compra);
      this.$router.push({ name: "Compras" });
    },
    async cadastrarUsuario() {
      try {
        await this.$store.dispatch(
          "cadastrarUsuario",
          this.$store.state.usuario
        );
        await this.$store.dispatch(
          "getUsuario",
          this.$store.state.usuario.email
        );

        this.efetuarCompra();
      } catch (error) {
        this.erros.push(error.response.data.message);
      }
    },
    finalizarCompra() {
      this.erros = [];

      if (this.login) {
        this.efetuarCompra();
      } else {
        this.cadastrarUsuario();
      }
    },
  },
};
</script>

<style scoped>
h2 {
  margin-top: 40px;
  margin-bottom: 20px;
}

.btn {
  background: #e80;
}
</style>
