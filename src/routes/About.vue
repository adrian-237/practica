<script setup>
import Footer from "./../components/Footer.vue";
import ShopIcon from "./../components/icons/shopping-cart.vue";
import CupIcon from "./../components/icons/cup.vue";
import TagIcon from "./../components/icons/tag-price.vue";
import CheckIcon from "./../components/icons/solar-check.vue";

import VideoAbout from "./../components/VideoAbout.vue";

import reviews from "./../components/CustomerReview.vue";

import Brands from "../components/Brands.vue";
</script>

<template>
  <div
    class="banner font-body bg-background2 h-4/5 w-screen z-0 -mt-14 py-24 md:flex-row max-sm:flex-col text-5xl font-thin flex-col"
  >
    <div class="flex flex-col justify-center items-center gap-5">
      <div class="">{{ $t("About.banner") }}</div>
      <div class="text-lg font-light">
        Home > <span class="underline">About us</span>
      </div>
    </div>
  </div>

  <div class="container mx-auto my-10 flex flex-col gap-10 py-10 mb-40 md:mb-0">
    <div class="flex flex-wrap md:flex-nowrap justify-center gap-3 py-5">
      <div class="flex w-full md:w-feature max-w-xs md:max-w-full gap-2">
        <ShopIcon class="text-primary text-3xl" />
        <div>
          <div class="uppercase">{{ $t("home.features.f1") }}</div>
          <div>{{ $t("home.features.f1-detail") }}</div>
        </div>
      </div>
      <div class="flex w-full md:w-feature max-w-xs md:max-w-full gap-2">
        <CupIcon class="text-primary text-3xl" />
        <div>
          <div class="uppercase">{{ $t("home.features.f2") }}</div>
          <div>{{ $t("home.features.f2-detail") }}</div>
        </div>
      </div>
      <div class="flex w-full md:w-feature max-w-xs md:max-w-full gap-2">
        <TagIcon class="text-primary text-3xl" />
        <div>
          <div class="uppercase">{{ $t("home.features.f3") }}</div>
          <div>{{ $t("home.features.f3-detail") }}</div>
        </div>
      </div>
      <div class="flex w-full md:w-feature max-w-xs md:max-w-full gap-2">
        <CheckIcon class="text-primary text-3xl" />
        <div>
          <div class="uppercase">{{ $t("home.features.f4") }}</div>
          <div>{{ $t("home.features.f4-detail") }}</div>
        </div>
      </div>
    </div>

    <div
      class="content flex flex-col items-center justify-center md:flex-row gap-24"
    >
      <VideoAbout class="w-content md:w-1/2" />
      <div
        class="w-content md:w-1/3 flex flex-col justify-center items-center gap-5"
      >
        <div class="w-full uppercase text-2xl font-light">
          {{ $t("About.title") }}
        </div>
        <div class="font-light">
          {{ $t("About.description") }}
        </div>
        <div
          class="bg-primary h-button w-52 flex justify-center items-center text-white rounded-full uppercase text-base font-light hover:font-bold hover:border hover:border-solid hover:border-primary hover:bg-transparent hover:text-primary"
        >
          {{ $t("About.button") }}
        </div>
      </div>
    </div>
    <reviews />
  </div>
  <Brands />
</template>
