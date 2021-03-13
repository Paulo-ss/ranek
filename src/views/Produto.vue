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

        <transition mode="out-in" v-if="produto.vendido === 'false'">
          <button class="btn" v-if="!finalizar" @click="finalizar = true">
            Comprar
          </button>
          <FinalizarCompra :produto="produto" v-else />
        </transition>
        <button class="btn" v-else>Produto vendido</button>
      </div>
    </div>
    <Carregando v-else />
  </section>
</template>

<script>
import { api } from "@/helpers/services";
import FinalizarCompra from "@/components/compra/FinalizarCompra";

export default {
  name: "Produto",
  props: {
    id: String,
  },
  components: {
    FinalizarCompra,
  },
  data() {
    return {
      produto: null,
      finalizar: false,
    };
  },
  methods: {
    async getProduto() {
      this.produto = null;

      const response = await api.get(`/produto/${this.id}`);

      this.produto = response.data;

      document.title = this.produto.nome + " | Ranek";
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

.fotos {
  grid-row: 1 / 3;
}

.info {
  position: sticky;
  top: 20px;
}

.descricao {
  font-size: 1.2rem;
}

.btn {
  margin-top: 60px;
  width: 200px;
}

@media screen and (max-width: 500px) {
  .produto {
    grid-template-columns: 1fr;
  }

  .fotos {
    grid-row: 2;
  }

  .info {
    position: initial;
  }
}
</style>
