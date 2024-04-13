<template>
  <div class="text-center text-[28px] mb-4 font-bold">Log in</div>

  <div class="px-6 pb-1.5 text-[15px]">Email address</div>

  <div class="px-6 pb-2">
    <TextInput
      placeholder="Email address"
      v-model:input="form.email"
      inputType="email"
      :autoFocus="true"
      :error="errors && errors.email ? errors.email[0] : ''"
    />
  </div>

  <div class="px-6 pb-2">
    <TextInput
      placeholder="Password"
      v-model:input="form.password"
      inputType="password"
    />
  </div>
  <div class="px-6 text-[12px] text-gray-600">Forgot password?</div>

  <div class="px-6 pb-2 mt-6">
    <button
      :disabled="!form.email || !form.password"
      :class="!form.email || !form.password ? 'bg-gray-200' : 'bg-[#f02c56]'"
      @click="loginAction()"
      class="w-full text-[17px] font-semibold text-white py-3 rounded-sm"
    >
      Log in
    </button>
  </div>

  <div class="text-red-500">{{ user }}</div>
</template>

<script setup lang="ts">
import TextInput from "../TextInput.vue";

const { $userStore, $generalStore } = useNuxtApp();

let form = ref({
  email: "user1@example.com",
  password: "123123123",
});

let errors = ref();

let user = ref();

const loginAction = async () => {
  errors.value = null;
  try {
    await $userStore.getTokens();

    let dataRes: any = await $userStore.login(form.value);
    const responses = dataRes.responses._data;
    if (responses && responses.errors) throw responses.errors;
    $generalStore.isLoginOpen = false;
    await $userStore.getUser();
  } catch (error) {
    errors.value = error;
    console.log(error);
  }
};
</script>

<style></style>
