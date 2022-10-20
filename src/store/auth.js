import router from "@/router";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useAuthStore = defineStore("auth", () => {
  const token = ref();
  token.value = localStorage.getItem("token");

  async function login(username, password) {
    let user = {
      login: username,
      password: password,
    };
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    let response = await fetch(process.env.VUE_APP_API_URL + "login", {
      method: "post",
      headers: headers,
      body: JSON.stringify(user),
    });
    let result = await response.json();
    switch (response.status) {
      case 403: {
        console.log("Ошибка");
        break;
      }
      case 200: {
        token.value = result.token;
        localStorage.setItem("token", result.token);
        break;
      }
    }
  }

  function logout() {
    token.value = null;
    localStorage.removeItem("token");
    router.push("/");
  }

  return { token, login, logout };
});
