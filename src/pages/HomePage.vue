<template>
  <div class="home">
    <HomeInfo msg="News"/>
  </div>
</template>

<script>
import HomeInfo from '@/components/subpages/HomeInfo.vue'

export default {
  name: 'HomeView',
  components: {
    HomeInfo
  }
}
</script>
