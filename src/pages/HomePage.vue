<template>
  <div class="home">
    <HomeInfo msg="News"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeInfo from '@/components/HomeInfo.vue'

export default {
  name: 'HomeView',
  components: {
    HomeInfo
  }
}
</script>
