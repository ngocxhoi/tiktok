<template>
  <div
    id="PostPage"
    class="fixed lg:flex justify-between z-50 top-0 left-0 w-full h-full bg-black lg:overflow-hidden overflow-auto"
  >
    <div
      v-if="$generalStore.selectedPost"
      class="lg:w-[calc(100%-540px)] h-full relative"
    >
      <NuxtLink
        :to="$generalStore.isBackUrl"
        class="absolute z-20 m-5 rounded-full bg-gray-700 p-1.5 hover:bg-gray-800"
      >
        <Icon name="tabler:x" size="27" color="#fff" />
      </NuxtLink>

      <!-- Button next or prev video -->
      <div v-if="$generalStore.ids.length > 1">
        <button
          :disabled="!isLoaded || isMaxPost"
          @click="loopThroughPostUp()"
          class="absolute z-20 right-4 top-4 flex items-center justify-center rounded-full ng-gray-700 p-1.5 bg-gray-700"
          :class="isMaxPost ? '' : 'hover:bg-gray-800'"
        >
          <UIcon
            name="i-heroicons-chevron-up"
            class="text-white h-[30px] w-[30px] flex"
          />
        </button>
        <button
          :disabled="!isLoaded || isMinPost"
          @click="loopThroughPostDown()"
          class="absolute z-20 right-4 top-20 flex items-center justify-center rounded-full ng-gray-700 p-1.5 bg-gray-700"
          :class="isMinPost ? '' : 'hover:bg-gray-800'"
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
        v-if="$generalStore.selectedPost.video"
        muted
        class="absolute object-cover w-full mt-auto -z-[1] h-screen"
        :src="'http://localhost:8000' + $generalStore.selectedPost.video"
      />

      <!-- Loading -->
      <div
        v-if="!isLoaded"
        class="flex items-center justify-center bg-black/70 h-screen lg:min-w-[480px]"
      >
        <Icon
          name="tabler:loader-2"
          class="ml-1 animate-spin"
          color="#fff"
          size="100"
        />
      </div>

      <div class="bg-black/70 lg:min-w-[480px]">
        <video
          id="videoDisplay"
          v-if="$generalStore.selectedPost.video"
          ref="video"
          autoplay
          controls
          loop
          :src="'http://localhost:8000' + $generalStore.selectedPost.video"
          class="h-screen mx-auto"
        />
      </div>
    </div>

    <!-- Skeleton -->
    <div
      v-else
      class="lg:w-[calc(100%-540px)] h-full relative flex items-center justify-center"
    >
      <Icon
        name="tabler:loader-2"
        class="ml-1 animate-spin"
        color="#fff"
        size="100"
      />
    </div>

    <div
      id="InfoSection"
      v-if="$generalStore.selectedPost"
      class="lg:max-w-[550px] relative w-full h-full bg-white"
    >
      <div class="py-7" />

      <div class="flex items-center-justify-between px-8">
        <div class="flex items-center">
          <NuxtLink :to="'/profile/' + $generalStore.selectedPost.user.id">
            <img
              :src="$generalStore.selectedPost.user.image"
              width="40"
              alt=""
              class="rounded-full lg:mx-0 mx-auto"
            />
          </NuxtLink>
          <div class="ml-3 pt-0.5">
            <div class="text-[17px] font-semibold">
              {{
                $generalStore.allLowerCaseNoCaps(
                  $generalStore.selectedPost.user.name
                )
              }}
            </div>
            <div class="text-[13px] -mt-5 font-light">
              <span>{{ $generalStore.selectedPost.user.name }}</span>
              <span class="relative -top-[2px] text-[30px] pr-0.5">.</span>
              <span class="font-medium">{{
                $generalStore.selectedPost.created_at
              }}</span>
            </div>
          </div>
        </div>

        <Icon
          v-if="$userStore.id == $generalStore.selectedPost.user.id"
          @click="deletePost()"
          name="mdi:delete-outline"
          size="20"
          class="cursor-pointer"
        />
      </div>
      <div class="px-8 mt-4 text-sm">
        {{ $generalStore.selectedPost.text }}
      </div>

      <div class="px-8 mt-4 text-sm font-bold flex items-center">
        <UIcon name="i-heroicons-musical-note" class="h-[17px] w-[17px] mr-1" />
        Original sound -
        {{
          $generalStore.allLowerCaseNoCaps($generalStore.selectedPost.user.name)
        }}
      </div>

      <div class="flex items-center px-8 mt-8">
        <div class="pb-4 text-center flex items-center">
          <button
            @click="isLiked ? unLikePost() : likePost()"
            class="rounded-full bg-gray-200 p-2 cursor-pointer"
          >
            <Icon
              :name="!isLiked ? 'mdi:heart-outline' : 'mdi:heart'"
              :color="isLiked ? 'red' : ''"
              size="25"
            />
            <span class="text-xs pl-2 pr-4 text-gray-800 font-semibold">{{
              $generalStore.selectedPost.likes.length
            }}</span>
          </button>
        </div>

        <div class="pb-4 text-center flex items-center">
          <button class="rounded-full bg-gray-200 p-2 cursor-pointer">
            <Icon name="mdi:chat-processing-outline" size="26" />
            <span class="text-xs pl-2 pr-4 text-gray-800 font-semibold">{{
              $generalStore.selectedPost.comments.length
            }}</span>
          </button>
        </div>
      </div>

      <div
        id="Comments"
        class="bg-[#f8f8f8] z-0 w-full h-[calc(100%-273px)] border-t-2 overflow-auto"
      >
        <div class="pt-2" />
        <div
          v-if="$generalStore.selectedPost.comments.length < 1"
          class="text-center mt-6 text-xl text-gray-500"
        >
          No Comments ...
        </div>
        <div
          v-else
          v-for="comment in $generalStore.selectedPost.comments"
          :key="comment"
          class="flex items-center justify-between px-8 mt-4"
        >
          <div class="flex items-center relative w-full">
            <NuxtLink :to="'/profile/' + comment.user_id">
              <img
                :src="comment.image"
                width="40"
                class="absolute top-0 rounded-full lg:mx-0 mx-auto"
                alt=""
              />
            </NuxtLink>
            <div class="ml-14 pt-0.5 w-full">
              <div
                class="text-[18px] font-semibold flex items-center justify-between"
              >
                {{ comment.user_name }}
                <Icon
                  v-if="$userStore.id == comment.user_id"
                  @click="deleteComment($generalStore.selectedPost, comment.id)"
                  class="cursor-pointer"
                  name="mdi:delete-outline"
                  size="25"
                />
              </div>

              <div class="text-[15px] font-light">
                {{ comment.text }}
              </div>
            </div>
          </div>
        </div>

        <div class="mb-28" />
      </div>

      <div
        v-if="$userStore.id"
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

    <!-- Skeleton -->
    <div
      v-else
      class="lg:max-w-[550px] relative w-full h-full bg-white flex items-center justify-center"
    >
      <Icon
        name="tabler:loader-2"
        class="ml-1 animate-spin"
        color="#000"
        size="100"
      />
    </div>
  </div>
