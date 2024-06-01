<script setup>
import { ref } from "vue";
import { useI18n } from "vue-i18n";

import ShopIcon from "./../components/icons/shopping-cart.vue";
import CupIcon from "./../components/icons/cup.vue";
import TagIcon from "./../components/icons/tag-price.vue";
import CheckIcon from "./../components/icons/solar-check.vue";

import reviews from "./../components/CustomerReview.vue";

import brands from "./../components/Brands.vue";

import Footer from "../components/Footer.vue";
import { RouterLink } from "vue-router";

const { t, locale } = useI18n();
</script>

<template>
  <div
    class="banner font-body bg-background2 h-3/5 w-screen z-0 -mt-14 flex justify-center items-center py-24 md:flex-row max-sm:flex-col"
  >
    <div class="content flex flex-col gap-7 max-sm:justify-center items-center">
      <div class="title uppercase font-light lg:text-5xl md:text-3xl text-2xl">
        {{ $t("home.main_banner.title") }}
      </div>
      <div class="text-xl :max-sm:text-base">
        {{ $t("home.main_banner.message") }}
      </div>
      <div
        class="bg-primary h-button w-button flex justify-center items-center text-white rounded-full uppercase font-light text-base hover:font-bold hover:border hover:border-solid hover:border-primary hover:bg-transparent hover:text-primary"
      >
        {{ t("home.main_banner.button") }}
      </div>
    </div>
    <img
      src="./../assets/Images/main/banner_img.png"
      alt=""
      class="w-1/3 max-sm:w-2/3"
    />
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

    <div class="flex flex-col gap-8">
      <div
        class="title flex items-center justify-center w-full overflow-hidden"
      >
        <div class="text-xl md:text-2xl">{{ $t("home.categories.title") }}</div>
        <div
          class="bg-slashes w-full h-10 flex items-center text-xl text-secondary font-light -mr-24 md:-mr-28 p-5"
        >
          /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        </div>
      </div>

      <div
        class="categories flex flex-wrap justify-center md:flex-nowrap gap-5 h-28 md:h-56 overflow-visible text-center"
      >
        <div
          class="w-1/4 md:w-1/6 h-full flex flex-col border border-solid border-secondary justify-center items-center rounded-md"
        >
          <img
            src="./../assets/Images/Categories/microwave.png"
            class="w-3/5 h-3/5 object-cover"
            alt=""
          />
          <p class="font-light text-sm md:text-xl">
            {{ $t("home.categories.category1") }}
          </p>
        </div>
        <div
          class="w-1/4 md:w-1/6 h-full flex flex-col border border-solid border-secondary justify-center items-center rounded-md"
        >
          <img
            src="./../assets/Images/Categories/kettle.png"
            class="w-2/5 h-3/5 md"
            alt=""
          />
          <p class="font-light text-sm md:text-xl">
            {{ $t("home.categories.category2") }}
          </p>
        </div>
        <div
          class="w-1/4 md:w-1/6 h-full flex flex-col border border-solid border-secondary justify-center items-center rounded-md"
        >
          <img
            src="./../assets/Images/Categories/toaster.png"
            class="w-2/5 h-3/5 md"
            alt=""
          />
          <p class="font-light text-sm md:text-xl">
            {{ $t("home.categories.category3") }}
          </p>
        </div>
        <div
          class="w-1/4 md:w-1/6 h-full flex flex-col border border-solid border-secondary justify-center items-center rounded-md"
        >
          <img
            src="./../assets/Images/Categories/food_processor.png"
            class="w-2/6 h-3/5 md"
            alt=""
          />
          <p class="font-light text-sm md:text-xl">
            {{ $t("home.categories.category4") }}
          </p>
        </div>
        <div
          class="w-1/4 md:w-1/6 h-full flex flex-col border border-solid border-secondary justify-center items-center rounded-md"
        >
          <img
            src="./../assets/Images/Categories/coffeemaker.png"
            class="w-2/5 h-3/5 md"
            alt=""
          />
          <p class="font-light text-sm md:text-xl">
            {{ $t("home.categories.category5") }}
          </p>
        </div>
      </div>
    </div>

    <div class="best-selling"></div>
  </div>

  <div
    class="banner font-body bg-background2 h-full w-screen mx-auto flex flex-wrap items-center justify-center lg:flex-nowrap gap-20 p-10"
  >
    <img
      src="./../assets/Images/main/banner2.png"
      alt=""
      class="h-3/5 md:pl-5"
    />
    <div
      class="content flex flex-col md:w-1/3 items-center text-center md:items-start md:text-left gap-10"
    >
      <h2 class="uppercase font-thin text-3xl md:text-5xl text-wrap">
        {{ $t("home.discount.title") }}
      </h2>
      <div class="time flex gap-5">
        <div class="days flex flex-col items-center justify-center">
          <div class="day bold text-3xl md:text-5xl">21</div>
          <p class="font-thin text-lg">{{ $t("home.discount.day") }}</p>
        </div>
        <div class="flex items-center text-primary text-5xl">:</div>
        <div class="days flex flex-col items-center justify-center">
          <div class="day bold text-3xl md:text-5xl">22</div>
          <p class="font-thin text-lg">{{ $t("home.discount.hour") }}</p>
        </div>
        <div class="flex items-center text-primary text-5xl">:</div>
        <div class="days flex flex-col items-center justify-center">
          <div class="day bold text-3xl md:text-5xl">19</div>
          <p class="font-thin text-lg">{{ $t("home.discount.min") }}</p>
        </div>
        <div class="flex items-center text-primary text-5xl">:</div>
        <div class="days flex flex-col items-center justify-center">
          <div class="day bold text-3xl md:text-5xl">30</div>
          <p class="font-thin text-lg">{{ $t("home.discount.sec") }}</p>
        </div>
      </div>
      <RouterLink
        to="/Shop"
        class="bg-primary h-button w-button flex justify-center items-center text-white rounded-full uppercase font-light text-base"
      >
        {{ t("home.main_banner.button") }}
      </RouterLink>
    </div>
  </div>

  <div class="container mx-auto my-20 flex gap-10 justify-center flex-wrap">
    <div
      class="card p-5 w-full sm:w-1/2 md:w-1/4 lg:w-1/5 min-w-0 max-w-xs border border-secondary rounded-md"
    >
      <div
        class="title flex flex-col justify-center w-full overflow-hidden p-5"
      >
        <div class="text-xl md:text-2xl font-light">
          {{ $t("home.categories.title") }}
        </div>
        <div
          class="bg-slashes w-full h-10 flex items-center text-xl text-secondary font-light"
        >
          /////////////////////////////////////////////////////////////////////////////
        </div>
      </div>
      <div class="prods">
        <!-- Product Cards -->
        <div class="prod flex border-b-2">
          <img
            src="/src/assets/Images/Categories/kettle.png"
            class="w-20"
            alt=""
          />
          <div class="info">
            <div class="titl">Wireless headset</div>
            <div class="price text-primary">$500</div>
          </div>
        </div>

        <div class="prod flex border-b-2">
          <img
            src="/src/assets/Images/Categories/kettle.png"
            class="w-20"
            alt=""
          />
          <div class="info">
            <div class="titl">Wireless headset</div>
            <div class="price text-primary">$500</div>
          </div>
        </div>

        <div class="prod flex">
          <img
            src="/src/assets/Images/Categories/kettle.png"
            class="w-20"
            alt=""
          />
          <div class="info">
            <div class="titl">Wireless headset</div>
            <div class="price text-primary">$500</div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="card p-5 w-full sm:w-1/2 md:w-1/4 lg:w-1/5 min-w-0 max-w-xs border border-secondary rounded-md"
    >
      <div
        class="title flex flex-col justify-center w-full overflow-hidden p-5"
      >
        <div class="text-xl md:text-2xl font-light">
          {{ $t("home.categories.title") }}
        </div>
        <div
          class="bg-slashes w-full h-10 flex items-center text-xl text-secondary font-light"
        >
          /////////////////////////////////////////////////////////////////////////////
        </div>
      </div>
      <div class="prods">
        <!-- Product Cards -->
        <div class="prod flex border-b-2">
          <img
            src="/src/assets/Images/Categories/kettle.png"
            class="w-20"
            alt=""
          />
          <div class="info">
            <div class="titl">Wireless headset</div>
            <div class="price text-primary">$500</div>
          </div>
        </div>

        <div class="prod flex border-b-2">
          <img
            src="/src/assets/Images/Categories/kettle.png"
            class="w-20"
            alt=""
          />
          <div class="info">
            <div class="titl">Wireless headset</div>
            <div class="price text-primary">$500</div>
          </div>
        </div>

        <div class="prod flex">
          <img
            src="/src/assets/Images/Categories/kettle.png"
            class="w-20"
            alt=""
          />
          <div class="info">
            <div class="titl">Wireless headset</div>
            <div class="price text-primary">$500</div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="card p-5 w-full sm:w-1/2 md:w-1/4 lg:w-1/5 min-w-0 max-w-xs border border-secondary rounded-md"
    >
      <div
        class="title flex flex-col justify-center w-full overflow-hidden p-5"
      >
        <div class="text-xl md:text-2xl font-light">
          {{ $t("home.categories.title") }}
        </div>
        <div
          class="bg-slashes w-full h-10 flex items-center text-xl text-secondary font-light"
        >
          /////////////////////////////////////////////////////////////////////////////
        </div>
      </div>
      <div class="prods">
        <!-- Product Cards -->
        <div class="prod flex border-b-2">
          <img
            src="/src/assets/Images/Categories/kettle.png"
            class="w-20"
            alt=""
          />
          <div class="info">
            <div class="titl">Wireless headset</div>
            <div class="price text-primary">$500</div>
          </div>
        </div>

        <div class="prod flex border-b-2">
          <img
            src="/src/assets/Images/Categories/kettle.png"
            class="w-20"
            alt=""
          />
          <div class="info">
            <div class="titl">Wireless headset</div>
            <div class="price text-primary">$500</div>
          </div>
        </div>

        <div class="prod flex">
          <img
            src="/src/assets/Images/Categories/kettle.png"
            class="w-20"
            alt=""
          />
          <div class="info">
            <div class="titl">Wireless headset</div>
            <div class="price text-primary">$500</div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="container mx-auto my-20">
    <reviews />
  </div>
  <brands />
  <div class="p-5">
    <h2 class="uppercase text-center text-2xl font-light p-5">
      Instagram #MICROMAGIC
    </h2>
    <div
      class="*:w-36 *:h-36 object-cover flex gap-5 justify-center items-center *:rounded-md flex-wrap md:*:w-52 md:*:h-52 transition-all"
    >
      <img src="./../assets/Images/main/instagram/img1.jpg" alt="" />
      <img src="./../assets/Images/main/instagram/img2.webp" alt="" />
      <img src="./../assets/Images/main/instagram/img6.jpg" alt="" />

      <img src="./../assets/Images/main/instagram/img4.jpg" alt="" />
      <img src="./../assets/Images/main/instagram/img5.jpeg" alt="" />
      <img src="./../assets/Images/main/instagram/img3.jpg" alt="" />
    </div>
  </div>
</template>
