<template>
  <BaseHeader v-if="!navDisabled" />
  <BaseLayoutCard>
    <router-view></router-view>
  </BaseLayoutCard>
  <BaseFooter v-if="!navDisabled" />
</template>

<script>
import BaseLayoutCard from "./components/ui/BaseLayoutCard.vue";
import BaseHeader from "./components/ui/BaseHeader.vue";
import BaseFooter from "./components/ui/BaseFooter.vue";
// import firebase from "firebase/app";
// import "firebase/auth";
export default {
  components: {
    BaseLayoutCard,
    BaseHeader,
    BaseFooter,
  },

  data() {
    return {
      navDisabled: null,
    };
  },
  created() {
    // firebase.auth().onAuthStateChanged((user) => {
    //   if (user) {
    //     this.$store.dispatch("getCurrentUser", user);
    //   }
    // });
    this.checkRoute();
  },
  methods: {
    checkRoute() {
      if (this.$route.name === "admin") {
        this.navDisabled = true;
        return;
      }
      this.navDisabled = false;
    },
  },
  watch: {
    $route() {
      this.checkRoute();
    },
  },
};
</script>