</template>

<script setup>
const { $generalStore, $profileStore, $userStore } = useNuxtApp();
const route = useRoute();
const router = useRouter();

let video = ref(null);
let inputFocused = ref(false);
let comment = ref("");
let isLoaded = ref(false);

let isMaxPost = ref(false);
let isMinPost = ref(false);

const loopThroughPostUp = () => {
  navigateTo(`/post/${Number(route.params.id) + 1}`);
};
const loopThroughPostDown = () => {
  navigateTo(`/post/${Number(route.params.id) - 1}`);
};

onMounted(async () => {
  $generalStore.selectedPost = null;

  try {
    await $userStore.getTokens();
    let dataRes = await $generalStore.getPostById(route.params.id);
    const response = dataRes.responses._data;
    if (response && response.error)
      throw {
        message: response.error,
        status: dataRes.responses.status,
      };
  } catch (error) {
    console.log(error.message);
    if (error && error.status == 400) {
      navigateTo("/");
    }
  }

  video.value.addEventListener("loadeddata", (e) => {
    if (e.target) {
      isLoaded.value = true;
    }
  });

  if (route.params.id == $profileStore.posts.length) isMaxPost.value = true;
  else isMaxPost.value = false;
  if (route.params.id == 1) isMinPost.value = true;
  else isMinPost.value = false;
});

const isLiked = computed(() => {
  let res = $generalStore.selectedPost.likes.find(
    (like) => like.user_id == $userStore.id
  );
  if (res) return true;
  return false;
});

const likePost = async () => {
  try {
    await $userStore.likePost($generalStore.selectedPost, true);
  } catch (error) {
    console.log(error);
  }
};
const unLikePost = async () => {
  try {
    await $userStore.unLikePost($generalStore.selectedPost, true);
  } catch (error) {
    console.log(error);
  }
};

const addComment = async () => {
  try {
    await $userStore.addComment($generalStore.selectedPost, comment.value);
    comment.value = null;
    document.getElementById("Comments").scroll({ top: 0, behavior: "smooth" });
  } catch (error) {
    console.log(error);
  }
};

const deleteComment = async (post, commentId) => {
  let res = confirm("Are you sure you want to delete this comments?");
  if (res) {
    try {
      await $userStore.deleteComment(post, commentId);
    } catch (error) {
      console.log(error);
    }
  }
};

const deletePost = async () => {
  let res = confirm("Are you sure you want to delete this post?");

  if (res) {
    try {
      await $userStore.deletePost($generalStore.selectedPost);
      await $profileStore.getProfile($userStore.id);
      navigateTo("/profile/" + $userStore.id);
    } catch (error) {
      console.log(error);
    }
  }
};

watch(
  () => {
    isLoaded.value;
  },
  () => {
    if (isLoaded.value) {
      setTimeout(() => video.value.play(), 500);
    }
  }
);
</script>

<style></style>
