<template>
  <div class="register">
    <nav>
      <router-link class="logo" to="/">
        <img src="@/assets/logo.svg" alt="logo" />
        <p>cookieom</p>
      </router-link>
    </nav>
    <main>
      <div class="form">
        <form action="" @submit.prevent="signin()">
          <h3>Войдите в свой профиль</h3>
          <input type="text" placeholder="Логин" v-model="login" />
          <input type="password" placeholder="Пароль" v-model="password" />
          <button>Войти</button>
        </form>
      </div>
      <div class="content">
        <h2>Создай новое на<br />Cookieom !</h2>
        <p>Начни создавать тесты</p>
        <img src="@/assets/dragon_login.svg" alt="dragon" />
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useAuthStore } from "@/store/auth";
const login = ref();
const password = ref();

async function signin() {
  const authStore = useAuthStore();
  authStore.login(login.value, password.value);
}
</script>

<style scoped>
.register {
  display: flex;
  flex-direction: column;
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
  max-width: 1400px;
  width: 100%;
  margin: auto;
  box-sizing: border-box;
}

.logo {
  display: flex;
  align-items: center;
  gap: 40px;
}

.logo p {
  font-weight: 500;
  font-size: 2rem;
  color: #154663;
}

nav a {
  font-weight: 500;
  font-size: 1.5rem;
  text-decoration: none;
}

main {
  display: flex;
  justify-content: space-between;
  padding: 0 104px;
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

form {
  background: #c0d6e9;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 27px;
  margin-top: 80px;
  padding: 60px;
}

h3 {
  font-family: "Ubuntu";
  font-style: normal;
  font-weight: 500;
  font-size: 2em;
  line-height: 34px;
  text-align: center;
  color: rgba(68, 68, 68, 0.9);
  margin: 0;
}

h2 {
  font-family: "Ubuntu";
  font-style: normal;
  font-weight: 500;
  font-size: 3rem;
  line-height: 63px;
  text-align: center;
  color: #444444;
  margin-bottom: 25px;
}

input {
  width: 525px;
  height: 73px;
  background: rgba(255, 255, 247, 0.84);
  border-radius: 20px;
  box-sizing: border-box;
  border: none;
  outline: none;
  padding: 20px;
  font-family: "Ubuntu";
  font-style: normal;
  font-weight: 500;
  font-size: 1.5rem;
  line-height: 29px;
  color: rgba(68, 68, 68, 0.6);
}

button {
  width: 525px;
  height: 73px;
  background: #4589b0;
  border-radius: 20px;
  border: none;
  outline: none;
  padding: 20px;
  font-family: "Ubuntu";
  font-style: normal;
  font-weight: 500;
  font-size: 1.5em;
  line-height: 34px;
  text-align: center;
  color: rgba(255, 255, 247, 0.9);
  cursor: pointer;
}

.content img {
  width: 70%;
}
</style>
