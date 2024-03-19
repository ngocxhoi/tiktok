export const useGeneralStore = defineStore("general", {
  state: () => {
    isLoginOpen: false;
    isEditProfileOpen: false;
    selectedPost: null;
    ids: null;
    isBackUrl: "/";
    posts: null;
    suggested: null;
    following: null;
  },
  actions: {},
  getters: {},
  persist: true,
});
