<template>
  <div class="container">
    <div
      class="home"
      style="
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
      "
    >
      <b-card style="width: 400px">
        <div class="my-5">
          <h3 class="text-success text-center">Login</h3>
        </div>
        <b-form @submit.prevent="login">
          <b-form-group label="Username" label-for="username-input">
            <b-form-input
              id="username-input"
              v-model="username"
              required
            ></b-form-input>
          </b-form-group>
          <b-form-group label="Password" label-for="password-input">
            <b-form-input
              type="password"
              id="password-input"
              v-model="password"
              required
            ></b-form-input>
          </b-form-group>
          <b-button type="submit" variant="primary" block>Login</b-button>
          <p class="text-danger text-center">{{ errorMessage }}</p>
        </b-form>
        <div class="text-right mt-2">
          <router-link to="#">Lupa password</router-link>
        </div>
      </b-card>
    </div>
  </div>
</template>
    
<style scoped>
.text-justify {
  text-align: justify;
}
.text-spacing {
  letter-spacing: 5px;
}
</style>
    
<script>
import axios from "axios";

export default {
  name: "LoginView",
  data() {
    return {
      username: "",
      password: "",
      errorMessage: "",
    };
  },
  methods: {
    login() {
      axios
        .get("/db.json")
        .then((response) => {
          const users = response.data.users;
          const user = users.find((user) => user.username === this.username);
          if (user && user.password === this.password) {
            // Jika login berhasil, simpan informasi pengguna ke localStorage
            localStorage.setItem("loggedInUser", JSON.stringify(user));
            this.errorMessage = "";
            // Jika login berhasil, redirect ke halaman dashboard atau halaman lain sesuai peran pengguna
            this.$router.push("/admin/dashboard");
          } else {
            // Jika login gagal, tampilkan pesan kesalahan
            this.errorMessage = "Username atau password salah.";
          }
        })
        .catch((error) => {
          console.error("Error fetching user data:", error);
        });
    },
  },
};
</script>