<template>
  <UploadError :errorType="errorType" />

  <UploadLayout>
    <div
      class="w-full mt-[80px] mb-[40px] bg-white shadow-lg rounded-mx py-6 md:px-10 px-4"
    >
      <div>
        <div class="text-[23px] font-semibold">Upload video</div>
        <div class="text-gray-400 mt-1">Post a video to yout account</div>
      </div>

      <div class="mt-8 md:flex gap-6">
        <label
          v-if="!fileDisplay"
          @drop.prevent="onDrop($event)"
          @dragover.prevent=""
          for="fileInput"
          class="md:mx-0 mx-auto mt-4 mb-6 flex flex-col items-center w-full max-w-[260px] h-[470px] text-center p-3 border-2 border-dashed border-gray-300 rounded-lg hover:bg-gray-100 cursor-pointer"
        >
          <UIcon
            name="i-heroicons-cloud-arrow-up-solid"
            class="h-10 w-10 text-[#b3b3b1]"
          />
          <div class="mt-4 text-[17px]">Select video to upload</div>
          <div class="mt-1.5 text-gray-500 text-[13px]">
            Or drag and drop file
          </div>
          <div class="mt-12 text-gray-400 text-[13px]">
            MP4 <br />Up to 30 minute <br />Less than 2GB
          </div>
          <div
            class="px-2 py-1.5 mt-8 text-white text-[15px] w-[80%] bg-[--red-color] rounded-sm"
          >
            Select file
          </div>

          <input
            ref="file"
            @input="onchange()"
            type="file"
            id="fileInput"
            hidden
            accept=".mp4"
          />
        </label>

        <div
          v-else
          class="relative md:mx-0 mx-auto mt-4 md:mb-12 mb-16 flex items-center justify-center w-full max-w-[260px] h-[540px] p-3 rounded-lg cursor-pointer"
        >
          <div class="bg-black h-full w-full" />
          <img
            class="absolute z-20 pointer-events-none"
            src="/images/mobile-case.png"
            alt=""
          />
          <img
            src="/images/tiktok-logo-white.png"
            width="90"
            alt=""
            class="absolute right-4 bottom-6 z-20"
          />
          <video
            autoplay
            loop
            muted
            class="absolute rounded-xl object-cover z-10 p-[13px] w-full h-full"
            :src="fileDisplay"
          />

          <div
            class="absolute -bottom-12 flex items-center justify-between z-50 rounded-xl border w-full p-2 border-gray-300"
          >
            <div class="flex items-center truncate">
              <UIcon name="i-heroicons-check-badge" class="min-w-4" />
              <div class="text- pl-1 truncate text-ellipsis">
                {{ fileData.name }}
              </div>
            </div>
            <button
              @click="clearVideo()"
              class="text-[11px] ml-2 font-semibold"
            >
              Change
            </button>
          </div>
        </div>

        <div class="mt-4 mb-6">
          <div class="flex bg-[#f8f8f8] py-4 px-6">
            <div>
              <UIcon name="i-heroicons-x-mark" class="mr-4 h-5 w-5" />
            </div>
            <div>
              <div class="font-semibold text-[15px] mb-1.5">
                Divide videos and edit
              </div>
              <div class="font-semibold text-[13px] text-gray-400">
                You can quickly divide videos into multiple parts, remove
                redundant parts and turn landscape videos into portrait videos
              </div>
            </div>
            <div
              class="flex justify-end max-w-[130px] w-full h-full text-center my-auto"
            >
              <button
                class="px-8 py-1.5 text-white text-[15px] bg-[--red-color] rounded-sm"
              >
                Edit
              </button>
            </div>
          </div>

          <div class="mt-5">
            <div class="flex items-center justify-between">
              <div class="mb-1 text-[15px]">Caption</div>
              <div class="text-gray-400 text-[12px]">
                {{ caption.length }}/150
              </div>
            </div>
            <input
              v-model="caption"
              type="text"
              maxlength="150"
              class="w-full border p-2.5 rounded-md focus:outline-none"
            />
          </div>

          <div class="flex gap-3">
            <UButton
              @click="discard()"
              label="Discard"
              variant="outline"
              class="hover:bg-gray-100 text-gray-500 px-10 py-2.5 mt-8"
            />
            <UButton
              label="Post"
              variant="outline"
              class="text-white bg-[--red-color] hover:text-white hover:bg-[--red-color] px-10 py-2.5 mt-8"
            />
          </div>
        </div>
      </div>
    </div>
  </UploadLayout>
</template>

<script setup>
import UploadLayout from "~/layouts/UploadLayout.vue";

let caption = ref("");
let file = ref(null);
let fileDisplay = ref("");
let errorType = ref(null);
let fileData = ref(null);
let errors = ref(null);
let isUploading = ref(false);

const onchange = () => {
  fileDisplay.value = URL.createObjectURL(file.value.files[0]);
  fileData.value = file.value.files[0];
};

const onDrop = (e) => {
  errorType.value = "";
  file.value = e.dataTransfer.files[0];

  let extension = file.value.name.substring(
    file.value.name.lastIndexOf(".") + 1
  );

  if (extension != "mp4") {
    errorType.value = "file";
    return;
  }

  fileDisplay.value = URL.createObjectURL(file.value);
  fileData.value = e.dataTransfer.files[0];
};

const discard = () => {
  file.value = null;
  fileDisplay.value = null;
  fileData.value = null;
  caption.value = "";
};

const clearVideo = () => {
  file.value = null;
  fileDisplay.value = null;
  fileData.value = null;
};

watch(
  () => caption.value,
  () => {
    if (caption.length == 150) {
      errorType.value = "caption";
      return;
    }
    errorType.value = null;
  }
);
</script>

<style></style>
