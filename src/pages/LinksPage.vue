<template>
  <div>
    <div class="pt-5 flex-grow border-b-2 border-danby-red">
      <h1 class="font-bold text-center">Links</h1>
    </div>
    <p>
      This page is a directory of other emergency services organizations. For important public
      safety information to help protect your family, see our
      <router-link to="/safety" class="underline hover:underline hover:text-blue-700"
        >Safety Information</router-link
      >
      page.
    </p>
    <br />
    <all-links />
  </div>
</template>

<script>
import AllLinks from '@/components/interactive/AllLinks.vue'

export default {
  name: 'AllLinksView',
  components: {
    AllLinks
  }
}
</script>
