<template>
  <div class="headerContainer">
    <router-link to="/"
      ><img
        class="bannerImg"
        :src="'../assets/danbybadge.png'"
        alt="Image of the Danby Volunteer Fire Company badge."
    /></router-link>
    <div class="titles">
    <div class="maintitle">Danby Volunteer Fire Company</div>
    <div class="subtitle">Danby, NY • Organized 1946</div>
    </div>
  </div>
  <nav>
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
  <footer>© DVFC 2022</footer>
</template>

<style>
#app {
  font-family: "Scheherazade New";
  font-size: 22px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

nav {
  padding: 30px;
  text-align: center;
}

nav a {
  font-weight: bold;
  color: #ffffff;
}

nav a.router-link-exact-active {
  color: #cd9b3c;
}

footer {
  text-align: center;
  color: #cd9b3c;
}

.headerContainer {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 60px;
  color: white;
  font-size: 20px;
}
.bannerImg {
  max-height: 150px;
}
.maintitle {
  padding-left: 20px;
  font-size: 40px;
}
.subtitle {
  padding-left: 20px;
  font-size: 30px;
  vertical-align: bottom;
  text-align: center;
}
</style>
