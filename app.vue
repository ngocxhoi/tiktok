<template>
  <NuxtPage />

  <AuthOverlay v-if="isLoginOpen" />
  <EditProfileOverlay v-if="isEditProfileOpen" />
</template>

<script setup lang="ts">
const { $generalStore, $userStore } = useNuxtApp();
// const parent = useAutoAnimate({ duration: 500 });
const { isLoginOpen, isEditProfileOpen } = storeToRefs($generalStore);

onMounted(async () => {
  $generalStore.bodySwitch(false);
  isLoginOpen.value = false;
  isEditProfileOpen.value = false;

  try {
    await $userStore.getTokens();
    await $generalStore.getRandomUsers();
    if ($userStore.id) {
      await $userStore.getUser();
    }
  } catch (error) {
    console.log(error);
  }
});

watch(
  () => isLoginOpen.value,
  (val) => $generalStore.bodySwitch(val)
);
watch(
  () => isEditProfileOpen.value,
  (val) => $generalStore.bodySwitch(val)
);

// watchEffect(() =>
//   $generalStore.bodySwitch(isLoginOpen.value || isEditProfileOpen.value)
// );
</script>
