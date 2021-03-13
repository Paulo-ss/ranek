<template>
  <section>
    <UsuarioForm>
      <button class="btn" @click.prevent="atualizarUsuario">
        Atualizar dados
      </button>
    </UsuarioForm>

    <ErroNotificacao :erros="erros" />
  </section>
</template>

<script>
import UsuarioForm from "@/components/usuario/UsuarioForm";
import { api } from "../../helpers/services";
import ErroNotificacao from "@/components/error/ErroNotificacao";

export default {
  name: "UsuarioEditar",
  components: {
    UsuarioForm,
    ErroNotificacao,
  },
  data() {
    return {
      erros: [],
    };
  },
  methods: {
    async atualizarUsuario() {
      try {
        this.erros = [];

        await api.put(
          `/usuario/${this.$store.state.usuario.id}`,
          this.$store.state.usuario
        );
        await this.$store.dispatch("getUsuario", this.$store.state.usuario.id);

        this.$router.push({ name: "Usuario" });
      } catch (error) {
        this.erros.push(error.response.data.message);
      }
    },
  },
  created() {
    document.title = "Edite seus dados | Ranek";
  },
};
</script>

<style scoped></style>
