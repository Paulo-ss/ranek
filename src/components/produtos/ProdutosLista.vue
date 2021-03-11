<template>
  <section class="produtos-container">
    <transition mode="out-in">
      <div v-if="produtos && produtos.length" class="produtos" key="produtos">
        <div
          v-for="(produto, index) in produtos"
          :key="produto.id + index"
          class="produto"
        >
          <router-link :to="{ name: 'Produto', params: { id: produto.id } }">
            <img
              v-if="produtos.fotos"
              :src="produto.fotos[0]"
              :alt="produto.fotos[0].titulo"
            />

            <h2 class="titulo">{{ produto.nome }}</h2>
            <p class="preco">{{ produto.preco | numeroPreco }}</p>
            <p class="titulo">{{ produto.descricao }}</p>
          </router-link>
        </div>

        <ProdutosPaginacao
          :produtosTotal="produtosTotal"
          :produtosPorPagina="produtosPorPagina"
        />
      </div>
      <div v-else-if="produtos && produtos.length === 0" key="sem-resultados">
        <p class="sem-resultados">
          Busca sem resultados. Tente buscar outro termo
        </p>
      </div>
      <Carregando v-else key="carregando" />
    </transition>
  </section>
</template>

<script>
import { api } from "../../helpers/services";
import serialize from "../../helpers/serialize";
import ProdutosPaginacao from "./ProdutosPaginacao";

export default {
  name: "ProdutosLista",
  data() {
    return {
      produtos: null,
      produtosPorPagina: 9,
      produtosTotal: 0,
    };
  },
  components: {
    ProdutosPaginacao,
  },
  computed: {
    url() {
      const query = serialize(this.$route.query);

      return `?_limit=${this.produtosPorPagina}${query}`;
    },
  },
  methods: {
    async getProdutos() {
      this.produtos = null;

      const response = await api.get(`/produto${this.url}`);

      this.produtos = response.data;
      this.produtosTotal = Number(response.headers["x-total-count"]);
    },
  },
  created() {
    this.getProdutos();
  },
  watch: {
    url() {
      this.getProdutos();
    },
  },
};
</script>

<style scoped>
.produtos-container {
  max-width: 1000px;

  margin: 0 auto;
}

.produtos {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;

  margin: 30px;
}

.produto {
  background: #fff;

  border-radius: 4px;

  padding: 10px;

  box-shadow: 0 4px 8px rgba(30, 60, 90, 0.1);

  transition: all 0.2s;
}

.produto:hover {
  box-shadow: 0 6px 12px rgba(30, 60, 90, 0.2);

  transform: scale(1.1);

  z-index: 1;
}

.produto img {
  border-radius: 4px;

  margin-bottom: 20px;
}

.titulo {
  margin-bottom: 10px;
}

.preco {
  color: #e80;

  font-weight: 700;

  margin-bottom: 10px;
}

.sem-resultados {
  text-align: center;
}
</style>
