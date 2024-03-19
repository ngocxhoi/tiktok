<template>
  <div class="w-full relative flex justify-center">
    <div
      class="absolute top-0 z-50 mx-auto bg-black/70 text-white px-14 py-3 rounded-sm"
      :class="errorType ? 'visible' : 'invisible'"
    >
      asdfasd
    </div>
  </div>
</template>

<script setup lang>
const props = defineProps({
  errorType: String,
});
const { errorType } = toRefs(props);

let error = ref("");

watch(
  () => errorType.value,
  () => {
    if (errorType.value == "caption") {
      error.value = "Maximum 150 characters";
    } else if (errorType.value == "bio") {
      error.value = "Maximum 80 characters";
    } else if (errorType.value == "file") {
      error.value = "Unsupported file. Use MP4 instead";
    } else {
      error.value = "";
    }
  }
);
</script>

<style></style>
