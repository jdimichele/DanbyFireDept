<template>
  <div class="mNavBar text-danby-yellow font-bold text-center p-7">
    <div class="flex-none">
      <div v-show="!mobile" class="menu md:menu-horizontal p-0">
        <div class="px-1"><router-link to="/">Home</router-link></div>
        |
        <div class="px-1">
          <router-link to="/about">About Us</router-link>
        </div>
        |
        <div class="px-1">
          <router-link to="/safety">Safety Information</router-link>
        </div>
        |
        <div
          class="px-1"
          @mouseover="volunteerHover = true"
          @mouseleave="volunteerHover = false"
        >
          <router-link to="/volunteer" class="flex items-center justify-center"
            >Volunteer
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="fill-current w-5 h-5"
            >
              <path
                d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"
              />
            </svg>
          </router-link>
          <div
            v-if="volunteerHover"
            class="absolute z-10 p-8 block backdrop-blur-3xl rounded-md"
          >
            <span>
              <div
                class="transition duration-300 ease-in-out transform hover:-translate-y-1"
              >
                <router-link
                  to="/volunteer/roles"
                  class="hover:text-danby-yellow"
                  >Roles</router-link
                >
              </div>
              <div
                class="transition duration-300 ease-in-out transform hover:-translate-y-1"
              >
                <router-link
                  to="/volunteer/join"
                  class="hover:text-danby-yellow"
                  >Join</router-link
                >
              </div>
            </span>
          </div>
        </div>
        |
        <div class="px-1">
          <router-link to="/links">Links</router-link>
        </div>
        |
        <div class="px-1">
          <router-link to="/contact">Contact Us</router-link>
        </div>
        |
        <div class="px-1">
          <router-link to="/calendar">Calendar</router-link>
        </div>
      </div>
    </div>
  </div>
  <!-- Mobile Navigation -->
  <div
    class="flex flex-row-reverse p-3 transition-all ease-in-out duration-500 w-11/12 m-auto max-w-6xl relative"
  >
    <div class="flex top-10 h-full">
      <i
        @click="toggleMobileNav"
        v-show="mobile"
        :class="{ mobileNav }"
        class="cursor-pointer transition-all ease-in-out duration-700 active:transform active:rotate-180"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 16 16"
          class="fill-danby-yellow h-9 w-9"
        >
          <path
            d="M2 3h12a1 1 0 0 1 0 2H2a1 1 0 1 1 0-2zm0 4h12a1 1 0 0 1 0 2H2a1 1 0 1 1 0-2zm0 4h12a1 1 0 0 1 0 2H2a1 1 0 0 1 0-2z"
            id="a"
          />
        </svg>
      </i>
    </div>
    <transition name="mobile-nav">
      <ul
        v-show="mobileNav"
        class="flex flex-col fixed w-full max-w-xs h-full bg-white top-0 left-0 font-bold list-none no-underline z-50"
      >
        <li class="uppercase p-4 ml-6">
          <router-link
            to="/"
            class="hover:text-danby-yellow text-sm transition-all duration-500 ease-in-out pb-1 bottom-1 border-solid border-transparent text-black"
            >Home</router-link
          >
        </li>
        <li class="uppercase p-4 ml-6">
          <router-link
            to="/about"
            class="hover:text-danby-yellow text-sm transition-all duration-500 ease-in-out pb-1 bottom-1 border-solid border-transparent text-black"
            >About Us</router-link
          >
        </li>
        <li class="uppercase p-4 ml-6">
          <router-link
            to="/safety"
            class="hover:text-danby-yellow text-sm transition-all duration-500 ease-in-out pb-1 bottom-1 border-solid border-transparent text-black"
            >Safety Information</router-link
          >
        </li>
        <li @click="isOpen = !isOpen" class="uppercase p-4 ml-6">
          <router-link
            to="/volunteer"
            class="hover:text-danby-yellow flex flex-row text-sm transition-all duration-500 ease-in-out pb-1 bottom-1 border-solid border-transparent text-black"
            >Volunteer
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="fill-current w-5 h-5"
            >
              <path
                d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"
              />
            </svg>
          </router-link>
        </li>
        <li v-if="isOpen">
          <div>
            <li class="uppercase p-4 ml-12">
              <router-link
                to="/volunteer/roles"
                class="hover:text-danby-yellow items-center text-sm transition-all duration-500 ease-in-out pb-1 bottom-1 border-solid border-transparent text-black"
                >Roles</router-link
              >
            </li>
            <li class="uppercase p-4 ml-12">
              <router-link
                to="/volunteer/join"
                class="hover:text-danby-yellow items-center text-sm transition-all duration-500 ease-in-out pb-1 bottom-1 border-solid border-transparent text-black"
                >Join</router-link
              >
            </li>
          </div>
        </li>
        <li class="uppercase p-4 ml-6">
          <router-link
            to="/links"
            class="hover:text-danby-yellow text-sm transition-all duration-500 ease-in-out pb-1 bottom-1 border-solid border-transparent text-black"
            >Links</router-link
          >
        </li>
        <li class="uppercase p-4 ml-6">
          <router-link
            to="/contact"
            class="hover:text-danby-yellow text-sm transition-all duration-500 ease-in-out pb-1 bottom-1 border-solid border-transparent text-black"
            >Contact Us</router-link
          >
        </li>
        <li class="uppercase p-4 ml-6">
          <router-link
            to="/calendar"
            class="hover:text-danby-yellow text-sm transition-all duration-500 ease-in-out pb-1 bottom-1 border-solid border-transparent text-black"
            >Calendar</router-link
          >
        </li>
      </ul>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
      volunteerHover: false,
      mobile: null,
      mobileNav: null,
      windowWidth: null,
    };
  },
  created() {
    window.addEventListener("resize", this.checkScreen);
    this.checkScreen();
  },
  watch: {
    $route() {
      this.mobileNav = false;
    },
  },
  methods: {
    toggleMobileNav() {
      this.mobileNav = !this.mobileNav;
    },

    checkScreen() {
      this.windowWidth = window.innerWidth;
      if (this.windowWidth <= 816) {
        this.mobile = true;
        return;
      }
      this.mobile = false;
      this.mobileNav = false;
      return;
    },
  },
};
</script>

