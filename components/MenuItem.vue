<template>
  <div class="w-full flex items-center hover:bg-gray-100 p-2.5 rounded-md">
    <div class="flex items-center lg:mx-0 mx-auto">
      <UIcon
        :name="icon"
        :class="`text-[${colorString}] h-${sizeString} w-${sizeString}`"
      />
      <span
        :class="`text-[${colorString}]`"
        class="lg:block hidden pl-[9px] mt-0.5 font-semibold text-[17px]"
        >{{ iconString }}</span
      >
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  icon: String,
  iconString: String,
  colorString: String,
  sizeString: String,
});

const { icon, iconString, colorString, sizeString } = toRefs(props);
</script>

<style></style>
