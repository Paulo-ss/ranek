<template>
  <section>
    <h2>Crie a sua conta</h2>

    <transition mode="out-in">
      <button v-if="!criar" class="btn" @click="criar = true">
        Criar conta
      </button>
      <UsuarioForm v-else>
        <button type="submit" class="btn" @click="cadastrarUsuario">
          Cadastrar
        </button>
      </UsuarioForm>
    </transition>

    <ErroNotificacao :erros="erros" />
  </section>
</template>

<script>
import UsuarioForm from "@/components/usuario/UsuarioForm";
import ErroNotificacao from "@/components/error/ErroNotificacao";

export default {
  name: "Cadastrar",
  data() {
    return {
      criar: false,
      erros: [],
    };
  },
  components: {
    UsuarioForm,
    ErroNotificacao,
  },
  methods: {
    async cadastrarUsuario() {
      try {
        this.erros = [];

        await this.$store.dispatch(
          "cadastrarUsuario",
          this.$store.state.usuario
        );
        await this.$store.dispatch(
          "getUsuario",
          this.$store.state.usuario.email
        );

        this.$router.push({ name: "Usuario" });
      } catch (error) {
        this.erros.push(error.response.data.message);
      }
    },
  },
};
</script>

<style scoped>
h2 {
  text-align: center;

  margin-top: 40px;
  margin-bottom: 10px;
}

.btn {
  width: 100%;
  max-width: 300px;

  margin: 0 auto;
}
</style>
