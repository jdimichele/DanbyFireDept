<template>
  <div class="grid grid-cols-2 grid-rows-2">
    <div class="col-span-2">
      <div class="py-2">
        <h2 class="font-bold flex-grow border-b-2 ml-5 mr-10 border-danby-red">
          House Numbering Sign for Emergency Services Ordering Information
        </h2>
        <h4 class="font-bold flex-grow text-center py-6">
          If we can't find you, we can't help you!
        </h4>
        <p class="mx-4">
          Most houses have some kind of address numbering to identify them.
          However, numbering which is compliant with NYS law and perfectly
          suitable for helping the post office to deliver your mail may not be
          enough in an emergency. We have missed poorly numbered addresses and
          had to turn around. Please help us find you when seconds count: Make
          sure numbers are at least four inches tall, are reflective, and
          contrast with their background. Mail arrives during the day; we
          frequently must find your house at night. Reflective white letters on
          a dark background are best. Make sure numbers can be clearly seen from
          a distance. Your mail carrier drives slowly and stops at every house;
          we are traveling quickly and would like to stop at only yours. Make
          sure numbers are not obscured by newspaper boxes or vegetation. Make
          sure numbers can be seen from both directions, not only from the
          direction the mail comes from. Place numbers at the end of your
          driveway, on the same side of the road as your house. Numbers on the
          house itself can usually only be seen as we drive past them, and are
          not suitable. Numbers on a mailbox across the street are usually okay,
          but sometimes may appear to belong to the house across the steet. The
          end of the driveway is best. In winter, clear snow from number signs
          as promptly as possible. Talk to your neighbors about clearly visible
          numbering. If your house is number 200 and we see your neighbor's
          bright, reflective "198" sign, we know we're getting close. Talk to
          the Fire Company about unusual situations. On certain roads in Danby,
          house numbers appear out of order, or corner houses have addresses on
          one road but driveways on another. In these kinds of circumstances,
          take extra care to number your house very visibly, and also contact us
          to advise us of the situation. We can advise the Tompkins County 911
          center to put a note in their computer system so that, if we are
          called to your house, we will get a reminder of the location as part
          of our dispatch information. Sign Ordering Information Green,
          reflective address number signs and posts to mount them on are
          available through the Fire Company. Under a grant, we are able to
          offer these at no cost to Danby residents who are senior citizens or
          who have disabilities. To order a sign, please download and complete
          an order form, and return it to the Fire Company: Regular order form:
          $12 per sign, $5 per post Free sign order form: Free to Danby
          residents who are senior citizens or who have disabilities. We will
          also help install a number sign at your request.
        </p>
      </div>
    </div>
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
              <label class="text-base"> Choose sign direction: </label>
              <div class="flex">
                <div class="">
                  <input
                    class="input input-sm"
                    type="radio"
                    id="sign-direction"
                    name="sign-direction"
                    value="horizontal"
                    v-model="signDirection"
                    required
                  />
                  <label for="horizontal" class="text-base">Horizontal</label>
                </div>
                <input
                  class="input input-sm input-bordered"
                  type="radio"
                  id="sign-direction"
                  name="sign-direction"
                  value="vertical"
                  v-model="signDirection"
                  required
                />
                <label for="vertical" class="text-base">Vertical</label>
              </div>
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
                value="paypal"
                v-model.trim="paymentOption"
                required
              />
              <label for="paypal" class="text-base">PayPal</label>
            </div>
          </div>
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
