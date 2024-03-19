<template>
  <NuxtPage />

  <AuthOverlay v-if="$generalStore.isLoginOpen" />
  <EditProfileOverlay v-if="$generalStore.isEditProfileOpen" />
</template>

<script setup>
const { $generalStore } = useNuxtApp();
// const parent = useAutoAnimate({ duration: 500 });
</script>
