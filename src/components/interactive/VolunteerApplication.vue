<template>
  <div class="pb-10">
    <p>
      If you're interested in volunteering and joining our fire company, please
      fill out the form below:
    </p>
  </div>

  <form @submit.prevent="submitApplication">
    <div class="w-full">
      <div class="pb-2 ml-10">
        <label for="first-name">First Name:</label>
        <input
          type="text"
          id="first-name"
          name="first-name"
          v-model.trim="firstName"
          required
        />
      </div>
      <div class="pb-2 ml-10">
        <label class="text-gray-700 text-sm" for="last-name">Last Name:</label>
        <input
          class="ml-3"
          type="text"
          id="last-name"
          name="last-name"
          v-model.trim="lastName"
          required
        />
      </div>
      <div class="pb-2">
        <label
          for="email-address"
          class="block text-gray-700 text-sm ml-10 mb-5"
          >Email:</label
        >
        <input
          type="email"
          id="email-address"
          name="email-address"
          v-model="emailAddress"
          required
        />
      </div>
      <div class="pb-2">
        <label for="phone" class="block text-gray-700 text-sm ml-10 mb-5"
          >Phone:</label
        >
        <input
          type="tel"
          id="phone"
          name="phone"
          v-model="phoneNumber"
          required
        />
      </div>
      <div>
        <label for="position" class="block text-gray-700 text-sm ml-10 mb-5"
          >Position:</label
        >
        <select id="position" name="position" v-model="position" required>
          <option value="" disabled selected>I'm applying for...</option>
          <option value="int-firefighter">Interior Firefighter</option>
          <option value="ext-firefighter">Exterior Firefighter</option>
          <option value="fire-police">Fire Police</option>
          <option value="emt">EMT</option>
          <option value="support">Support</option>
          <option value="admin">Admin</option>
          <option value="junior">Junior</option>
        </select>
      </div>

      <div class="flex items-center justify-center">
        <button
          type="submit"
          value="Submit"
          class="solid-border border-8 border-red-900"
        >
          Submit
        </button>
      </div>

      <p v-if="error">{{ error }}</p>
    </div>
  </form>
</template>

<script>
export default {
  name: "volunteer-application",
  data() {
    return {
      firstName: "",
      lastName: "",
      emailAddress: "",
      phoneNumber: "",
      position: null,
      error: null,
    };
  },
  methods: {
    submitApplication() {
      fetch(
        "https://danby-fire-dept-default-rtdb.firebaseio.com/applications.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstname: this.firstName,
            lastname: this.lastName,
            email: this.emailAddress,
            phone: this.phoneNumber,
            pos: this.position,
          }),
        }
      )
        .then((response) => {
          if (response.ok) {
            console.log("Request sent successfully.");
          } else {
            throw new Error("Application could not be sent to the server.");
          }
        })
        .catch((error) => {
          console.log(error);
          this.error = error.message;
        });

      this.firstName = "";
      this.lastName = "";
      this.emailAddress = "";
      this.phoneNumber = "";
      this.position = null;
    },
  },
};
</script>
