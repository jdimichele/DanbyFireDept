<template>
  <div>
    <!-- News/Blog page that will need more integration in the future. -->
    <h1 class="underline text-center p-2">{{ msg }}</h1>
    <div class="flex items-center justify-center">
      <iframe
        class="w-3/4 h-96"
        src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FDanbyVolunteerFireCompany%2F&tabs=timeline%2C%20events%2C&width=500&height=500&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
        scrolling="no"
        frameborder="0"
        tabs="timeline, events"
        allowfullscreen="true"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
      ></iframe>
    </div>
    <ul class="list-disc list-inside">
      <li class="p-5">
        We are an all-volunteer fire company and are perpetually shorthanded for
        a variety of tasks, including both emergency response and non-emergency
        duties. If you may have the time and interest to volunteer, please see
        our new
        <router-link
          to="/volunteer"
          class="underline hover:underline hover:text-blue-700"
          >Volunteer Information</router-link
        >
        page for more details.
      </li>
      <li class="p-5">
        Although we do our best to respond promptly when called, we cannot be
        there instantaneously, and the greatest factor in a good outcome to an
        emergency is when the citizens who are on the scene when it happens know
        what to do and are prepared. It's even better when the emergency can be
        prevented from ever happening in the first place. Please see our
        <router-link
          to="/safety"
          class="underline hover:underline hover:text-blue-700"
          >Safety Information</router-link
        >
        page.
      </li>
    </ul>
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
