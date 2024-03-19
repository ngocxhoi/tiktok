<template>
  <div
    class="flex items-center hover:bg-gray-100 rounded-md w-full py-1 5 px-2 cursor-pointer"
  >
    <img
      src="https://picsum.photos/id/8/300/320"
      width="35"
      alt=""
      class="rounded-full lg:mx-0 mx-auto"
    />
    <div class="lg:pl-2 5 lg:block hidden">
      <div class="flex items-center">
        <div class="font-bold text-[14px]">User name</div>
        <div class="ml-1 rounded-full bg-[#58d5ec] h-[14px] relative">
          <UIcon
            name="i-heroicons-check"
            class="relative -top-[4px] text-white h-4 w-4"
          />
        </div>
      </div>

      <div class="font-light text-xs text-gray-600">User name</div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  user: Object,
});
</script>

<style></style>
