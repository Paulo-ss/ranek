<template>
  <div id="app">
    <!-- Header do site -->
    <Header />

    <main>
      <transition mode="out-in">
        <router-view />
      </transition>
    </main>

    <!-- Footer do site -->
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/gerais/Header";
import Footer from "@/components/gerais/Footer";

export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
};
</script>

<style>
/* Estilos gerais do site */
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body,
button,
input,
textarea {
  font-family: "Josefin Sans", sans-serif;
  color: #345;
}

body {
  background: url("./assets/pattern.svg") repeat top;
}

ul {
  list-style: none;
}

a {
  display: block;

  color: #345;
  text-decoration: none;
}

img {
  display: block;
  max-width: 100%;
}

input,
textarea {
  border-radius: 4px;
  border: 1px solid #fff;

  padding: 15px;
  margin-bottom: 15px;

  box-shadow: 0 4px 8px rgba(30, 60, 90, 0.1);

  transition: all 0.3s;

  font-size: 1rem;
}

input:hover,
input:focus,
textarea:hover,
textarea:focus {
  outline: none;

  box-shadow: 0 6px 12px rgba(30, 60, 90, 0.2);

  border-color: #87f;
}

label {
  margin-bottom: 5px;
}

/* Classe de transition geral */
.v-enter,
.v-leave-to {
  opacity: 0;
}

.v-enter {
  transform: translate3d(0, -20px, 0);
}

.v-leave-to {
  transform: translate3d(0, 20px, 0);
}

.v-enter-active,
.v-leave-active {
  transition: all 0.3s;
}

/* Classe geral de botão */
.btn {
  display: block;

  padding: 10px 30px;

  background: #87f;
  color: #fff;

  border: none;
  border-radius: 4px;

  text-align: center;
  font-size: 1rem;

  box-shadow: 0 4px 8px rgba(30, 60, 90, 0.2);

  cursor: pointer;

  transition: all 0.3s;
}

.btn:hover {
  background: #65d;
  transform: scale(1.1);
}

#app {
  display: flex;
  flex-direction: column;

  min-height: 100vh;
}

#app main {
  flex: 1;
}
</style>
