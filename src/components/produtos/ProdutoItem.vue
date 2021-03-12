<template>
  <div v-if="produto" class="produto">
    <router-link
      :to="{ name: 'Produto', params: { id: produto.id } }"
      class="produto-img"
    >
      <img
        v-if="produto.fotos"
        :src="produto.fotos[0].src"
        :alt="produto.fotos[0].titulo"
      />
      <p>Ver produto</p>
    </router-link>

    <div class="info">
      <h2 class="titulo">{{ produto.nome }}</h2>
      <p class="preco">{{ produto.preco | numeroPreco }}</p>

      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProdutoItem",
  props: {
    produto: Object,
  },
};
</script>

<style scoped>
.produto {
  display: grid;
  grid-template-columns: minmax(100px, 200px) 1fr;
  gap: 20px;

  position: relative;

  margin-bottom: 40px;
}

.produto-img {
  border-radius: 4px;

  height: 100px;

  overflow: hidden;
}

.info {
  align-self: end;
}
</style>
