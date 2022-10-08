<template>
  <div class="home">
    <nav>
      <div class="logo">
        <img src="@/assets/logo.svg" alt="logo" />
        <p>cookiom</p>
      </div>
      <div class="menu">
        <a href="#"> О нас</a>
        <a href="#"> Платформа</a>
        <a href="#"> Инструкции</a>
        <router-link to="#"
          ><img src="@/assets/enter.png" alt="login"
        /></router-link>
      </div>
    </nav>
    <main>
      <div class="decor">
        <h2>Начните создавать<br />тесты прямо сейчас!</h2>
        <p>Быстрый и лёгкий контруктор для<br />создания тестов и опросов</p>
        <div class="buttons">
          <button>Зарегистрироваться</button>
        </div>
      </div>
      <div class="dragon">
        <img src="@/assets/dragonwithcookie.svg" alt="dragon" />
      </div>
    </main>
    <footer></footer>
  </div>
</template>

<script setup></script>

<style scoped>
.home {
  min-height: 100vh;
  background: linear-gradient(111.2deg, #ecf4f9 29.68%, #c2dbf0 79.95%);
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

.menu {
  display: flex;
  align-items: center;
  gap: 104px;
}

nav a {
  font-weight: 500;
  font-size: 1.5rem;
  text-decoration: none;
}

main {
  flex: 1;
  display: flex;
  margin-top: 100px;
  height: 500px;
  justify-content: space-between;
  padding-right: 100px;
}

.decor {
  flex: 1;
  background-image: url("@/assets/decor.svg");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: contain;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
}

.decor h2,
.decor p {
  margin: 0;
  text-align: center;
}

.decor h2 {
  font-weight: 700;
  font-size: 3.5rem;
  line-height: 69px;
  text-align: center;
  color: #4d4d4d;
}

.decor button {
  background: #4589b0;
  border-radius: 20px;
  padding: 24px 34px;
  border: none;
  font-weight: 700;
  font-size: 1.5rem;
  color: #ffffff;
  cursor: pointer;
}

.decor button:active,
.decor button:focus {
  outline: none;
}
.dragon {
  /*flex: 1;*/
  /*object-fit: contain;
  object-position: center;*/
  height: 500px;
  align-self: center;
}

.dragon img {
  /*object-fit: contain;
  object-position: center;*/
  height: 100%;
}

footer {
  height: 50px;
}
</style>
