<template>
  <div>
    <h1>404 - Página não encontrada</h1>
    <router-link to="/" class="home">Voltar para a home</router-link>
  </div>
</template>

<script>
export default {
  name: "PaginaNaoEncontrada",
  created() {
    document.title = "404 - Página não encontrada | Ranek";
  },
};
</script>

<style scoped>
h1 {
  margin: 20px auto;
}

.home {
  display: block;

  text-align: center;

  transition: all 0.3s;
}

.home:hover {
  color: #87f;

  text-decoration: underline;
}
</style>
