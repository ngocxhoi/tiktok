<template>
  <input
    :id="`input-${placeholder}`"
    :placeholder="placeholder"
    :type="inputType"
    v-model="inputComputed"
    autocomplete="off"
    :maxlength="max"
    class="block w-full bg-[#f1f1f2] text-gray-800 border border-gray-300 rounded-md py-2.5 px-3 focus:outline-none"
  />

  <span v-if="error" class="text-red-500 text- font-semibold">{{ error }}</span>
</template>

<script setup lang="ts">
const props = defineProps(["inputType", "placeholder", "error", 'max', 'autoFocus', 'input']);

const { inputType, placeholder, error, autoFocus, input, max } = toRefs(props);

const emits = defineEmits([	
"update:input"	
])

onMounted(() => {
  if(autoFocus?.value) {
    document.getElementById(`input-${placeholder?.value}`)?.focus()
  }
})

const inputComputed = computed({
  get: () => input?.value,
  set: (val) => emits('update:input', val)
})
</script>

<style></style>
