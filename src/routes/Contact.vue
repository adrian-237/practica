<script setup>
import Brands from "../components/Brands.vue";

Brands;
</script>

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
    <div class="div flex flex-col gap-5 md:flex-row">
      <div class="info flex flex-col gap-5 w-full md:w-1/2">
        <div class="p1 flex flex-col gap-2">
          <div class="title uppercase text-xl">Contact info</div>
          <div class="p">
            Tortor dignissim convallis aenean et tortor at risus viverra
            adipiscing.
          </div>
        </div>
        <div class="p2 flex gap-2">
          <div class="w-1/2 flex flex-col gap-2">
            <div class="title uppercase text-xl">Office</div>
            <div class="street">730 Glenstone Ave 65802, Springfield, US</div>
            <div class="number">+123 222 333 44</div>
            <div class="email">info@yourinfo.com</div>
          </div>
          <div class="w-1/2 flex flex-col gap-2">
            <div class="title uppercase text-xl">Office</div>
            <div class="street">730 Glenstone Ave 65802, Springfield, US</div>
            <div class="number">+123 222 333 44</div>
            <div class="email">info@yourinfo.com</div>
          </div>
        </div>
      </div>

      <div class="question flex flex-col">
        <div class="title uppercase text-xl">Any questions?</div>
        <div class="text">Use the form below to get in touch with us.</div>
        <div class="max-w-md mx-auto mt-5 bg-white">
          <form>
            <div class="flex gap-2">
              <div class="mb-4">
                <input
                  type="text"
                  id="full-name"
                  class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  placeholder="Your full name*"
                  required
                />
              </div>
              <div class="mb-4">
                <input
                  type="email"
                  id="email"
                  class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  placeholder="Write your email here*"
                  required
                />
              </div>
            </div>
            <div class="mb-4">
              <input
                type="tel"
                id="phone"
                class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                placeholder="Phone number"
              />
            </div>
            <div class="mb-4">
              <input
                type="text"
                id="subject"
                class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                placeholder="Write your subject here"
              />
            </div>
            <div class="mb-4">
              <textarea
                id="message"
                rows="4"
                class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                placeholder="Write your message here*"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                class="bg-primary h-button w-52 flex justify-center items-center text-white rounded-full uppercase text-base font-light hover:font-bold hover:border hover:border-solid hover:border-primary hover:bg-transparent hover:text-primary focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 max-sm:my-0 max-sm:mx-auto"
              >
                SUBMIT
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>

    <div class="flex flex-col md:flex-row items-center gap-5">
      <img
        src="./../assets/Images/Contact/image.jpg"
        class="w-content md:w-2/3 object-cover rounded-lg"
      />
      <div class="info flex flex-col gap-5 w-full md:w-1/2">
        <div class="p1 flex flex-col gap-2">
          <div class="title uppercase text-xl">Contact info</div>
          <div class="p">
            Tortor dignissim convallis aenean et tortor at risus viverra
            adipiscing.
          </div>
        </div>
        <div class="p2 flex gap-2">
          <div class="w-1/2 flex flex-col gap-2">
            <div class="title uppercase text-xl">Office</div>
            <div class="street">730 Glenstone Ave 65802, Springfield, US</div>
            <div class="number">+123 222 333 44</div>
            <div class="email">info@yourinfo.com</div>
          </div>
          <div class="w-1/2 flex flex-col gap-2">
            <div class="title uppercase text-xl">Office</div>
            <div class="street">730 Glenstone Ave 65802, Springfield, US</div>
            <div class="number">+123 222 333 44</div>
            <div class="email">info@yourinfo.com</div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <Brands />
</template>
