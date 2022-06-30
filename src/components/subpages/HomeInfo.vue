<template>
  <div>
    <!-- News/Blog page that will need more integration in the future. -->
    <h1 class="font-bold flex-grow border-b-2 ml-5 mr-10 border-danby-red pt-6">
      {{ msg }}
    </h1>
    <div class="grid grid-cols-1 sm:grid-cols-2 grid-rows-1 h-full">
      <div class="col-span-1 row-span-1 order-1">
        <!-- Example panel of blog posts -->
        <div class="indent-8 pt-5 pb-2 px-5">
          <ul class="list-disc list-inside">
            <li class="p-5">
              We are an all-volunteer fire company and are perpetually
              shorthanded for a variety of tasks, including both emergency
              response and non-emergency duties. If you may have the time and
              interest to volunteer, please see our new
              <router-link
                to="/volunteer"
                class="underline hover:underline hover:text-blue-700"
                >Volunteer Information</router-link
              >
              page for more details.
            </li>
            <li class="p-5">
              Although we do our best to respond promptly when called, we cannot
              be there instantaneously, and the greatest factor in a good
              outcome to an emergency is when the citizens who are on the scene
              when it happens know what to do and are prepared. It's even better
              when the emergency can be prevented from ever happening in the
              first place. Please see our
              <router-link
                to="/safety"
                class="underline hover:underline hover:text-blue-700"
                >Safety Information</router-link
              >
              page.
            </li>
          </ul>
        </div>
      </div>
      <div class="col-span-1 row-span-1 order-2">
        <div class="flex justify-center items-center content-center">
          <iframe
            class="p-6"
            src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FDanbyVolunteerFireCompany%2F&tabs=timeline%2C%20events%2C&width=500&height=500&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
            style="border: none; overflow: hidden"
            width="550"
            height="500"
            scrolling="no"
            frameborder="0"
            tabs="timeline,events"
            allowfullscreen="true"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          ></iframe>
        </div>
      </div>
    </div>
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
