<template>
  <section class="login">
    <h1>Login</h1>

    <form>
      <label for="email">E-Mail</label>
      <input
        type="email"
        name="email"
        id="email"
        v-model="login.email"
        autocomplete="off"
      />

      <label for="senha">Senha</label>
      <input
        type="password"
        name="senha"
        id="senha"
        v-model="login.senha"
        autocomplete="off"
      />

      <button type="submit" class="btn" @click.prevent="logar">Logar</button>
      <ErroNotificacao :erros="erros" />
    </form>

    <p class="perdeu-senha">
      <a href="/" target="_blank">Perdeu a senha? Clique aqui</a>
    </p>

    <Cadastrar />
  </section>
</template>

<script>
import Cadastrar from "@/components/login/Cadastrar";
import ErroNotificacao from "@/components/error/ErroNotificacao";

export default {
  name: "Login",
  data() {
    return {
      login: {
        email: "",
        senha: "",
      },
      erros: [],
    };
  },
  components: {
    Cadastrar,
    ErroNotificacao,
  },
  methods: {
    async logar() {
      try {
        this.erros = [];

        this.$store.dispatch("getUsuario", this.login.email);

        this.$router.push({ name: "Usuario" });
      } catch (erro) {
        this.erros.push(erro.response.data.message);
      }
    },
  },
  created() {
    document.title = "Faça seu login | Ranek";
  },
};
</script>

<style scoped>
h1 {
  text-align: center;
  font-size: 2rem;

  margin-top: 40px;

  color: #87f;
}

.login {
  max-width: 500px;

  padding: 0 20px;
  margin: 0 auto;
}

form {
  display: grid;
}

.btn {
  width: 100%;
  max-width: 300px;

  margin: 0 auto;
}

.perdeu-senha {
  text-align: center;

  margin: 20px auto 0 auto;
}

.perdeu-senha a:hover {
  color: #87f;
  text-decoration: underline;
}
</style>
