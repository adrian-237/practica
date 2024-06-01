<template>
  <footer class="mt-10 flex flex-col">
    <div
      class="flex flex-col items-center justify-around md:flex-row md:items-baseline gap-5"
    >
      <div
        class="comp flex flex-col gap-5 items-center text-center w-4/5 md:w-1/5"
      >
        <div class="Logo font-light text-logo">
          MICRO<span class="font-bold">MAGIC</span>
        </div>
        <div class="description">
          {{ $t("footer.description") }}
        </div>
        <div
          class="icon flex justify-center items-center gap-3 *:w-5 *:h-5 *:fill-secondary"
        >
          <facebook class="hover:fill-primary" />
          <instagram class="hover:fill-primary" />
          <twitter class="hover:fill-primary" />
          <linkedin class="hover:fill-primary" />
          <youtube class="hover:fill-primary" />
        </div>
      </div>

      <div class="quick-links flex flex-col gap-3 items-center justify-center">
        <div class="title text-xl uppercase">{{ $t("footer.links") }}</div>
        <ul class="*:uppercase">
          <li>
            <RouterLink to="/" class="hover:text-primary text-lg">
              {{ $t("navbar.home") }}
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/about" class="hover:text-primary text-lg">
              {{ $t("navbar.about") }}
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/" class="hover:text-primary text-lg">
              {{ $t("navbar.shop") }}
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/" class="hover:text-primary text-lg">
              {{ $t("navbar.contact") }}
            </RouterLink>
          </li>
        </ul>
      </div>
      <div class="contact flex flex-col gap-3">
        <div class="title uppercase text-xl text-center md:text-left">
          contact us
        </div>
        <div class="text-center md:text-left">
          {{ $t("footer.email") }} <br />
          <span class="underline hover:text-primary cursor-pointer"
            >micromagic@gmail.com</span
          >
        </div>
        <div class="text-center md:text-left">
          {{ $t("footer.number") }}<br />
          <span class="underline hover:text-primary cursor-pointer"
            >+55 111 222 333 44</span
          >
        </div>
      </div>
    </div>
    <div
      class="flex mt-5 border-t p-5 flex-col items-center md:flex-row md:items-start md:justify-between lg:px-32"
    >
      <div class="flex gap-3 items-center">
        <div class="">{{ $t("footer.payment") }}</div>
        <div class="*:w-10 *:h-10 text-secondary flex gap-3">
          <visa />
          <mastecard />
          <paypal />
        </div>
      </div>

      <p>© Copyright 2024 MicroMagic. Made by Adrian</p>
    </div>
  </footer>
</template>

<script setup>
import facebook from "./icons/facebook.vue";
import linkedin from "./icons/linkedin.vue";
import instagram from "./icons/instagram.vue";
import twitter from "./icons/twitter.vue";
import youtube from "./icons/youtube.vue";
import visa from "./icons/visa.vue";
import mastecard from "./icons/mastecard.vue";
import paypal from "./icons/paypal.vue";
</script>
