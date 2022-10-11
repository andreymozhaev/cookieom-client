<template>
  <router-view />
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap");
#app {
  font-family: Ubuntu, Helvetica, Arial, sans-serif;
  min-height: 100vh;
  background: linear-gradient(111.2deg, #ecf4f9 29.68%, #c2dbf0 79.95%);
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
