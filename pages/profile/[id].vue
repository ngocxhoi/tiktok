<template>
  <MainLayout>
    <div
      class="pt-[90px] 2xl:pl-[185px] xl:pl-[170px] lg:pl-[160px] lg:pr-0 pr-2 w-[calc(100%-90px)] max-w-[1800px] 2xl:mx-auto"
    >
      <div class="flex w-[calc(100%-230px)]">
        <UAvatar
          :src="'http://localhost:8000' + $profileStore.image"
          size="2xl"
        />
        <div class="ml-5 w-full">
          <div class="text-[30px] font-bold truncate">
            {{ $generalStore.allLowerCaseNoCaps($profileStore.name) }}
          </div>
          <div class="text-[18px] truncate">{{ $profileStore.name }}</div>
          <UButton
            v-if="$profileStore.id === $userStore.id"
            @click="$generalStore.isEditProfileOpen = true"
            icon="i-heroicons-pencil-square"
            variant="solid"
            color="white"
            label="Edit profile"
          />
          <UButton v-else color="red">
            <p class="mx-4">Follow</p>
          </UButton>
        </div>
      </div>

      <div class="flex items-center pt-4">
        <div class="mr-4">
          <span class="font-bold">10K</span>
          <span class="text-gray-500 font-light text-[15px] pl-1.5"
            >Following</span
          >
        </div>
        <div class="mr-4">
          <span class="font-bold">44K</span>
          <span class="text-gray-500 font-light text-[15px] pl-1.5"
            >Followers</span
          >
        </div>
        <div class="mr-4">
          <span class="font-bold">{{ allLikes }}</span>
          <span class="text-gray-500 font-light text-[15px] pl-1.5">Likes</span>
        </div>
      </div>

      <div
        class="pt-4 mr-4 text-gray-500 font-light text-[15px] pl-1.5 max-w-[500px]"
      >
        {{ $profileStore.bio || "This is the bio section" }}
      </div>

      <div class="w-full flex items-center pt-4 border-b">
        <div
          class="w-60 text-center py-2 text-[17px] font-semibold border-b-2 border-b-black"
        >
          Video
        </div>
        <div
          class="w-60 text-gray-500 flex items-center justify-center py-2 text-[17px] font-semibold"
        >
          <UIcon name="i-heroicons-lock-closed-solid" class="mr-1" />
          <span>Liked</span>
        </div>
      </div>

      <div
        v-if="$profileStore.posts.length > 0"
        class="mt-4 grid 2xl:grid-cols-6 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-3 h-full overflow-y-auto"
      >
        <div v-if="show" v-for="post in $profileStore.posts">
          <PostUser :post="post" />
        </div>
        <div v-else class="flex items-center justify-center min-h-[900px]">
          <Icon
            name="tabler:loader-2"
            class="ml-1 animate-spin"
            color="rgba(0,0,0,0.6)"
            size="60"
          />
        </div>
      </div>

      <div v-else class="flex items-center justify-center mt-4">
        <span class="text-center font-semibold text-xl text-gray-400"
          >There are no post! <br />
          Go to upload video</span
        >
      </div>
    </div>
  </MainLayout>
</template>

<script setup lang="ts">
import MainLayout from "~/layouts/MainLayout.vue";

const { $generalStore, $userStore, $profileStore } = useNuxtApp();
const { posts, allLikes } = storeToRefs($profileStore);
const route = useRoute();

let show = ref(false);

onMounted(async () => {
  if (!$userStore.id) {
    navigateTo("/");
    return;
  }
  try {
    await $userStore.getTokens();
    await $profileStore.getProfile(route.params.id);
  } catch (error) {
    console.log(error);
  }
});

watch(
  () => posts.value,
  () => {
    setTimeout(() => (show.value = true), 300);
  }
);
</script>

<style></style>
