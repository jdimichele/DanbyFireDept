<template>
  <p>
    If you're interested in volunteering and joining our fire company, please
    fill out the form below:
  </p>
  <form @submit.prevent="submitApplication">
    <div>
      <label for="first-name">First Name:</label>
      <input
        type="text"
        id="first-name"
        name="first-name"
        v-model.trim="firstName"
        required
      />
    </div>
    <div>
      <label for="last-name">Last Name:</label>
      <input
        type="text"
        id="last-name"
        name="last-name"
        v-model.trim="lastName"
        required
      />
    </div>
    <div>
      <label for="email-address">Email:</label>
      <input
        type="email"
        id="email-address"
        name="email-address"
        v-model="emailAddress"
        required
      />
    </div>
    <div>
      <label for="phone">Phone:</label>
      <input type="tel" id="phone" name="phone" v-model="phoneNumber" />
    </div>
    <div>
      <label for="position">Position:</label>
      <select id="position" name="position" v-model="position" required>
        <option value="" disabled selected>I'm applying for...</option>
        <option value="int-firefighter">Interior Firefighter</option>
        <option value="ext-firefighter">Exterior Firefighter</option>
        <option value="engineer">Engineer</option>
        <option value="emt">EMT</option>
        <option value="support">Support</option>
        <option value="admin">Admin</option>
        <option value="junior">Junior</option>
      </select>
    </div>
    <div>
      <button class="bg-danby-red hover:bg-danby-yellow text-black">Submit</button>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      firstName: "",
      lastName: "",
      emailAddress: "",
      phoneNumber: "",
      position: "",
    };
  },
  methods: {
    submitApplication() {},
  },
};
</script>
