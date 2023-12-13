<template>
  <div class="grid grid-cols-2 grid-rows-1">
    <div class="col-span-2">
      <div class="py-2">
        <div class="pt-5 flex-grow border-b-2 border-danby-red">
          <h1 class="font-bold text-center">
            House Numbering Sign for Emergency Services Info
          </h1>
        </div>
        <h4 class="font-bold flex-grow text-center py-6">
          If we can't find you, we can't help you!
        </h4>
      </div>
    </div>
    <div class="">
      <form @submit.prevent="submitSignRequest" class="pb-5">
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
              <label class="text-base">Choose sign direction:</label>
              <div class="flex">
                <div class="inline-flex">
                  <div class="pr-5">
                    <input
                      class="align-middle"
                      type="radio"
                      id="sign-direction"
                      name="sign-direction"
                      value="horizontal"
                      v-model="signDirection"
                      required
                    />
                    <label for="horizontal" class="text-base align-middle pl-1"
                      >Horizontal</label
                    >
                  </div>
                  <div>
                    <input
                      class="align-middle"
                      type="radio"
                      id="sign-direction"
                      name="sign-direction"
                      value="vertical"
                      v-model="signDirection"
                      required
                    />
                    <label for="vertical" class="text-base align-middle pl-1"
                      >Vertical</label
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Number of Signs selection -->
          <div class="sm:flex pb-2 ml-10">
            <p class="text-base">Do you need more than one sign?</p>
            <div class="inline-flex pl-2">
              <label for="signNeeded" class="text-base pr-1">Yes</label>
              <input
                class="align-middle"
                type="radio"
                name="signNeeded"
                id="signNeeded"
                v-model="signNeeded"
                value="true"
              />
              <label for="signNeeded" class="text-base px-1">No</label>
              <input
                class="align-middle"
                type="radio"
                name="signNeeded"
                id="signNeeded"
                v-model="signNeeded"
                value="false"
              />
            </div>
          </div>
          <div v-if="signNeeded === 'true'">
            <div class="sm:flex pb-2 pl-2 ml-10">
              <div class="inline-flex">
                <label for="number-of-signs" class="text-base"
                  >Number of Signs Needed:</label
                >
                <select
                  class="select select-sm input-bordered text-xl ml-2"
                  id="number-of-signs"
                  name="number-of-signs"
                  v-model="numberOfSigns"
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>
              </div>
            </div>
          </div>

          <!-- Number of Posts selection -->
          <div class="sm:flex pb-2 ml-10">
            <p class="text-base">Do you need more than one sign post?</p>
            <div class="inline-flex pl-2">
              <label for="postNeeded" class="text-base pr-1">Yes</label>
              <input
                class="align-middle"
                type="radio"
                name="postNeeded"
                id="postNeeded"
                v-model="postNeeded"
                value="true"
              />
              <label for="postNeeded" class="text-base px-1">No</label>
              <input
                class="align-middle"
                type="radio"
                name="postNeeded"
                id="postNeeded"
                v-model="postNeeded"
                value="false"
              />
            </div>
          </div>
          <div v-if="postNeeded === 'true'">
            <div class="sm:flex pb-2 pl-2 ml-10">
              <div class="inline-flex">
                <label for="number-of-signs" class="text-base"
                  >Number of Posts Needed:</label
                >
                <select
                  class="select select-sm input-bordered text-xl ml-2"
                  id="number-of-posts"
                  name="number-of-posts"
                  v-model="numberOfPosts"
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>
              </div>
            </div>
          </div>

          <!-- Mounting radio buttons -->
          <div class="sm:flex pb-2 ml-10">
            <div>
              <h3 class="text-base">
                Danby Fire Company would be glad to assist you in mounting the
                sign. Do you require assistance?
              </h3>
              <div class="flex">
                <div class="inline-flex">
                  <div class="pr-5">
                    <input
                      class="align-middle"
                      type="radio"
                      id="mounting"
                      name="mounting"
                      value="yes"
                      v-model="mounting"
                      required
                    />
                    <label for="yes" class="text-base align-middle pl-1"
                      >Yes</label
                    >
                  </div>
                  <div>
                    <input
                      class="align-middle"
                      type="radio"
                      id="mounting"
                      name="mounting"
                      value="no"
                      v-model="mounting"
                      required
                    />
                    <label for="no" class="text-base align-middle pl-1"
                      >No</label
                    >
                  </div>
                </div>
              </div>
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
                value="paypal"
                v-model.trim="paymentOption"
                required
              />
              <label for="paypal" class="text-base">PayPal</label>
            </div>
          </div>
        </div>

        <div class="flex items-center justify-center pt-3">
          <button
            type="submit"
            value="Submit"
            class="btn btn-ghost font-sans text-black bg-slate-500 hover:bg-danby-yellow"
          >
            Submit
          </button>
        </div>
      </form>
    </div>

    <!-- Sign Post Photo div -->
    <div>
      <h2 class="text-center text-base">Example of Vertical Sign Post</h2>
      <div class="flex justify-center items-center">
        <img class="" src="../../assets/sign-post.jpg" />
      </div>
    </div>
  </div>

  <div
    v-if="confirmation"
    class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative text-center mb-20"
    role="alert"
  >
    <span class="block sm:inline">{{ confirmation }}</span>
    <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
      <svg
        @click="confirmation = null"
        class="fill-current h-6 w-6 text-green-500"
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

  <div
    v-if="error"
    class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative text-center"
    role="alert"
  >
    <span class="block sm:inline">{{ error }}</span>
    <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
      <svg
        @click="error = null"
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
</template>

<script>
export default {
  data() {
    return {
      signNeeded: "",
      postNeeded: "",
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
      confirmation: null,
      error: null,
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
      this.postNeeded = "";
      this.signNeeded = "";
    },
  },
};
</script>
