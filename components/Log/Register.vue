<template>
  <div class="text-center text-[28px] mb-4 font-bold">Sign up</div>

  <div class="px-6 pb-2">
    <TextInput
      placeholder="Full name"
      v-model:input="name"
      inputType="text"
      :autoFocus="true"
      error=""
    />
  </div>

  <div class="px-6 pb-2">
    <TextInput
      placeholder="Email address"
      v-model:input="email"
      inputType="email"
      error=""
    />
  </div>

  <div class="px-6 pb-2">
    <TextInput
      placeholder="Password"
      v-model:input="password"
      inputType="password"
      error=""
    />
  </div>

  <div class="px-6 pb-2">
    <TextInput
      placeholder="Confirm Password"
      v-model:input="confirmPassword"
      inputType="password"
      error=""
    />
  </div>
  <div class="px-6 text-[12px] text-gray-600">Forgot password?</div>

  <div class="px-6 pb-2 mt-6">
    <button
      :disabled="!email || !password || !name || !confirmPassword"
      :class="
        !email || !password || !name || !confirmPassword
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

<script setup lang="ts">
import TextInput from "../TextInput.vue";

let name = ref();
let email = ref();
let password = ref();
let confirmPassword = ref();
let error = ref();

const register = () => {};
</script>

<style></style>
