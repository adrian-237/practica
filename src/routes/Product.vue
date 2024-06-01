<template>
  <div
    v-if="product"
    class="w-content mx-auto my-10 flex flex-col md:flex-row gap-10 py-10"
  >
    <div class="images">
      <div class="w-full h-auto mt-10 flex justify-center items-center gap-5">
        <div
          class="options flex flex-col gap-5 md:gap-3 *:w-20 *:h-20 md:*:w-24 md:*:h-24 *:border *:rounded-lg"
        ></div>
        <img
          :src="'/public/Product-Img' + product.image"
          alt=""
          class="border w-72 h-72 md:w-80 md:h-96 rounded-lg"
        />
      </div>
    </div>
    <div class="info md:w-1/2 flex flex-col gap-3">
      <div class="uppercase text-3xl">{{ product.Name }}</div>
      <div class="text-primary text-xl">${{ product.price }}</div>
      <div class="text-sm">{{ product["short-description"] }}</div>
      <div class="delimiter overflow-hidden w-auto text-secondary">
        //////////////////////////////////////////////////////////////////////////////////////////////
      </div>
      <div class="stock">2 in stock</div>
      <div class="flex gap-2 *:p-3 *:rounded-lg *:drop-shadow-lg *:bg-white">
        <button class="border w-5 h-5 flex justify-center items-center">
          -
        </button>
        <div class="w-10 h-5 border flex justify-center items-center">1</div>
        <button class="border w-5 h-5 flex justify-center items-center">
          +
        </button>
      </div>
      <div class="buttons mt-5 flex gap-5">
        <button
          class="uppercase bg-primary p-3 rounded-full w-44 text-white font-light hover:font-bold hover:drop-shadow-2xl"
        >
          ORDER NOW
        </button>
        <button
          @click="addToCart"
          class="uppercase bg-black p-3 rounded-full w-44 text-white font-light hover:font-bold hover:drop-shadow-2xl"
        >
          ADD TO CART
        </button>
        <button
          class="flex items-center justify-center uppercase bg-black p-3 rounded-full w-12 text-white font-light hover:font-bold hover:drop-shadow-2xl"
        >
          <heart />
        </button>
      </div>
      <div class="delimiter overflow-hidden w-auto text-secondary">
        //////////////////////////////////////////////////////////////////////////////////////////////
      </div>
      <div class="">
        <div class="uppercase">
          <span class="font-bold mr-2">SKU :</span>{{ product.sku }}
        </div>
        <div class="">
          <span class="font-bold mr-2">Category :</span>{{ product.category }}
        </div>
        <div class="">
          <span class="font-bold mr-2">Tags :</span>{{ product.tag }}
        </div>
      </div>
    </div>
  </div>

  <div
    v-if="product"
    class="w-content mx-auto my-10 flex flex-col gap-10 py-10"
  >
    <div class="mt-20 w-full flex justify-center">
      <div
        class="flex uppercase text-xl font-light border-b w-full justify-center gap-10 md:gap-20"
      >
        <div class="text-primary">Description</div>
        <div class="">Additional Info</div>
        <div class="">Reviews</div>
      </div>
    </div>
    <div class="g">{{ product["long-description"] }}</div>
  </div>

  <Brands />
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import productData from "./../assets/data/products.json";
import Brands from "../components/Brands.vue";
import heart from "../components/icons/heart.vue";

const route = useRoute();
const product = ref(null);

onMounted(() => {
  const productId = route.params.id;
  product.value = productData.find((p) => p.id == productId);
});

const addToCart = () => {
  // Retrieve existing cart items from local storage or initialize an empty array
  const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

  // Add the current product to the cart items array
  cartItems.push({
    image: product.value.image,
    name: product.value.Name,
    price: product.value.price,
    amount: 1, // You can adjust this as needed
  });

  // Store the updated cart items array in local storage
  localStorage.setItem("cartItems", JSON.stringify(cartItems));

  // Optionally, you can provide feedback to the user that the product was added to the cart
  alert("Product added to cart!");
};
</script>
