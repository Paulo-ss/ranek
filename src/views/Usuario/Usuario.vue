<template>
  <section class="usuario">
    <nav class="sidenav">
      <ul>
        <li><router-link :to="{ name: 'Usuario' }">Produtos</router-link></li>
        <li><router-link :to="{ name: 'Compras' }">Compras</router-link></li>
        <li><router-link :to="{ name: 'Vendas' }">Vendas</router-link></li>
        <li>
          <router-link :to="{ name: 'Usuario-editar' }"
            >Editar usuário</router-link
          >
        </li>
        <li><button type="button" @click="deslogar">Sair</button></li>
      </ul>
    </nav>

    <transition mode="out-in">
      <router-view></router-view>
    </transition>
  </section>
</template>

<script>
export default {
  name: "Usuario",
  methods: {
    deslogar() {
      this.$store.dispatch("deslogar");
      this.$router.push({ name: "Login" });
    },
  },
  created() {
    document.title = "Usuário | Ranek";
  },
};
</script>

<style scoped>
.usuario {
  display: grid;
  grid-template-columns: minmax(140px, 200px) 1fr;
  gap: 30px;

  max-width: 900px;

  padding: 20px;
  margin: 40px auto;
}

.sidenav a,
.sidenav button {
  padding: 10px;
  margin-bottom: 10px;

  background: #f4f7fc;

  border-radius: 4px;
}

.sidenav a.router-link-exact-active,
.sidenav a:hover,
.sidenav button:hover {
  background: #87f;
  color: #fff;
}

.sidenav button {
  border: none;

  width: 100%;

  font-size: 1rem;
  text-align: left;

  cursor: pointer;
}

@media screen and (max-width: 500px) {
  .usuario {
    grid-template-columns: 1fr;
    gap: 20px;

    margin: 0px auto;
  }
}
</style>
