<template>
  <div
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
        src="/videos/sky.mp4"
        class="aspect-[3/4] object-cover rounded-md"
      />
    </div>

    <div class="px-1">
      <div class="text-gray-700 text-[15px] pt-1 break-words">
        This is some text
      </div>
      <div class="flex items-center -ml-1 text-gray-600 font-semibold text-xs">
        <UIcon name="i-heroicons-adjustments-vertical" class="h-5 w-5" />
        3%
        <UIcon name="i-heroicons-exclamation-circle" />
      </div>
      <pre>{{ route.fullPath }}</pre>
    </div>
  </div>
</template>

<script setup>
defineProps(["post"]);

const route = useRoute();

let video = ref();
let isLoaded = ref(false);

onMounted(() => {
  if (video.value) {
    video.value.addEventListener("loadeddata", (e) => {
      if (e.target) {
        setTimeout(() => {
          isLoaded.value = true;
        }, 200);
      }
    });
  }
});

const isHover = (bol) => {
  if (bol) {
    video.value.play();
  } else video.value.pause();
};
</script>

<style></style>
