import { useUserStore } from "~/stores/user.js";

export default defineNuxtRouteMiddleware((to, from) => {
  const url = useRequestURL();
  const userStore = useUserStore();
  if (!userStore.id && url.pathname != "/") {
    navigateTo("/");
  }
});
