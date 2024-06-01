<template>
  <div
    class="banner font-body bg-background2 h-4/5 w-screen z-0 -mt-14 py-24 md:flex-row max-sm:flex-col text-5xl font-thin flex-col"
  >
    <div class="flex flex-col justify-center items-center gap-5">
      <div class="uppercase">{{ $t("Cart.banner") }}</div>
      <div class="text-lg font-light">
        Home > <span class="underline">Shop</span>
      </div>
    </div>
  </div>

  <div class="w-content mx-auto my-10 flex flex-col gap-10 py-10">
    <div class="w-full overflow-hidden text-secondary"></div>

    <div
      v-for="(item, index) in cartItems"
      :key="index"
      class="flex flex-col gap-5 md:flex-row md:gap-0 md:p-4 justify-between items-center border-b rounded-lg"
    >
      <div class="flex items-center justify-center gap-3">
        <img :src="'/public/Product-Img' + item.image" class="w-20 h-28" />
        <div class="flex flex-col">
          <div>{{ item.name }}</div>
          <div class="text-primary">${{ item.price }}</div>
        </div>
      </div>
      <div class="flex gap-2 *:p-3 *:rounded-lg *:drop-shadow-lg *:bg-white">
        <button
          @click="decreaseAmount(index)"
          class="border w-5 h-5 flex justify-center items-center hover:text-primary"
        >
          -
        </button>
        <div
          class="w-10 h-5 border flex justify-center items-center hover:text-primary"
        >
          {{ item.amount }}
        </div>
        <button
          @click="increaseAmount(index)"
          class="border w-5 h-5 flex justify-center items-center hover:text-primary"
        >
          +
        </button>
      </div>
      <div class="text-primary text-2xl">${{ item.price * item.amount }}</div>
      <button @click="removeFromCart(index)" class="text-4xl">
        <delete />
      </button>
    </div>

    <div class="totals divide-y divide-black-20 flex flex-col gap-3">
      <div class="uppercase text-xl font-light">Cart totals</div>
      <div class="uppercase font-light text-lg flex justify-between md:w-1/2">
        <div class="">Total</div>
        <div class="sum text-primary font-bold">${{ cartTotal }}</div>
      </div>
    </div>

    <div class="flex gap-5">
      <router-link
        to="/shop"
        class="uppercase bg-primary p-3 rounded-full w-64 text-white font-light hover:font-bold hover:drop-shadow-2xl text-center"
      >
        continue shopping
      </router-link>
      <router-link
        to="/checkout"
        class="uppercase bg-black p-3 rounded-full w-64 text-white font-light hover:font-bold hover:drop-shadow-2xl text-center"
        @click.native="proceedToCheckout"
      >
        proceed to checkout
      </router-link>
    </div>
  </div>

  <brands />
</template>

<script setup>
import { ref, onMounted, computed } from "vue";

import Brands from "../components/Brands.vue";

const cartItems = ref([]);

const removeFromCart = (index) => {
  cartItems.value.splice(index, 1);
  updateLocalStorage();
};

const updateLocalStorage = () => {
  localStorage.setItem("cartItems", JSON.stringify(cartItems.value));
};

const increaseAmount = (index) => {
  cartItems.value[index].amount++;
  updateLocalStorage();
};

const decreaseAmount = (index) => {
  if (cartItems.value[index].amount > 1) {
    cartItems.value[index].amount--;
  } else {
    removeFromCart(index);
  }
  updateLocalStorage();
};

const proceedToCheckout = () => {
  localStorage.setItem("cartTotal", JSON.stringify(cartTotal.value));
};

onMounted(() => {
  const cartData = localStorage.getItem("cartItems");
  if (cartData) {
    cartItems.value = JSON.parse(cartData);
  }
});

const cartTotal = computed(() => {
  return cartItems.value.reduce(
    (total, item) => total + item.price * item.amount,
    0
  );
});

import Delete from "../components/icons/cart-remove.vue";
</script>
