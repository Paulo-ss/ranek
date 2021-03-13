<template>
  <form class="produto-adicionar">
    <label for="nomeProduto">Nome do produto</label>
    <input
      type="text"
      name="nomeProduto"
      id="nomeProduto"
      v-model="produto.nome"
    />

    <label for="precoProduto">Preco (R$)</label>
    <input
      type="text"
      name="precoProduto"
      id="precoProduto"
      v-model.number="produto.preco"
    />

    <label for="descricao">Descrição</label>
    <textarea
      name="descricao"
      id="descricao"
      v-model="produto.descricao"
    ></textarea>

    <label for="fotos">Fotos</label>
    <!-- O v-model não funciona com inputs do type file, então
    para ter acesso a ele, usa-se o ref, semelhante ao useRef()
    do React -->
    <input type="file" name="fotos" id="fotos" ref="fotos" />

    <button type="submit" class="btn" @click.prevent="adicionarProduto">
      Adicionar produto
    </button>
  </form>
</template>

<script>
import { api } from "../../helpers/services";

export default {
  name: "ProdutoAdicionar",
  data() {
    return {
      produto: {
        nome: "",
        preco: "",
        descricao: "",
        fotos: null,
        vendido: "false",
      },
    };
  },
  methods: {
    formatarProduto() {
      this.produto.usuario_id = this.$store.state.usuario.id;
    },
    async adicionarProduto() {
      this.formatarProduto();
      await api.post("/produto", this.produto);
      this.$store.dispatch("getUsuarioProdutos");
    },
  },
};
</script>

<style scoped>
.produto-adicionar {
  display: grid;
  grid-template-columns: 100px 1fr;
  align-items: center;

  margin-bottom: 60px;
}

.btn {
  grid-column: 2;
}
</style>
