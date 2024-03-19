export const useUserStore = defineStore("user", {
  state: () => {
    id: "";
    name: "";
    bio: "";
    image: "";
  },
  actions: {},
  getters: {},
  persist: true,
});
