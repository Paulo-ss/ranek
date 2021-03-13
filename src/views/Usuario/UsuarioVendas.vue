<template>
  <section>
    <h2>Suas vendas</h2>

    <div v-if="vendas && vendas.length">
      <div
        class="produtos-wrapper"
        v-for="(venda, index) in vendas"
        :key="index"
      >
        <ProdutoItem v-if="venda.produto" :produto="venda.produto">
          <p class="vendedor">
            <span>Comprador:</span>
            {{ venda.comprador_id }}
          </p>
        </ProdutoItem>

        <div class="entrega">
          <h3>Entrega:</h3>

          <ul v-if="venda.endereco">
            <li v-for="(value, key) in venda.endereco" :key="key">
              <b>{{ key | primeiraLetraMaiuscula }}:</b> {{ value }}
            </li>
          </ul>
        </div>
      </div>
    </div>
    <p v-else-if="!vendas.length">Você ainda não efetuou vendas...</p>
  </section>
</template>

<script>
import ProdutoItem from "@/components/produtos/ProdutoItem";
import { api } from "../../helpers/services";
import { mapState } from "vuex";

export default {
  name: "UsuarioVendas",
  data() {
    return {
      vendas: null,
    };
  },
  components: {
    ProdutoItem,
  },
  computed: {
    ...mapState(["usuario", "login"]),
  },
  filters: {
    primeiraLetraMaiuscula(palavra) {
      return palavra.charAt(0).toUpperCase() + palavra.slice(1);
    },
  },
  methods: {
    async getVendas() {
      const response = await api.get(
        `/transacao?vendedor_id=${this.usuario.id}`
      );

      this.vendas = response.data;
    },
  },
  watch: {
    login() {
      this.getVendas();
    },
  },
  created() {
    if (this.login) {
      this.getVendas();
    }
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

.entrega {
  display: grid;
  grid-template-columns: minmax(100px, 200px) 1fr;
  gap: 20px;

  margin-bottom: 60px;
}

.entrega h3 {
  justify-self: end;
}

.entrega li + li {
  margin-top: 10px;
}
</style>
