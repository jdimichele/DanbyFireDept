<template>
  <div class="grid grid-cols-2 grid-rows-2">
    <div class="">
      <form @submit.prevent="submitHouseSign" class="pb-5">
        <div class="w-full">
          <!-- First Name label/input fields -->
          <div class="sm:flex pb-2 ml-10 inline-block">
            <div class="sm:w-28">
              <label for="first-name" class="text-base">First Name:</label>
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

          <!-- Last Name label/input fields -->
          <div class="sm:flex pb-2 ml-10">
            <div class="sm:w-28">
              <label for="last-name" class="text-base">Last Name:</label>
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

          <!-- Email Address label/input fields -->
          <div class="sm:flex pb-2 ml-10">
            <div class="sm:w-28">
              <label for="email-address" class="text-base">Email:</label>

              <input
                class="input input-sm input-bordered text-xl"
                type="email"
                id="email-address"
                name="email-address"
                v-model.trim="emailAddress"
                required
              />
            </div>
          </div>

          <!-- Phone Number label/input fields -->
          <div class="sm:flex pb-2 ml-10">
            <div class="sm:w-28">
              <label for="phone" class="text-base">Phone:</label>
              <input
                class="input input-sm input-bordered text-xl"
                type="tel"
                id="phone"
                name="phone"
                v-model.trim="phoneNumber"
                required
              />
            </div>
          </div>

          <!-- Home Address label/input fields -->
          <div class="sm:flex pb-2 ml-10">
            <div class="sm:w-28">
              <label for="home-address" class="text-base">Home Address:</label>
              <input
                class="input input-sm input-bordered text-xl"
                type="text"
                id="home-address"
                name="home-address"
                v-model.trim="homeAddress"
                required
              />
            </div>
          </div>

          <!-- Sign Direction radio buttons -->
          <div class="sm:flex pb-2 ml-10">
            <div>
              <p class="text-base">
                We can make the sign horizontal or vertical:
              </p>
            </div>
            <div class="">
              <input
                class="input input-sm input-bordered"
                type="radio"
                id="sign-direction"
                name="sign-direction"
                value="horizontal"
                v-model="signDirection"
                required
              />
              <label for="horizontal" class="text-base"
                >Horizontal (Left to Right)</label
              >
            </div>
            <div class="">
              <input
                class="input input-sm input-bordered"
                type="radio"
                id="sign-direction"
                name="sign-direction"
                value="vertical"
                v-model="signDirection"
                required
              />
              <label for="vertical" class="text-base"
                >Vertical (Top to Bottom)</label
              >
            </div>
          </div>

          <!-- Number of Signs selection -->
          <div class="sm:flex pb-2 ml-10">
            <div class="sm:w-28">
              <label for="number-of-signs" class="text-base"
                >Number of Signs Needed:</label
              >
              <select
                class="select select-sm input-bordered text-xl"
                id="number-of-signs"
                name="number-of-signs"
                v-model="numberOfSigns"
                required
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </div>
          </div>

          <!-- Number of Posts selection -->
          <div class="sm:flex pb-2 ml-10">
            <div class="sm:w-28">
              <label for="number-of-posts" class="text-base"
                >Number of Posts Needed:</label
              >
              <select
                class="select select-sm input-bordered text-xl"
                id="number-of-posts"
                name="number-of-posts"
                v-model="numberOfPosts"
                required
              >
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </div>
          </div>

          <!-- Mounting radio buttons -->
          <div class="sm:flex pb-2 ml-10">
            <div>
              <p class="text-base">
                At your request, the Fire Company would be glad to assist you in
                mounting the sign. Do you require assistance?
              </p>
            </div>
            <div class="">
              <input
                class="input input-sm input-bordered"
                type="radio"
                id="mounting"
                name="mounting"
                value="yes"
                v-model="mounting"
                required
              />
              <label for="yes" class="text-base">Yes</label>
            </div>
            <div class="">
              <input
                class="input input-sm input-bordered"
                type="radio"
                id="mounting"
                name="mounting"
                value="no"
                v-model="mounting"
                required
              />
              <label for="no" class="text-base">No</label>
            </div>
          </div>

          <!-- Payment Options radio buttons -->
          <div class="sm:flex pb-2 ml-10">
            <div>
              <p class="text-base">Payment Options:</p>
            </div>
            <div class="">
              <input
                class="input input-sm input-bordered"
                type="radio"
                id="payment-option"
                name="payment-option"
                value="yes"
                v-model.trim="paymentOption"
                required
              />
              <label for="yes" class="text-base">Check</label>
            </div>
            <div class="">
              <input
                class="input input-sm input-bordered"
                type="radio"
                id="payment-option"
                name="payment-option"
                value="no"
                v-model.trim="paymentOption"
                required
              />
              <label for="no" class="text-base">No</label>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstName: null,
      lastName: null,
      emailAddress: null,
      phoneNumber: null,
      homeAddress: null,
      signDirection: null,
      numberOfSigns: null,
      numberOfPosts: null,
      mounting: null,
      paymentOption: null,
    };
  },

  methods: {
    async submitSignRequest() {
      try {
        const requestForm = {
          firstName: this.firstName,
          lastName: this.lastName,
          emailAddress: this.emailAddress,
          phoneNumber: this.phoneNumber,
          homeAddress: this.homeAddress,
          signDirection: this.signDirection,
          numberOfSigns: this.numberOfSigns,
          numberOfPosts: this.numberOfPosts,
          mounting: this.mounting,
          paymentOption: this.paymentOption,
        };
        const response = await this.$store.dispatch(
          "submitSignRequest",
          requestForm
        );
        this.confirmation = response;
      } catch (error) {
        console.log(error);
        this.error = error.message;
      }
      this.firstName = "";
      this.lastName = "";
      this.emailAddress = "";
      this.phoneNumber = "";
      this.homeAddress = "";
      this.signDirection = null;
      this.numberOfSigns = null;
      this.numberOfPosts = null;
      this.mounting = null;
      this.paymentOption = null;
    },
  },
};
</script>
