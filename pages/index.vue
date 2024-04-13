<template>
  <MainLayout>
    <div class="pt-[80px] min-w-[450px] w-[calc(100%-90px)] max-w-[690px]">
      <div v-for="post in $generalStore.posts" :key="post">
        <PostMain v-if="post" :post="post" />
      </div>
    </div>

    <!-- <div class="text-red-500">
      {{ cookies }}
    </div> -->
  </MainLayout>
</template>

<script setup lang="ts">
import MainLayout from "~/layouts/MainLayout.vue";
const { $generalStore, $userStore } = useNuxtApp();

onMounted(async () => {
  try {
    await $userStore.getTokens();
    await $generalStore.getAllUsersAndPosts();
  } catch (error) {
    console.log(error);
  }
});
</script>

<style></style>
