<template>
  <div>
    <div class="flex md:flex justify-center md:justify-center items-center md:items-center">
      <router-link to="/">
        <img
          class="sm:h-40 m-3"
          :src="'../assets/danbybadge.png'"
          alt="Image of the Danby Volunteer Fire Company badge."
        />
      </router-link>
    </div>
    <div class="overflow-hidden flex h-1/2 justify-center self-center m-auto w-11/12">
      <form class="flex relative px-10 py-0 flex-col items-center justify-center flex-1">
        <div class="w-11/12 max-w-2xl">
          <div class="relative flex justify-center items-center m-3">
            <input
              class="w-full border-none py-4 pr-4 pl-8"
              type="text"
              placeholder="Email"
              v-model="email"
            />
            <Email class="w-3 absolute left-1" />
          </div>
          <div class="relative flex justify-center items-center m-3">
            <input
              class="w-full border-none py-4 pr-4 pl-8"
              type="password"
              placeholder="Password"
              v-model="password"
            />
            <Password class="w-3 absolute left-1" />
          </div>
          <p v-show="error">{{ errorMsg }}</p>
        </div>
        <div class="flex items-center justify-center pb-3">
          <button
            @click.prevent="login"
            type="submit"
            value="Submit"
            class="btn btn-ghost font-sans text-black bg-slate-500 hover:bg-danby-yellow"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import Email from '../assets/icons/envelope-regular.vue'
import Password from '../assets/icons/lock-alt-solid.vue'

export default {
  components: {
    Email,
    Password
  },
  data() {
    return {
      email: '',
      password: '',
      error: null,
      errorMsg: ''
    }
  },
  methods: {
    async login() {
      const auth = getAuth();
      await signInWithEmailAndPassword(auth, this.email, this.password)
        .then(() => {
          this.$router.push({ name: 'AdminDash' })
          this.error = false
          this.errorMsg = ''
        })
        .catch((err) => {
          this.error = true
          this.errorMsg = err.message
        })
    }
  }
}
</script>
