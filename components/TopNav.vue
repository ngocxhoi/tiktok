<template>
  <div
    id="TopNav"
    class="fixed bg-white z-30 flex items-center w-full border-b h-[61px]"
  >
    <div
      class="flex items-center justify-between w-full px-6 mx-auto"
      :class="route.fullPath === '/' ? 'max-w-[1150px]' : ''"
    >
      <div :class="route.fullPath === '/' ? 'w-[80%]' : 'lg:w-[20%] w-[70%]'">
        <NuxtLink to="/">
          <img width="115" src="/images/tiktok-logo.png" alt="" />
        </NuxtLink>
      </div>

      <div
        class="hidden md:flex items-center bg-[--light-white] p-1 rounded-full max-w-[380px] w-full"
      >
        <input
          type="text"
          class="w-full pl-3 my-2 bg-transparent placeholder-[--placeholder-color] text-[15px] focus:outline-none"
          placeholder="Search accounts"
        />
        <div class="px-3 py-1 flex items-center border-1 border-l-gray-300">
          <UIcon
            name="i-heroicons-magnifying-glass"
            class="bg-[#a1a2a7] h-5 w-5"
          />
        </div>
      </div>

      <div
        class="flex items-center justify-end gap-3 min-w-[275px] max-w-[320px] w-full"
      >
        <UButton
          v-if="$userStore.id"
          color="white"
          variant="solid"
          to="/upload"
        >
          <template #leading>
            <UIcon
              @click="isLoggedIn()"
              name="i-heroicons-plus"
              class="bg-black h-5 w-5"
            />
          </template>
          <p class="text-black text-[15px] px-2 font-medium">Upload</p>
        </UButton>

        <div v-if="!$userStore.id" class="flex items-center">
          <UButton @click="$generalStore.isLoginOpen = true" color="red">
            <p class="text-white font-medium text-[15px] mx-2">Log in</p>
          </UButton>
        </div>

        <div v-else class="flex items-center">
          <UIcon
            name="i-heroicons-paper-airplane"
            class="text-[#161724] h-7 w-7 -rotate-45 ml-1 mr-4"
          />
          <UIcon
            name="i-heroicons-chat-bubble-left-ellipsis"
            class="text-[#161724] h-7 w-7 mr-5"
          />
          <div class="relative">
            <UDropdown :items="dropdownMenu">
              <UAvatar
                :src="'http://localhost:8000' + $userStore.image"
                class="mt-1"
              />
              <template #item="{ item }">
                <UIcon :name="item.icon" class="h-5 w-5" />
                <span class="pl-2 font-semibold text-sm">{{ item.label }}</span>
              </template>
            </UDropdown>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { $generalStore, $userStore } = useNuxtApp();
const route = useRoute();

const dropdownMenu = [
  [
    {
      label: "Profile",
      icon: "i-heroicons-magnifying-glass",
      click: () => {
        navigateTo(`/profile/${$userStore.id}`);
      },
    },
  ],
  [
    {
      label: "Log out",
      icon: "i-heroicons-arrow-right-start-on-rectangle",
      click: () => {
        $userStore.logout();
        navigateTo("/");
      },
    },
  ],
];

const isLoggedIn = () => {
  if ($userStore.id) {
    navigateTo("/upload");
  } else {
    $generalStore.isLoginOpen = true;
  }
};
</script>

<style></style>
