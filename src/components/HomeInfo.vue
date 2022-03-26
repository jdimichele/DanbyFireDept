<template>
  <div class="componentCard">
    <!-- News/Blog page that will need more integration in the future. -->
    <h1 class="underline text-center">{{ msg }}</h1>
    <p class="py-5">
      Welcome to the Danby Volunteer Fire Company's new website. We are planning
      to add more content over time, such as more information about our
      equipment. For the time being, we would like to direct your attention to
      two important sections of this website:
    </p>
    <ui>
      <li class="p-5">
        We are an all-volunteer fire company and are perpetually shorthanded for
        a variety of tasks, including both emergency response and non-emergency
        duties. If you may have the time and interest to volunteer, please see
        our new <router-link to="/volunteer">Volunteer Information</router-link> page for more
        details.
      </li>
      <li class="p-5">
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
  name: "home-info",
  props: {
    msg: String,
  },
};
</script>
