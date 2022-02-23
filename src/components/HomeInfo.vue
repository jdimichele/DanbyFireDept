<template>
  <div class="home-info">
    <h1>{{ msg }}</h1>
    <p>
      Welcome to the Danby Volunteer Fire Company's new website. We are planning
      to add more content over time, such as more information about our
      equipment. For the time being, we would like to direct your attention to
      two important sections of this website:
    </p>
    <ui>
      <li>
        We are an all-volunteer fire company and are perpetually shorthanded for
        a variety of tasks, including both emergency response and non-emergency
        duties. If you may have the time and interest to volunteer, please see
        our new <router-link to="/volunteer"> Volunteer Information</router-link> page for more
        details.
      </li>
      <li>
        Although we do our best to respond promptly when called, we cannot be
        there instantaneously, and the greatest factor in a good outcome to an
        emergency is when the citizens who are on the scene when it happens know
        what to do and are prepared. It's even better when the emergency can be
        prevented from ever happening in the first place. Please see our <router-link to="/safety">Safety
        Information</router-link> page.
      </li>
    </ui>
  </div>
</template>

<script>
export default {
  name: "HomeInfo",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
