<template>
  <div class="text-center text-[28px] mb-4 font-bold">Sign up</div>

  <div class="px-6 pb-2">
    <TextInput
      placeholder="Full name"
      :autoFocus="true"
      v-model:input="formRegister.name"
      inputType="text"
      :error="errors && errors.name ? errors.name[0] : ''"
    />
  </div>

  <div class="px-6 pb-2">
    <TextInput
      placeholder="Email address"
      v-model:input="formRegister.email"
      inputType="email"
      :error="errors && errors.email ? errors.email[0] : ''"
    />
  </div>

  <div class="px-6 pb-2">
    <TextInput
      placeholder="Password"
      v-model:input="formRegister.password"
      inputType="password"
      :error="errors && errors.password ? errors.password[0] : ''"
    />
  </div>

  <div class="px-6 pb-2">
    <TextInput
      placeholder="Confirm Password"
      v-model:input="formRegister.password_confirmation"
      inputType="password"
      :error="
        errors && errors.password_confirmation
          ? errors.password_confirmation[0]
          : ''
      "
    />
  </div>

  <div class="px-6 text-[12px] text-gray-600">Forgot password?</div>

  <div class="px-6 pb-2 mt-6">
    <button
      :disabled="
        !formRegister.email ||
        !formRegister.password ||
        !formRegister.name ||
        !formRegister.password_confirmation
      "
      :class="
        !formRegister.email ||
        !formRegister.password ||
        !formRegister.name ||
        !formRegister.password_confirmation
          ? 'bg-gray-200'
          : 'bg-[#f02c56]'
      "
      @click="register()"
      class="w-full text-[17px] font-semibold text-white py-3 rounded-sm"
    >
      Sign up
    </button>
  </div>
</template>

<script setup>
import TextInput from "../TextInput.vue";
const { $userStore, $generalStore } = useNuxtApp();

let formRegister = ref({
  name: "user1",
  email: "user1@example.com",
  password: "123123123",
  password_confirmation: "123123123",
});

let errors = ref();

const register = async () => {
  errors.value = null;
  try {
    await $userStore.getTokens();

    let dataRes = await $userStore.register(formRegister.value);
    const responses = dataRes.responses._data;
    if (responses && responses.errors) throw responses.errors;
    await $userStore.getUser();
    $generalStore.isLoginOpen = false;
  } catch (error) {
    errors.value = error;
    console.log("The error:", error);
  }
};
</script>

<style></style>
