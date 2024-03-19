export const useProfileStore = defineStore("profile", {
  state: () => {
    id: "";
    name: "";
    bio: "";
    image: "";
    post: null;
    posts: null;
    allLIkes: 0;
  },
  actions: {},
  getters: {},
  persist: true,
});
