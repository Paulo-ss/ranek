<template>
  <div>
    <ul v-if="paginasTotal > 1">
      <router-link v-if="paginaAtual > 1" :to="{ query: { _page: 1 } }">
        Primeira
      </router-link>

      <li v-for="pagina in paginas" :key="pagina">
        <router-link :to="{ query: query(pagina) }">
          {{ pagina }}
        </router-link>
      </li>

      <router-link
        v-if="paginaAtual < paginasTotal"
        :to="{ query: { _page: paginasTotal } }"
      >
        Última
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ProdutosPaginacao",
  props: {
    produtosTotal: {
      type: Number,
      default: 1,
    },
    produtosPorPagina: {
      type: Number,
      default: 1,
    },
  },
  computed: {
    paginas() {
      const paginaAtual = Number(this.$route.query._page);
      const paginasParaMostrar = 9;
      const alcance = Math.ceil(paginasParaMostrar / 2);
      const paginasTotal = this.paginasTotal;

      const paginasArray = [];

      // Array com o total de páginas encontradas
      for (let i = 1; i <= paginasTotal; i++) {
        paginasArray.push(i);
      }

      paginasArray.splice(0, paginaAtual - alcance);
      paginasArray.splice(paginasParaMostrar, paginasTotal);

      return paginasArray;
    },
    paginasTotal() {
      const total = Math.ceil(this.produtosTotal / this.produtosPorPagina);

      return total;
    },
    paginaAtual() {
      return this.$route.query._page;
    },
  },
  methods: {
    query(pagina) {
      return {
        ...this.$route.query,
        _page: pagina,
      };
    },
  },
};
</script>

<style scoped>
li {
  display: inline-block;
}

li a {
  padding: 2px 8px;
  margin: 4px;

  border-radius: 2px;
}

li a.router-link-exact-active,
li a:hover {
  background: #87f;
  color: #fff;
}
</style>
