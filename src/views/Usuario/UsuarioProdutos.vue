<template>
  <section>
    <h2>Adicionar produto</h2>

    <ProdutoAdicionar />

    <h2>Seus produtos</h2>
    <transition-group v-if="usuarioProdutos" name="list" tag="ul">
      <li v-for="(produto, index) in usuarioProdutos" :key="produto + index">
        <ProdutoItem :produto="produto">
          <p>{{ produto.descricao }}</p>
          <button class="deletar" @click="deletarProduto(produto.id)">
            Deletar produto
          </button>
        </ProdutoItem>
      </li>
    </transition-group>
  </section>
</template>

<script>
import ProdutoAdicionar from "@/components/produtos/ProdutoAdicionar";
import ProdutoItem from "@/components/produtos/ProdutoItem";
import { mapState, mapActions } from "vuex";
import { api } from "../../helpers/services";

export default {
  name: "UsuarioProdutos",
  components: {
    ProdutoAdicionar,
    ProdutoItem,
  },
  computed: {
    ...mapState(["login", "usuario", "usuarioProdutos"]),
  },
  methods: {
    ...mapActions(["getUsuarioProdutos"]),
    async deletarProduto(produtoId) {
      const confirmarDelete = window.confirm(
        "Você realmente deseja deletar esse item?"
      );

      if (confirmarDelete) {
        try {
          await api.delete(`/produto/${produtoId}`);
          this.getUsuarioProdutos();
        } catch (error) {
          console.log(error);
        }
      }
    },
  },
  watch: {
    login() {
      this.getUsuarioProdutos();
    },
  },
  created() {
    if (this.login) {
      this.getUsuarioProdutos();
    }

    document.title = "Seus produtos | Ranek";
  },
};
</script>

<style scoped>
h2 {
  margin-bottom: 20px;
}

.list-enter,
.list-leave-to {
  opacity: 0;
  transform: translate3d(20px, 0, 0);
}

.list-enter-active,
.list-leave-active {
  transition: all 0.3s;
}

.deletar {
  position: absolute;
  top: 0;
  right: 0;

  background: url("../../assets/remove.svg") no-repeat center center;

  border: none;

  width: 24px;
  height: 24px;

  text-indent: -200px;

  overflow: hidden;

  cursor: pointer;
}
</style>
