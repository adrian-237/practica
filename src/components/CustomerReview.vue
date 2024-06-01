<template>
  <div
    class="title flex items-center justify-center w-full overflow-hidden p-5"
  >
    <div class="text-xl md:text-2xl">{{ $t("review.title") }}</div>
    <div
      class="bg-slashes w-full h-10 flex items-center text-xl text-secondary font-light -mr-24 md:-mr-28 p-5"
    >
      /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    </div>
  </div>

  <div class="reviews flex flex-wrap md:flex-nowrap justify-center">
    <div
      class="card w-full max-w-xs sm:w-1/2 sm:max-w-sm md:w-1/3 md:max-w-md lg:w-1/4 lg:max-w-lg xl:w-1/5 xl:max-w-xl h-auto border border-secondary rounded-lg p-5 m-2 flex flex-col gap-3"
    >
      <div class="comment font-normal text-sm">{{ $t("review.Comment") }}</div>
      <div class="flex text-primary">
        <star /><star /><star /><star /><star />
      </div>
      <div class="font-bold">{{ $t("review.Name") }}</div>
    </div>
    <div
      class="card w-full max-w-xs sm:w-1/2 sm:max-w-sm md:w-1/3 md:max-w-md lg:w-1/4 lg:max-w-lg xl:w-1/5 xl:max-w-xl h-auto border border-secondary rounded-lg p-5 m-2 flex flex-col gap-3"
    >
      <div class="comment font-normal text-sm">{{ $t("review.Comment") }}</div>
      <div class="flex text-primary">
        <star /><star /><star /><star /><star />
      </div>
      <div class="font-bold">{{ $t("review.Name") }}</div>
    </div>
    <div
      class="card w-full max-w-xs sm:w-1/2 sm:max-w-sm md:w-1/3 md:max-w-md lg:w-1/4 lg:max-w-lg xl:w-1/5 xl:max-w-xl h-auto border border-secondary rounded-lg p-5 m-2 flex flex-col gap-3"
    >
      <div class="comment font-normal text-sm">{{ $t("review.Comment") }}</div>
      <div class="flex text-primary">
        <star /><star /><star /><star /><star />
      </div>
      <div class="font-bold">{{ $t("review.Name") }}</div>
    </div>
  </div>
</template>

<script setup>
import star from "./icons/star.vue";
</script>
