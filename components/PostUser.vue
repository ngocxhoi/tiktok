<template>
  <div
    @click="displayPost(post)"
    @mouseenter="isHover(true)"
    @mouseleave="isHover(false)"
    class="relative brightness-90 hover:brightness-[1.1] cursor-pointer"
  >
    <div
      v-if="isLoaded"
      class="absolute flex items-center justify-center top-0 left-0 w-full object-cover rounded-md bg-black aspect-[3/4]"
    >
      <Loading size="14" borderSize="8" />
    </div>

    <div>
      <video
        muted
        loop
        ref="video"
        :src="'http://localhost:8000' + post.video"
        class="aspect-[3/4] object-cover rounded-md"
      />
    </div>

    <div class="px-1">
      <div class="text-gray-700 text-[15px] pt-1 break-words">
        {{ post.text }}
      </div>
      <div class="flex items-center -ml-1 text-gray-600 font-semibold text-xs">
        <Icon name="tabler:heart" size="25" />
        <Icon name="tabler:thumb-up" size="25" />
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps(["post"]);

const { $generalStore } = useNuxtApp();
const route = useRoute();

let video = ref();
let isLoaded = ref(true);

onMounted(() => {
  if (video.value) {
    video.value.addEventListener("loadeddata", (e) => {
      if (e.target) {
        setTimeout(() => {
          isLoaded.value = false;
        }, 200);
      }
    });
  }
});

const displayPost = (post) => {
  $generalStore.setBackUrl("/profile/" + route.params.id);
  $generalStore.selectedPost = null;

  setTimeout(() => {
    navigateTo(`/post/${post.id}`);
  }, 500);
};

const isHover = (bol) => {
  if (bol) {
    video.value.play();
  } else {
    video.value.currentTime = 0;
    video.value.pause();
  }
};
</script>

<style></style>
