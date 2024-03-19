<template>
  <div
    id="PostPage"
    class="fixed lg:flex justify-between z-50 top-0 left-0 w-full h-full bg-black lg:overflow-hidden overflow-auto"
  >
    <div class="lg:w-[calc(100%-540px)] h-full relative">
      <NuxtLink
        class="absolute z-20 m-5 rounded-full bg-gray-700 p-1.5 hover:bg-gray-800"
      >
        <UIcon
          name="i-heroicons-x-mark"
          class="text-white h-[27px] w-[27px] flex"
        />
      </NuxtLink>

      <div v-if="true">
        <button
          :disabled="!isLoaded"
          @click="loopThroughPostUp()"
          class="absolute z-20 right-4 top-4 flex items-center justify-center rounded-full ng-gray-700 p-1.5 bg-gray-700 hover:bg-gray-800"
        >
          <UIcon
            name="i-heroicons-chevron-up"
            class="text-white h-[30px] w-[30px] flex"
          />
        </button>
        <button
          :disabled="!isLoaded"
          @click="loopThroughPostDown()"
          class="absolute z-20 right-4 top-20 flex items-center justify-center rounded-full ng-gray-700 p-1.5 bg-gray-700 hover:bg-gray-800"
        >
          <UIcon
            name="i-heroicons-chevron-down"
            class="text-white h-[30px] w-[30px] flex"
          />
        </button>
      </div>

      <img
        src="/images/tiktok-logo-small.png"
        width="45"
        alt=""
        class="absolute top-[18px] left-[70px] rounded-full lg:mx-0 mx-auto"
      />

      <video
        v-if="false"
        autoplay
        muted
        controls
        class="absolute object-cover w-full mt-auto -z-[1] h-screen"
        src="/videos/ship.mp4"
      />

      <div
        v-if="!isLoaded"
        class="flex items-center justify-center bg-black/70 h-screen lg:min-w-[480px]"
      >
        <Icon
          name="eos-icons:bubble-loading"
          class="ml-1"
          color="#fff"
          size="100"
        />
      </div>

      <div class="bg-black/70 lg:min-w-[480px]">
        <video
          v-if="true"
          ref="video"
          loop
          muted
          src="/videos/sky.mp4"
          class="h-screen mx-auto"
        />
      </div>
    </div>

    <div
      id="InfoSection"
      v-if="true"
      class="lg:max-w-[550px] relative w-full h-full bg-white"
    >
      <div class="py-7" />

      <div class="flex items-center-justify-between px-8">
        <div class="flex items-center">
          <NuxtLink to="/">
            <img
              src="https://picsum.photos/id/8/300/320"
              width="40"
              alt=""
              class="rounded-full lg:mx-0 mx-auto"
            />
          </NuxtLink>
          <div class="ml-3 pt-0.5">
            <div class="text-[17px] font-semibold">User name</div>
            <div class="text-[13px] -mt-5 font-light">
              User name
              <span class="relative -top-[2px] text-[30px] pr-0.5">.</span>
              <span class="font-medium">Date here</span>
            </div>
          </div>
        </div>

        <UIcon
          v-if="true"
          @click="deletePost()"
          name="i-heroicons-trash"
          class="cursor-pointer h-4 w-4"
        />
      </div>
      <div class="px-8 mt-4 text-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, maxime.
      </div>

      <div class="px-8 mt-4 text-sm font-bold flex items-center">
        <UIcon name="i-heroicons-musical-note" class="h-[17px] w-[17px] mr-1" />
        Original sound - User name
      </div>

      <div class="flex items-center px-8 mt-8">
        <div class="pb-4 text-center flex items-center">
          <button class="rounded-full bg-gray-200 p-2 cursor-pointer">
            <Icon name="mdi:heart" size="25" />
            <span class="text-xs pl-2 pr-4 text-gray-800 font-semibold"
              >123</span
            >
          </button>
        </div>

        <div class="pb-4 text-center flex items-center">
          <button class="rounded-full bg-gray-200 p-2 cursor-pointer">
            <Icon name="bx:bxs-message-rounded-dots" size="25" />
            <span class="text-xs pl-2 pr-4 text-gray-800 font-semibold"
              >123</span
            >
          </button>
        </div>
      </div>

      <div
        id="Comments"
        class="bg-[#f8f8f8] z-0 w-full h-[calc(100%-273px)] border-t-2 overflow-auto"
      >
        <div class="pt-2" />
        <div v-if="false" class="text-center mt-6 text-xl text-gray-500">
          No Comments ...
        </div>
        <div v-else class="flex items-center justify-between px-8 mt-4">
          <div class="flex items-center relative w-full">
            <NuxtLink to="/">
              <img
                src="https://picsum.photos/id/8/300/320"
                width="40"
                class="absolute top-0 rounded-full lg:mx-0 mx-auto"
                alt=""
              />
            </NuxtLink>
            <div class="ml-14 pt-0.5 w-full">
              <div
                class="text-[18px] font-semibold flex items-center justify-between"
              >
                User name
                <Icon
                  v-if="true"
                  @click="deleteComment()"
                  class="cursor-pointer"
                  name="material-symbols:delete-outline-sharp"
                  size="25"
                />
              </div>

              <div class="text-[15px] font-light">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque
                minus blanditiis fuga ipsam doloribus beatae fugiat, ipsum,
                impedit reprehenderit odio magni eaque sunt iusto at cumque
                suscipit distinctio dignissimos similique?
              </div>
            </div>
          </div>
        </div>

        <div class="mb-28" />
      </div>

      <div
        v-if="true"
        id="CreateComment"
        class="absolute flex items-center justify-between bottom-0 bg-white h-[85px] lg:max-w-[550px] w-full py-5 px-8 border-t-2"
      >
        <div
          class="bg-[#f1f1f2] flex items-center rounded-lg w-full lg:max-w-[420px]"
          :class="
            inputFocused
              ? 'border-2 border-gray-400'
              : 'border-2 border-[#f1f1f2]'
          "
        >
          <input
            v-model="comment"
            type="text"
            @focus="inputFocused = true"
            @blur="inputFocused = false"
            class="bg-[#f1f1f2] text-[14px] focus:outline-none w-full lg:max-w-[420px] p-2 rounded-lg"
            placeholder="Add comments..."
          />
        </div>
        <button
          :disabled="!comment"
          @click="addComment()"
          :class="comment ? 'text-[#f02c56] cursor-pointer' : 'text-gray-400'"
          class="font-semibold text-sm ml-5 pr-1"
        >
          Post
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const router = useRouter();

let isLoaded = ref(false);
let video = ref();
let inputFocused = ref(false);
let comment = ref("");

const loopThroughPostUp = () => {};
const loopThroughPostDown = () => {};
const deletePost = () => {};
const deleteComment = () => {};
const addComment = () => {};

onMounted(() => {
  isLoaded.value = true;
  video.value.play();
  // video.value.addEventListener("loadeddata", (e: { target: any }) => {
  //   if (e.target) {
  //     setTimeout(() => {
  //       isLoaded.value = true;
  //     }, 500);
  //   }
  // });
});

// watch(
//   () => {
//     isLoaded.value;
//   },
//   () => {
//     if (isLoaded.value) {
//       setTimeout(() => video.value.play(), 500);
//     }
//   }
// );
</script>

<style></style>
