<template>
  <div
    id="SideNavMain"
    :class="$route.fullPath === '/' ? 'lg:w-[310px]' : 'lg:w-[220px]'"
    class="fixed z-20 bg-white pt-[70px] h-full lg:border-r-0 border-r min-w-[75px] overflow-hidden"
  >
    <div class="lg:w-full w-[55px] mx-auto">
      <NuxtLink to="/">
        <MenuItem
          icon="i-heroicons-home"
          iconString="For You"
          colorString="#f02c56"
          sizeString="7"
        />
      </NuxtLink>
      <MenuItem
        icon="i-heroicons-users"
        iconString="Following"
        colorString="#000000"
        sizeString="7"
      />
      <MenuItem
        icon="i-heroicons-video-camera"
        iconString="Live"
        colorString="#000000"
        sizeString="7"
      />

      <div class="border-b lg:ml-2 mt-2" />

      <div
        class="lg:block hidden text-xs text-gray-600 font-semibold pt-4 pb-2 px-2"
      >
        Suggested accounts
      </div>

      <div class="lg:hidden block pt-3" />

      <div class="currsor-pointer">
        <MenuItemFollow />
      </div>

      <button class="lg:block hidden text-[#f02c56] pt-1 5 pl-2 text-[13px]">
        See all
      </button>

      <div class="border-b lg:ml-2 mt-2" />

      <div
        class="lg:block hidden text-xs text-gray-600 font-semibold pt-4 pb-2 px-2"
      >
        Following accounts
      </div>

      <div class="lg:hidden block pt-3" />

      <div class="currsor-pointer">
        <MenuItemFollow />
      </div>

      <button class="lg:block hidden text-[#f02c56] pt-1 5 pl-2 text-[13px]">
        See more
      </button>

      <div class="lg:block hidden border-b lg:ml-2 mt-2" />

      <div class="lg:block hidden text-[11px] text-gray-500">
        <div class="pt-4 mb-0.5 px-2">About Newsroom Contact Careers</div>
        <div class="pt-4 px-2">TikTok for Good Advertise</div>
        <div class="pt-4 px-2">
          TikTok LIVE Creator Networks Developers Transparency
        </div>
        <div class="pt-4 px-2 mb-0.5">TikTok Rewards TikTok Embeds</div>

        <div class="pt-4 px-2 mb-0.5">
          HelpSafetyTermsPrivacy PolicyPrivacy CenterCreator PortalCommunity
          Guidelines
        </div>

        <div class="pt-4 px-2">© 2024 TikTok</div>
      </div>

      <div class="pb-14" />
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
</script>

<style></style>
