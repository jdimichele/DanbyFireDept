<template>
  <header
    class="text-xl sm:text-xl pt-12 md:pt-12 flex md:flex justify-center md:justify-center items-center md:items-center text-white"
  >
    <router-link to="/"
      ><img
        class="order-1 sm:h-40"
        :src="'../assets/danbybadge.png'"
        alt="Image of the Danby Volunteer Fire Company badge."
    /></router-link>
    <div class="titles">
      <div class="text-4xl pl-5 md:order-2 order-2 text-center">
        Danby Volunteer Fire Company
      </div>
      <div class="text-3xl text-center order-3 content-end p-3">
        Danby, NY • Organized 1946
      </div>
    </div>
  </header>

  <NavBar></NavBar>
</template>

<script>
import NavBar from "./NavBar.vue";

export default {
  components: {
    NavBar,
  },
};
</script>
