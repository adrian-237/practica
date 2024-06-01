<template>
  <div
    class="banner font-body bg-background2 h-4/5 w-screen z-0 -mt-14 py-24 md:flex-row max-sm:flex-col text-5xl font-thin flex-col"
  >
    <div class="flex flex-col justify-center items-center gap-5">
      <div class="uppercase">{{ $t("Checkout.banner") }}</div>
      <div class="text-lg font-light">{{ $t("About.banner") }}</div>
    </div>
  </div>

  <div class="container mx-auto my-10 flex flex-col gap-10 py-10">
    <div class="flex flex-col md:flex-row gap-10">
      <div class="details md:w-1/2">
        <div class="title uppercase text-xl">
          {{ $t("Checkout.detailsTitle") }}
        </div>
        <form>
          <!-- Form fields -->
          <div class="mb-4 flex flex-col">
            <label for="first-name" class="block text-gray-700"
              >First name *</label
            >
            <input
              type="text"
              id="first-name"
              class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="First name"
            />
          </div>
          <div class="mb-4 flex flex-col">
            <label for="last-name" class="block text-gray-700"
              >Last name *</label
            >
            <input
              type="text"
              id="last-name"
              class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Last name"
            />
          </div>
          <div class="mb-4 flex flex-col">
            <label for="company-name" class="block text-gray-700"
              >Company name (optional)</label
            >
            <input
              type="text"
              id="company-name"
              class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Company name"
            />
          </div>
          <div class="mb-4 flex flex-col">
            <label for="country" class="block text-gray-700"
              >Country / Region *</label
            >
            <input
              type="text"
              id="country"
              class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
              value="United States (US)"
              readonly
            />
          </div>
          <div class="mb-4 flex flex-col">
            <label for="street-address" class="block text-gray-700"
              >Street address *</label
            >
            <input
              type="text"
              id="street-address"
              class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="House number and street name"
            />
            <input
              type="text"
              id="street-address-2"
              class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Apartments, suite, etc."
            />
          </div>
          <div class="mb-4 flex flex-col">
            <label for="city" class="block text-gray-700">Town / City *</label>
            <input
              type="text"
              id="city"
              class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Town / City"
            />
          </div>
          <div class="mb-4 flex flex-col">
            <label for="state" class="block text-gray-700">State *</label>
            <input
              type="text"
              id="state"
              class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
              value="Florida"
              readonly
            />
          </div>
          <div class="mb-4 flex flex-col">
            <label for="zip" class="block text-gray-700">ZIP Code *</label>
            <input
              type="text"
              id="zip"
              class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="ZIP Code"
            />
          </div>
          <div class="mb-4 flex flex-col">
            <label for="phone" class="block text-gray-700">Phone *</label>
            <input
              type="tel"
              id="phone"
              class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Phone"
            />
          </div>
          <div class="mb-4 flex flex-col">
            <label for="email" class="block text-gray-700"
              >Email address *</label
            >
            <input
              type="email"
              id="email"
              class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Email address"
            />
          </div>
        </form>
      </div>

      <div class="aditional md:w-1/2">
        <h2 class="uppercase text-xl">Additional Information</h2>
        <form>
          <div class="mb-4 flex flex-col">
            <label for="order-notes" class="block text-gray-700"
              >Order notes (optional)</label
            >
            <textarea
              id="order-notes"
              rows="4"
              class="mt-1 block w-full h-32 px-3 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Notes about your order, like special notes for delivery."
            ></textarea>
          </div>

          <div class="mb-4 flex items-center border p-5 rounded-md">
            <label for="coupon" class="block text-gray-700 mr-3"
              >Have a coupon?</label
            >
            <input
              v-model="couponCode"
              type="text"
              id="coupon"
              class="flex-grow px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary w-full max-w-sm"
              placeholder="Add coupon"
            />

            <button
              type="button"
              @click="applyCoupon"
              class="ml-3 px-4 py-2 bg-primary text-white rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-primary"
            >
              Apply
            </button>
          </div>
        </form>
      </div>
    </div>

    <div class="totals divide-y divide-black-20">
      <div class="uppercase text-xl font-light">Cart totals</div>

      <div class="uppercase font-light text-lg flex justify-between md:w-1/2">
        <div class="">Subtotal</div>
        <div class="sum text-primary font-bold">${{ subtotal }}</div>
      </div>
      <div
        v-if="couponApplied"
        class="uppercase font-light text-lg flex justify-between md:w-1/2"
      >
        <div class="">Discount 15%</div>
        <div class="sum text-primary font-bold">${{ discount15 }}</div>
      </div>
      <div
        v-if="couponApplied"
        class="uppercase font-light text-lg flex justify-between md:w-1/2"
      >
        <div class="">Discount 30%</div>
        <div class="sum text-primary font-bold">${{ discount30 }}</div>
      </div>
      <div class="uppercase font-light text-lg flex justify-between md:w-1/2">
        <div class="">Total</div>
        <div class="sum text-primary font-bold">${{ total }}</div>
      </div>
    </div>

    <div class="flex flex-col w-1/2">
      <div class="flex flex-col w-1/2">
        <div class="flex gap-3">
          <input
            type="radio"
            name="radio"
            id="direct_transfer_1"
            value="Direct bank transfer"
          />
          <label for="direct_transfer_1">Direct bank transfer</label>
        </div>
        <div class="flex gap-3">
          <input type="radio" name="radio" id="direct_transfer_1" />
          <label for="direct_transfer_1">Check Payments</label>
        </div>
        <div class="flex gap-3">
          <input
            type="radio"
            name="radio"
            id="direct_transfer_1"
            value="Direct bank transfer"
          />
          <label for="direct_transfer_1">Cash on delivery</label>
        </div>
        <div class="flex gap-3">
          <input
            type="radio"
            name="radio"
            id="direct_transfer_1"
            value="Direct bank transfer"
          />
          <label for="direct_transfer_1">PayPal</label>
        </div>
      </div>
    </div>
    <button
      class="text-white bg-primary w-64 h-12 rounded-full flex justify-center items-center -ml-11 hover:font-bold hover:drop-shadow-lg"
    >
      Pay
    </button>
  </div>
  <brands />
</template>

<script setup>
import { ref, computed } from "vue";
import Brands from "../components/Brands.vue";

const subtotal = ref(0);
const discount15 = ref(0);
const discount30 = ref(0);
const couponApplied = ref(false);
const couponCode = ref("");

subtotal.value = 1000;

const calculateDiscounts = () => {
  discount15.value = (subtotal.value * 0.15).toFixed(2);
  discount30.value = (subtotal.value * 0.3).toFixed(2);
};

const applyCoupon = () => {
  if (couponCode.value === "ceiti") {
    couponApplied.value = true;
    calculateDiscounts();
  } else if (couponCode.value === "Adrian") {
    couponApplied.value = true;
    discount15.value = 0;
    calculateDiscounts();
  } else {
    couponApplied.value = false;
    discount15.value = 0;
    discount30.value = 0;
  }
};

const total = computed(() => {
  if (couponApplied.value) {
    return (subtotal.value - discount15.value).toFixed(2);
  } else {
    return subtotal.value.toFixed(2);
  }
});
</script>

<style scoped></style>
