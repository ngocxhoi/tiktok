<template>
  <div id="PostMain" class="flex border-b py-6">
    <div class="cursor-pointer">
      <img
        src="https://picsum.photos/id/8//300/320"
        class="rounded-full max-h-[60px]"
        width="60"
      />
    </div>
    <div class="pl-3 w-full px-4">
      <div class="flex items-center justify-between pb-0 5">
        <button>
          <span class="font-bold hover:underline cursor-pointer"
            >User name</span
          >
          <span class="text-[13px] text-light text-gray-500 pl-1 cursor-pointer"
            >User name</span
          >
        </button>

        <button
          class="border text-[15px] px-[21px] py-0 border-[#f02c56] text-[#f02c56] hover:bg-[#ffeef2] font-semibold rounded-md"
        >
          Follow
        </button>
      </div>

      <div
        class="text-[15px] pb-0.5 break-words md:max-w-[400px] max-w-[300px]"
      >
        This is some text
      </div>
      <div class="text-[14px] text-gray-500 pb-0.5">
        #fun #cool #SuperAwesome
      </div>
      <div class="text-[14px] pb-0.5 flex items-center font-semibold">
        <UIcon name="i-heroicons-musical-note" class="h-[17px] w-[17px]" />
        <div class="px-1">original sound - AWESOME</div>
        <UIcon name="i-heroicons-heart-solid" class="h-5 w-5 text-red-500" />
      </div>

      <div class="mt-2 5 flex">
        <div
          class="relative min-h-[480px] max-h-[580px] min-w-[260px] w-auto flex items-center rounded-xl cursor-pointer"
        >
          <video
            ref="video"
            loop
            muted
            controls
            src="/videos/ship.mp4"
            class="rounded-xl object-cover ml-0 h-full"
          />

          <img
            src="/images/tiktok-logo-white.png"
            width="90"
            class="absolute right-10 bottom-14"
            alt=""
          />
        </div>
        <div class="relative">
          <div class="absolute bottom-0 pl-2">
            <div class="pb-4 text-center">
              <button
                class="rounded-full bg-gray-200 h-8 w-8 flex items-center cursor-pointer"
              >
                <UIcon name="i-heroicons-heart-solid" class="h-6 w-6 mx-auto" />
              </button>
              <span class="text-xs text-gray-800 font-semibold">34</span>
            </div>
            <div class="pb-4 text-center">
              <button
                class="rounded-full bg-gray-200 h-8 w-8 flex items-center cursor-pointer"
              >
                <UIcon
                  name="i-heroicons-chat-bubble-oval-left-ellipsis-solid"
                  class="h-6 w-6 mx-auto"
                />
              </button>
              <span class="text-xs text-gray-800 font-semibold">21</span>
            </div>
            <div class="pb-4 text-center">
              <button
                class="rounded-full bg-gray-200 h-8 w-8 flex items-center cursor-pointer"
              >
                <UIcon
                  name="i-heroicons-paper-airplane-solid"
                  class="h-5 w-5 mx-auto -rotate-45"
                />
              </button>
              <span class="text-xs text-gray-800 font-semibold">1</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
let video: any = ref(null);

// onMounted(() => video.value.play());
</script>

<style></style>
