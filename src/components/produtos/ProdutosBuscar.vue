<template>
  <form>
    <input
      type="text"
      name="busca"
      id="busca"
      v-model="busca"
      placeholder="Buscar..."
    />
    <button type="submit" id="lupa" @click.prevent="buscarProdutos">
      Buscar produtos
    </button>
  </form>
</template>

<script>
export default {
  name: "ProdutosBuscar",
  data() {
    return {
      busca: "",
    };
  },
  methods: {
    buscarProdutos() {
      this.$router.push({ query: { q: this.busca } });
    },
  },
};
</script>

<style scoped>
form {
  position: relative;

  max-width: 600px;

  padding: 0 10px;
  margin: 30px auto 60px auto;
}

#busca {
  width: 100%;

  padding: 20px;

  border: none;
}

#busca:hover,
#busca:focus {
  transform: scale(1.1);
}

#lupa {
  position: absolute;
  top: 0;
  right: 0;

  width: 62px;
  height: 62px;

  background: url("../../assets/search.svg") no-repeat center center;

  text-indent: -180px;

  border: none;

  cursor: pointer;

  overflow: hidden;
}
</style>
