<template>
  <div
    class="banner font-body bg-background2 h-4/5 w-screen z-0 -mt-14 py-24 md:flex-row max-sm:flex-col text-5xl font-thin flex-col"
  >
    <div class="flex flex-col justify-center items-center gap-5">
      <div class="uppercase">{{ $t("Contact.banner") }}</div>
      <div class="text-lg font-light">
        Home > <span class="underline">Shop</span>
      </div>
    </div>
  </div>

  <div class="container mx-auto my-10 flex flex-col gap-10 py-10">
    <div class="min-w-sm max-w-md flex items-center my-0 mx-auto">
      <input
        v-model="searchQuery"
        type="text"
        placeholder="Search"
        class="border w-64 h-12 rounded-md p-5"
      />
      <button
        class="text-white bg-primary w-10 h-10 rounded-md flex justify-center items-center -ml-11"
      >
        <magnifier />
      </button>
      <button
        id="toggleFiltersBtn"
        class="block md:hidden"
        @click="toggleFilters()"
      >
        <filterr class="w-10 h-10" />
      </button>
    </div>
    <div class="flex gap-16">
      <div class="text-secondary font-light">Showing 1-9 of 55 products</div>
      <select
        name="Sort"
        id="sortSelect"
        class="bg-transparent text-secondary"
        v-model="selectedSortOption"
      >
        <option value="Default">Default</option>
        <option value="Ascendent">Ascendent by price</option>
        <option value="Descendent">Descendent by price</option>
      </select>
    </div>

    <div class="content flex flex-col md:flex-row-reverse">
      <div
        class="filters md:w-twenty w-full flex-col gap-5 hidden mb-5 md:block"
        id="filtersContainer"
      >
        <div class="filter">
          <div
            class="title flex-col items-center justify-center w-full overflow-hidden"
          >
            <div class="text-xl md:text-xl uppercase font-light">
              {{ $t("Shop.filter1") }}
            </div>
            <div
              class="bg-slashes w-full h-10 flex items-center text-xl text-secondary font-light -mr-24 md:-mr-28"
            >
              ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
            </div>
          </div>
          <div class="flex flex-col gap-2 font-light">
            <label for="all">
              <input type="checkbox" id="all" value="all" class="hidden" /> All
            </label>
            <label for="microwave">
              <input
                type="checkbox"
                id="microwave"
                value="Microwave"
                class="hidden"
              />
              Microwave Oven
            </label>
            <label for="kettle">
              <input
                type="checkbox"
                id="kettle"
                value="Kettle"
                class="hidden"
              />
              Kettle
            </label>
            <label for="toaster">
              <input
                type="checkbox"
                id="toaster"
                value="Toaster"
                class="hidden"
              />
              Toaster
            </label>
            <label for="food">
              <input
                type="checkbox"
                id="food"
                value="foodprocessor"
                class="hidden"
              />
              Food processor
            </label>
            <label for="coffeemaker">
              <input
                type="checkbox"
                id="coffeemaker"
                value="coffeemaker"
                class="hidden"
              />
              Coffeemaker
            </label>
          </div>
        </div>
        <div class="filter">
          <div
            class="flex-col items-center justify-center w-full overflow-hidden"
          >
            <div class="text-xl md:text-xl uppercase font-light">
              {{ $t("Shop.filter2") }}
            </div>
            <div
              class="bg-slashes w-full h-10 flex items-center text-xl text-secondary font-light -mr-24 md:-mr-28"
            >
              ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
            </div>
          </div>
          <div class="flex flex-col gap-2 font-light">
            <label for="vitek">
              <input type="checkbox" id="vitek" class="hidden" /> Vitek
            </label>
            <label for="samsung">
              <input type="checkbox" id="samsung" class="hidden" /> Samsung
            </label>
            <label for="scarlett">
              <input type="checkbox" id="scarlett" class="hidden" /> Scarlett
            </label>
            <label for="bosch">
              <input type="checkbox" id="bosch" class="hidden" /> Bosch
            </label>
            <label for="tefal">
              <input type="checkbox" id="tefal" class="hidden" /> Tefal
            </label>
          </div>
        </div>
        <div class="filter">
          <div
            class="title flex-col items-center justify-center w-full overflow-hidden"
          >
            <div class="text-xl md:text-xl uppercase font-light">
              {{ $t("Shop.filter3") }}
            </div>
            <div
              class="bg-slashes w-full h-10 flex items-center text-xl text-secondary font-light -mr-24 md:-mr-28"
            >
              ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
            </div>
          </div>
          <div class="flex flex-col gap-2 font-light">
            <label for="price-0-100">
              <input type="checkbox" id="price-0-100" class="hidden" /> 0-100
            </label>
            <label for="price-100-200">
              <input type="checkbox" id="price-100-200" class="hidden" />
              100-200
            </label>
            <label for="price-300-400">
              <input type="checkbox" id="price-300-400" class="hidden" />
              300-400
            </label>
            <label for="price-500-1000">
              <input type="checkbox" id="price-500-1000" class="hidden" />
              500-1000
            </label>
          </div>
        </div>
      </div>
      <div
        class="cards w-full md:w-content h-auto flex flex-wrap gap-5 justify-center"
      >
        <template
          v-for="product in sortedAndFilteredProducts"
          :key="product.id"
        >
          <router-link
            :to="{ name: 'product', params: { id: product.id } }"
            class="card-link"
          >
            <div
              class="card w-56 h-72 border border-secondary rounded-lg flex flex-col items-center justify-center"
            >
              <img
                :src="'/Product-Img' + product.image"
                class="w-content h-48"
              />
              <div class="titl">{{ product.Name }}</div>
              <div class="text-primary">${{ product.price }}</div>
            </div>
          </router-link>
        </template>
      </div>
    </div>
  </div>
  <brands />
</template>

<script setup>
import { ref, computed } from "vue";
import productData from "./../assets/data/products.json";

const products = ref(productData);

const selectedSortOption = ref("Default");
const searchQuery = ref("");

import magnifier from "./../components/icons/magnifier.vue";
import filterr from "./../components/icons/filter.vue";

const sortedAndFilteredProducts = computed(() => {
  let sortedArray = [...products.value];

  if (selectedSortOption.value === "Ascendent") {
    sortedArray.sort((a, b) => a.price - b.price);
  } else if (selectedSortOption.value === "Descendent") {
    sortedArray.sort((a, b) => b.price - a.price);
  } else if (selectedSortOption.value === "Default") {
    sortedArray.sort((a, b) => a.id - b.id);
  }

  const query = searchQuery.value.toLowerCase();
  return sortedArray.filter((product) =>
    product.Name.toLowerCase().includes(query)
  );
});

function toggleFilters() {
  console.log("Button clicked");
  const filtersContainer = document.getElementById("filtersContainer");
  if (filtersContainer.classList.contains("hidden")) {
    filtersContainer.classList.remove("hidden");
  } else {
    filtersContainer.classList.add("hidden");
  }
}

import Brands from "../components/Brands.vue";
</script>

<style>
.card-link {
  text-decoration: none;
  color: inherit;
}
</style>
