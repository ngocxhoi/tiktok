import { useApiAuth } from "~/composables/useApiAuth.js";
import { useGeneralStore } from "./general.js";

export const useUserStore = defineStore("user", {
  state: () => ({
    id: "",
    name: "",
    bio: "",
    image: "",
  }),
  actions: {
    async getTokens() {
      return await useApiAuth("/sanctum/csrf-cookie");
    },

    async login(form) {
      return await useApiAuth("/login", {
        method: "POST",
        body: form,
      });
    },

    async register(formRegister) {
      return await useApiAuth("/register", {
        method: "POST",
        body: formRegister,
      });
    },

    async getUser() {
      let res = await useApiAuth("/api/user");
      let user = res.data.value.user;
      this.id = user.id;
      this.name = user.name;
      this.bio = user.bio;
      this.image = user.image;

      return res;
    },

    async updateUserImage(data) {
      return await useApiAuth("/api/update-user-image", {
        method: "POST",
        body: data,
      });
    },

    async updateUser(name, bio) {
      return await useApiAuth("/api/update-user", {
        method: "PATCH",
        body: {
          name: name,
          bio: bio,
        },
      });
    },

    async logout() {
      let res = await useApiAuth("/logout", {
        method: "POST",
      });
      this.id = "";
      this.name = "";
      this.bio = "";
      this.image = "";
      return res;
    },

    resetUser() {
      this.id = "";
      this.name = "";
      this.bio = "";
      this.image = "";
    },

    async createPost(data) {
      return await useApiAuth("/api/post", {
        method: "POST",
        body: data,
      });
    },

    async likePost(post, isPostPage) {
      let res = await useApiAuth("/api/like", {
        method: "POST",
        body: {
          post_id: post.id,
          user_id: this.id,
        },
      });

      let singlePost = null;

      if (isPostPage) {
        singlePost = post;
      } else {
        singlePost = useGeneralStore().posts.find((p) => p.id === post.id);
      }

      singlePost.likes.push(res.data.value.like);
    },

    async unLikePost(post, isPostPage) {
      let deleteLike = null;
      let singlePost = null;

      if (isPostPage) {
        singlePost = post;
      } else {
        singlePost = useGeneralStore().posts.find((p) => p.id === post.id);
      }

      singlePost.likes.forEach((like) => {
        if (like.user_id == this.id) {
          deleteLike = like;
        }
      });

      let res = await useApiAuth("/api/likes/" + deleteLike.id, {
        method: "DELETE",
      });

      for (let i = 0; i < singlePost.likes.length; i++) {
        const like = singlePost.likes[i];
        if (like.id == res.data.value.like.id) singlePost.likes.splice(i, 1);
      }
    },

    async updateComment(post) {
      let res = await useApiAuth(`/api/profiles/${post.user.id}`);
      for (let i = 0; i < res.data.value.posts.length; i++) {
        const updatePost = res.data.value.posts[i];
        if (post.id == updatePost.id) {
          useGeneralStore().selectedPost.comments = updatePost.comments;
        }
      }
    },

    async addComment(post, comment) {
      let res = await useApiAuth("/api/comment", {
        method: "POST",
        body: {
          post_id: post.id,
          user_id: this.id,
          comment: comment,
        },
      });

      if (res.responses.status == 200) {
        await this.updateComment(post);
      }

      return res;
    },

    async deleteComment(post, commentId) {
      let res = await useApiAuth("/api/comments/" + commentId, {
        method: "DELETE",
      });

      if (res.responses.status == 200) {
        await this.updateComment(post);
      }

      return res;
    },

    async deletePost(post) {
      return await useApiAuth("/api/posts/" + post.id, {
        method: "DELETE",
      });
    },
  },

  getters: {},
  persist: true,
});
