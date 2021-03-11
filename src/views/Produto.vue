<template>
  <section>
    <div v-if="produto" class="produto">
      <ul class="fotos" v-if="produto.fotos">
        <li v-for="(foto, index) in produto.fotos" :key="index">
          <img :src="foto.src" :alt="foto.titulo" />
        </li>
      </ul>

      <div class="info">
        <h1>{{ produto.nome }}</h1>
        <p class="preco">{{ produto.preco | numeroPreco }}</p>
        <p class="descricao">{{ produto.descricao }}</p>

        <button class="btn" v-if="produto.vendido === 'false'">Comprar</button>
        <button class="btn" v-else>Produto vendido</button>
      </div>
    </div>
    <Carregando v-else />
  </section>
</template>

<script>
import { api } from "@/helpers/services";

export default {
  name: "Produto",
  props: {
    id: String,
  },
  data() {
    return {
      produto: null,
    };
  },
  methods: {
    async getProduto() {
      this.produto = null;

      const response = await api.get(`/produto/${this.id}`);

      this.produto = response.data;
    },
  },
  created() {
    this.getProduto();
  },
};
</script>

<style scoped>
.produto {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;

  max-width: 900px;

  padding: 60px 20px;
  margin: 0 auto;
}

.preco {
  color: #e80;

  font-weight: 700;
  font-size: 1.5rem;

  margin-bottom: 40px;
}

.descricao {
  font-size: 1.2rem;
}

.btn {
  margin-top: 60px;
  width: 200px;
}
</style>
