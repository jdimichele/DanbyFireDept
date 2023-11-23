<template>
  <div class="grid grid-cols-2 grid-rows-2">
    <div class="">
      <h2>Current Blogs:</h2>
    </div>

    <div>
      <router-link to="/new-post">Post New Blog</router-link>
    </div>
    <div>Upload New Photos</div>
    <div class="indicator">
      <span
        class="indicator-item badge bg-danby-red"
        v-if="newAppNotification"
        ><h2 class="text-white font-bold">!</h2></span
      >
      <button @click="viewApplications">Applications</button>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    newAppNotification() {
      return this.$store.state.newApplicationNotifications;
    },
  },
  methods: {
    viewApplications() {
      this.$store.dispatch("markNotificationsAsViewed");
      this.$router.push("");
    },
    async checkForNewApplications() {
      await this.$store.dispatch("checkForApplications");
    },
  },
  created() {
    this.checkForNewApplications();
  },
};
</script>
