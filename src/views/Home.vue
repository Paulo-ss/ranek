<template>
  <section>
    <h1>Compre ou venda</h1>
    <ProdutosBuscar />
    <ProdutosLista />
  </section>
</template>

<script>
import ProdutosBuscar from "@/components/produtos/ProdutosBuscar";
import ProdutosLista from "@/components/produtos/ProdutosLista";

export default {
  name: "Home",
  components: {
    ProdutosBuscar,
    ProdutosLista,
  },
};
</script>

<style scoped>
h1 {
  font-size: 2rem;
  text-align: center;

  color: #87f;

  margin-top: 40px;
}
</style>
