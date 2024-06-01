<template>
  <nav
    class="w-nav h-nav bg-white m-auto left-0 right-0 top-6 z-20 shadow-custom rounded-custom flex items-center justify-between px-8 font-body lg:px-16 sticky"
  >
    <div class="Logo font-light text-logo">
      MICRO<span class="font-bold">MAGIC</span>
    </div>
    <div class="links hidden md:flex gap-3 text-lg text-center font-normal">
      <RouterLink to="/" class="hover:text-primary">
        {{ $t("navbar.home") }}
      </RouterLink>
      <RouterLink to="/about" class="hover:text-primary">
        {{ $t("navbar.about") }}
      </RouterLink>
      <RouterLink to="/Shop" class="hover:text-primary">
        {{ $t("navbar.shop") }}
      </RouterLink>
      <RouterLink to="/Contact" class="hover:text-primary">
        {{ $t("navbar.contact") }}
      </RouterLink>
    </div>
    <div class="hidden md:flex text-2xl gap-3">
      <RouterLink to="/cart">
        <CartSVG class="hover:text-primary" />
      </RouterLink>
      <a href="#">
        <ProfileSVG class="hover:text-primary" />
      </a>
      <a href="#" @click="changeLocale">
        <TranslateSVG class="hover:text-primary" />
      </a>
    </div>
    <button @click="toggleMenu" class="block md:hidden">
      <svg
        class="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 6h16M4 12h16m-7 6h7"
        />
      </svg>
    </button>
    <div
      v-if="isMenuOpen"
      class="absolute top-full left-0 w-full bg-white shadow-lg md:hidden"
    >
      <ul class="flex flex-col items-center gap-3 py-4">
        <RouterLink to="/" class="hover:text-primary">
          {{ $t("navbar.home") }}
        </RouterLink>
        <RouterLink to="/about" class="hover:text-primary">
          {{ $t("navbar.about") }}
        </RouterLink>
        <RouterLink to="/Shop" class="hover:text-primary">
          {{ $t("navbar.shop") }}
        </RouterLink>
        <RouterLink to="/Contact" class="hover:text-primary">
          {{ $t("navbar.contact") }}
        </RouterLink>
        <RouterLink to="/cart">
          <CartSVG class="hover:text-primary h-6 w-6" />
        </RouterLink>
        <li>
          <a href="#" class="text-2xl hover:text-primary">
            <ProfileSVG />
          </a>
        </li>
        <li>
          <a href="#" class="text-2xl hover:text-primary" @click="changeLocale">
            <TranslateSVG />
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { ref } from "vue";
import { useI18n } from "vue-i18n";
import CartSVG from "./icons/shopping-cart.vue";
import ProfileSVG from "./icons/profile.vue";
import TranslateSVG from "./icons/translate.vue";

const { t, locale } = useI18n();
const isMenuOpen = ref(false);

const changeLocale = () => {
  locale.value = locale.value === "en" ? "ro" : "en";
};

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>
