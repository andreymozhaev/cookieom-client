<template>
  <div class="register">
    <nav>
      <router-link class="logo" to="/">
        <img src="@/assets/logo.svg" alt="logo" />
        <p>cookiom</p>
      </router-link>
    </nav>
    <main>
      <div class="form">
        <form action="" @submit.prevent="signup">
          <h3>Создайте свой профиль</h3>
          <input type="text" placeholder="Логин" v-model="login" />
          <input type="password" placeholder="Пароль" v-model="password" />
          <input
            type="password"
            placeholder="Подтверждение пароля"
            v-model="confirm"
          />
          <button>Регистрация</button>
        </form>
      </div>
      <div class="content">
        <h2>Добро пожаловать на<br />Cookieom !</h2>
        <p>Большие возможности для создания тестов и опросов</p>
        <img src="@/assets/dragon_register.svg" alt="dragon" />
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref } from "vue";
const login = ref();
const password = ref();
const confirm = ref();

function validate() {
  return true;
}

async function signup() {
  if (validate()) {
    let user = {
      login: login.value,
      password: password.value,
    };
    console.log(JSON.stringify(user));
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    //let host = "https://api.koohat.ru/signup";
    let response = await fetch(process.env.VUE_APP_API_URL + "signup", {
      method: "post",
      headers: headers,
      body: JSON.stringify(user),
    });
    let result = await response.json();
    switch (response.status) {
      case 403: {
        this.message = result.message;
        this.isValid = false;
        break;
      }
      case 201: {
        let token = result.token;
        console.log(token);
        break;
      }
    }
  }
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

h2,
p {
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
