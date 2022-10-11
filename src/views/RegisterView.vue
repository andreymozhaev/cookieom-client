<template>
  <div class="register">
    <nav>
      <router-link class="logo" to="/">
        <img src="@/assets/logo.svg" alt="logo" />
        <p>cookiom</p>
      </router-link>
    </nav>
  </div>
</template>

<script setup></script>

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
</style>
