import { useUserStore } from "~/stores/user.js";
import { useProfileStore } from "~/stores/profile.js";
import { useGeneralStore } from "~/stores/general.js";

export default defineNuxtPlugin((NuxtApp) => {
  return {
    provide: {
      userStore: useUserStore(),
      profileStore: useProfileStore(),
      generalStore: useGeneralStore(),
    },
  };
});
