<template>
  <header>
    <nav>
      <router-link to="/" class="logo">
        <img src="@/assets/ranek.svg" alt="Logo Ranek" />
      </router-link>
      <router-link v-if="$store.state.login" class="btn" to="/usuario">
        {{ nomeUsuario }}
      </router-link>
      <router-link v-else class="btn" to="/login"> Vender / Login </router-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header",
  computed: {
    nomeUsuario() {
      return this.$store.state.usuario.nome.replace(/ .*/, "");
    },
  },
};
</script>

<style scoped>
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 15px 20px;

  box-shadow: 0 2px 4px rgba(30, 60, 90, 0.1);
}

.logo {
  padding: 10px 0;
}

.logo img {
  width: 90px;
}
</style>
