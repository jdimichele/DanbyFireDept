<template>
  <div>
    <!-- <router-view name="volunteerRouter"></router-view> -->
    <volunteer-roles></volunteer-roles>
  </div>
</template>

<script>
import VolunteerRoles from "@/components/subpages/VolunteerRoles.vue";

export default {
  components: {
    VolunteerRoles,
  },
};
</script>
