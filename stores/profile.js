import { useApiAuth } from "~/composables/useApiAuth.js";

export const useProfileStore = defineStore("profile", {
  state: () => ({
    id: "",
    name: "",
    bio: "",
    image: "",
    post: null,
    posts: [],
    allLikes: 0,
  }),
  actions: {
    resetUser() {
      this.id = "";
      this.name = "";
      this.bio = "";
      this.image = "";
      this.posts = [];
    },

    allLikesCount() {
      this.allLikes = 0;
      for (let i = 0; i < this.posts.length; i++) {
        const post = this.posts[i];
        this.allLIkes += post.likes.length;
      }
    },

    async getProfile(id) {
      this.resetUser();
      let res = await useApiAuth(`/api/profiles/${id}`);
      const user = res.data.value.user[0];
      const posts = res.data.value.posts;

      this.id = user.id;
      this.name = user.name;
      this.bio = user.bio;
      this.image = user.image;

      this.posts = posts;

      this.allLikesCount();
    },
  },
  getters: {},
  persist: true,
});
