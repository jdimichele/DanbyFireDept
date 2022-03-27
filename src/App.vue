<template>
  <div
    class="headerContainer text-xl sm:text-xl pt-12 md:pt-12 flex md:flex justify-center md:justify-center items-center md:items-center text-white"
  >
    <router-link to="/"
      ><img
        class="bannerImg order-1 sm:h-40"
        :src="'../assets/danbybadge.png'"
        alt="Image of the Danby Volunteer Fire Company badge."
    /></router-link>
    <div class="titles">
      <div class="maintitle text-4xl pl-5 md:order-2 order-2">
        Danby Volunteer Fire Company
      </div>
      <div class="subtitle text-3xl text-center order-3 content-end p-3">
        Danby, NY • Organized 1946
      </div>
    </div>
  </div>
  <nav class="text-danby-yellow font-bold text-center p-7">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About Us</router-link> |
    <router-link to="/safety">Safety Information</router-link> |
    <router-link to="/volunteer">Volunteer</router-link> |
    <router-link to="/links">Links</router-link> |
    <router-link to="/contact">Contact Us</router-link> |
    <router-link to="/training">Training</router-link>
  </nav>
  <router-view />
  <br />
  <footer class="text-danby-yellow text-center">© DVFC 2022</footer>
</template>

<style>
nav a.router-link-exact-active {
  color: #cd9a3c;
}
</style>
