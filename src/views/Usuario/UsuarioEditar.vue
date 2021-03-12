<template>
  <section>
    <UsuarioForm>
      <button class="btn" @click.prevent="atualizarUsuario">
        Atualizar dados
      </button>
    </UsuarioForm>
  </section>
</template>

<script>
import UsuarioForm from "@/components/usuario/UsuarioForm";
import { api } from "../../helpers/services";

export default {
  name: "UsuarioEditar",
  components: {
    UsuarioForm,
  },
  methods: {
    async atualizarUsuario() {
      try {
        await api.put(
          `/usuario/${this.$store.state.usuario.id}`,
          this.$store.state.usuario
        );
        await this.$store.dispatch("getUsuario", this.$store.state.usuario.id);

        this.$router.push({ name: "Usuario" });
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style scoped></style>
