<template>
  <nav>
    <router-link to="/"><img src="src\assets\danbybadge.jpg"></router-link>
    <br>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About Us</router-link> |
    <router-link to="/safety">Safety Information</router-link> |
    <router-link to="/volunteer">Volunteer</router-link> |
    <router-link to="/links">Links</router-link> |
    <router-link to="/contact">Contact Us</router-link> |
    <router-link to="/training">Training</router-link>
  </nav>
  <router-view />
</template>

<style>
#app {
  font-family: "Scheherazade New";
  font-size: 22px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
