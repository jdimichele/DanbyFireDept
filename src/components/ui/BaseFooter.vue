<template>
  <footer>
    <div class="flex justify-center items-center space-x-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="w-8 h-8 justify-center items-center"
      >
        <a
          xlink:href="https://www.facebook.com/DanbyVolunteerFireCompany"
          target="_blank"
          class="w-8 h-8 hover:fill-danby-yellow"
        >
          <path
            d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
          />
        </a>
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="w-8 h-8 justify-center items-center"
      >
        <a
          xlink:href="https://twitter.com/DanbyFire"
          target="_blank"
          class="w-8 h-8 hover:fill-danby-yellow"
        >
          <path
            d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"
          />
        </a>
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="w-8 h-8 justify-center items-center"
      >
        <a
          xlink:href="https://www.paypal.com/donate/?hosted_button_id=6VPGJH6FFYKNW&fbclid=IwAR1gMQXZOjXCURDdBpkVw5gX4dRQBNhlYNr6JmLpY6wlfOq83tWKK0E5zUw"
          target="_blank"
          class="w-8 h-8 hover:fill-danby-yellow"
        >
          <path
            d="M-837.663-237.968a5.49 5.49 0 0 0-5.423 4.633l-9.013 57.15-8.281 52.514-.005.044.01-.044 8.281-52.514c.421-2.669 2.719-4.633 5.42-4.633h26.404c26.573 0 49.127-19.387 53.246-45.658.314-1.996.482-3.973.52-5.924v-.003h-.003c-6.753-3.543-14.683-5.565-23.372-5.565z"
          />
          <path
            d="M-766.506-232.402c-.037 1.951-.207 3.93-.52 5.926-4.119 26.271-26.673 45.658-53.246 45.658h-26.404c-2.701 0-4.999 1.964-5.42 4.633l-8.281 52.514-5.197 32.947a4.46 4.46 0 0 0 4.405 5.153h28.66a5.49 5.49 0 0 0 5.423-4.633l7.55-47.881c.423-2.669 2.722-4.636 5.423-4.636h16.876c26.573 0 49.124-19.386 53.243-45.655 2.924-18.649-6.46-35.614-22.511-44.026z"
          />
          <path
            d="M-870.225-276.071a5.49 5.49 0 0 0-5.423 4.636l-22.489 142.608a4.46 4.46 0 0 0 4.405 5.156h33.351l8.281-52.514 9.013-57.15a5.49 5.49 0 0 1 5.423-4.633h47.782c8.691 0 16.621 2.025 23.375 5.563.46-23.917-19.275-43.666-46.412-43.666z"
          />
        </a>
      </svg>
    </div>
    <div class="py-2 text-danby-yellow text-center">
      <router-link :to="{ name: 'admin' }">© DVFC 2022</router-link>
    </div>
  </footer>
</template>
