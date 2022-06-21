<template>
  <h3 class="text-center py-3">
    We are continuously looking for more volunteers and nearly every volunteer
    joins with no prior emergency qualifications or experience; all training and
    equipment is provided at no cost to the volunteer.
  </h3>
  <p class="indent-8 pt-5 pb-2">
    There's a variety of ways you can get involved, depending on your interests
    and availability. The first step is showing up:
  </p>
  <p class="indent-8 pt-5 pb-10">
    Find us at the Fire station at
    <a
      href="https://www.google.com/search?q=1780+Danby+Rd&oq=1780+Danby+Rd&aqs=edge..69i57&sourceid=chrome&ie=UTF-8#"
      target="_blank"
      class="text-blue-700 hover:underline hover:text-blue-700"
      >1780 Danby Rd</a
    >
    on Monday nights at 7pm or reach out to us on
    <a
      href="https://www.facebook.com/DanbyVolunteerFireCompany"
      target="_blank"
      class="text-blue-700 hover:underline hover:text-blue-700"
      >Facebook</a
    >.
  </p>
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
          class="ml-5"
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
