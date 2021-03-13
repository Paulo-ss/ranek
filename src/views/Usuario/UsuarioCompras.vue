<template>
  <section>
    <h2>Suas compras</h2>

    <div v-if="compras && compras.length">
      <div
        class="produtos-wrapper"
        v-for="(compra, index) in compras"
        :key="index"
      >
        <ProdutoItem v-if="compra.produto" :produto="compra.produto">
          <p class="vendedor">
            <span>Vendedor:</span>
            {{ compra.vendedor_id }}
          </p>
        </ProdutoItem>
      </div>
    </div>
    <p v-else-if="!compras.length">Você ainda não efetuou compras...</p>
  </section>
</template>

<script>
import ProdutoItem from "@/components/produtos/ProdutoItem";
import { api } from "../../helpers/services";
import { mapState } from "vuex";

export default {
  name: "UsuarioCompras",
  data() {
    return {
      compras: null,
    };
  },
  components: {
    ProdutoItem,
  },
  computed: {
    ...mapState(["usuario", "login"]),
  },
  methods: {
    async getCompras() {
      const response = await api.get(
        `/transacao?comprador_id=${this.usuario.id}`
      );

      this.compras = response.data;
    },
  },
  watch: {
    login() {
      this.getCompras();
    },
  },
  created() {
    if (this.login) {
      this.getCompras();
    }

    document.title = "Suas compras | Ranek";
  },
};
</script>

<style scoped>
h2 {
  margin-bottom: 20px;
}

.produtos-wrapper {
  margin-bottom: 40px;
}

.vendedor span {
  color: #e80;
}
</style>
