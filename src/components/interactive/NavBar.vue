<template>
  <div class="mNavBar text-danby-yellow font-bold text-center p-7">
    <div class="flex-none">
      <div class="menu menu-horizontal p-0">
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
          @click="isOpen = !isOpen"
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
          <div v-if="isOpen || volunteerHover" class="absolute p-8 block backdrop-blur-2xl rounded-md">
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
          <router-link to="/training">Training</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
      volunteerHover: false,
    };
  },
};
</script>
