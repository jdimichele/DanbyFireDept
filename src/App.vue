<template>
  <BaseLayoutCard>
    <router-view></router-view>
  </BaseLayoutCard>
</template>

<script>
import BaseLayoutCard from "./components/ui/BaseLayoutCard.vue";
export default {
  components: {
    BaseLayoutCard,
  },
};
</script>

<style>
nav a.router-link-exact-active {
  color: #cd9a3c;
}
</style>
