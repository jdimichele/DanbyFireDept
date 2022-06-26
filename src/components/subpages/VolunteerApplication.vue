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
  <div class="pb-5 pl-5">
    <p>
      If you're interested in volunteering and joining our fire company, please
      fill out the form below:
    </p>
  </div>

  <form @submit.prevent="submitApplication" class="pb-5">
    <div class="w-full">
      <div class="sm:flex pb-2 ml-10">
        <div class="sm:w-28">
          <label for="first-name">First Name:</label>
        </div>
        <div>
          <input
            class="input input-sm input-bordered text-xl"
            type="text"
            id="first-name"
            name="first-name"
            v-model.trim="firstName"
            required
          />
        </div>
      </div>
      <div class="sm:flex pb-2 ml-10">
        <div class="sm:w-28">
          <label for="last-name">Last Name:</label>
        </div>
        <div>
          <input
            class="input input-sm input-bordered text-xl"
            type="text"
            id="last-name"
            name="last-name"
            v-model.trim="lastName"
            required
          />
        </div>
      </div>
      <div class="sm:flex pb-2 ml-10">
        <div class="sm:w-28">
          <label for="email-address">Email:</label>
        </div>
        <div>
          <input
            class="input input-sm input-bordered text-xl"
            type="email"
            id="email-address"
            name="email-address"
            v-model="emailAddress"
            required
          />
        </div>
      </div>
      <div class="sm:flex pb-2 ml-10">
        <div class="sm:w-28">
          <label for="phone">Phone:</label>
        </div>
        <div>
          <input
            class="input input-sm input-bordered text-xl"
            type="tel"
            id="phone"
            name="phone"
            v-model="phoneNumber"
            required
          />
        </div>
      </div>
      <div class="sm:flex pb-2 ml-10">
        <div class="sm:w-28">
          <label for="position">Position:</label>
        </div>
        <div>
          <select
            class="select select-sm select-bordered text-xl"
            id="position"
            name="position"
            v-model="position"
            required
          >
            <option disabled selected>I'm applying for...</option>
            <option value="int-firefighter">Interior Firefighter</option>
            <option value="ext-firefighter">Exterior Firefighter</option>
            <option value="fire-police">Fire Police</option>
            <option value="emt">EMT</option>
            <option value="support">Support</option>
            <option value="admin">Admin</option>
            <option value="junior">Junior</option>
          </select>
        </div>
      </div>

      <div class="flex items-center justify-center pb-3">
        <button
          type="submit"
          value="Submit"
          class="btn btn-ghost font-sans text-black bg-slate-500 hover:bg-danby-yellow"
        >
          Submit
        </button>
      </div>

      <div
        v-if="error"
        class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative text-center"
        role="alert"
      >
        <span class="block sm:inline">{{ error }}</span>
        <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
          <svg
            class="fill-current h-6 w-6 text-red-500"
            role="button"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <title>Close</title>
            <path
              d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"
            />
          </svg>
        </span>
      </div>
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
      fetch(process.env.VUE_APP_DBFAEP, {
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
      })
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
