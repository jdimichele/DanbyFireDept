<template>
  <div>
    <h1>Links</h1>
    <p>
      This page is a directory of other emergency services organizations. For
      important public safety information to help protect your family, see our
      <router-link to="/safety">Safety Information</router-link> page.
    </p>
    <br />
  <all-links></all-links>
  </div>
</template>

<script>
import AllLinks from "@/components/AllLinks.vue";

export default {
  name: "AllLinksView",
  components: {
    AllLinks,
  },
};
</script>

<style>
  h1 {
   text-align: center; 
  }
</style>
