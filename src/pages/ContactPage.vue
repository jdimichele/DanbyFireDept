<template>
  <div class="grid grid-cols-1 grid-rows-1">
    <div class="font-bold underline text-5xl text-red-600 text-center">
      <h1>In An Emergency:</h1>
      <h1>CALL 9-1-1</h1>
    </div>

    <div class="pb-8">
      <ul>
        <li class="font-bold flex-grow border-b-2 ml-5 mr-10 border-danby-red">
          Non-emergency phone:
        </li>
        <li class="indent-10">
          <a href="tel:607-272-8114" class="hover:underline text-blue-700">607-272-8114</a>
          (unmanned station; will usually go to voice mail)
        </li>
      </ul>
    </div>
    <div class="pb-8">
      <ul>
        <li class="font-bold flex-grow border-b-2 ml-5 mr-10 border-danby-red">Fire Station:</li>
        <li class="indent-10">
          <a
            href="https://goo.gl/maps/zTgiQ5hUkAfMYj617"
            target="_blank"
            class="hover:underline text-blue-700"
            >1780 Danby Rd, Ithaca, NY 14850</a
          >
        </li>
        <iframe
          class="flex w-80 h-96 border-0"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d737.0807780632854!2d-76.48332497976094!3d42.356952791620415!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xeecec980c3cbe59f!2sDanby%20Fire%20Station!5e0!3m2!1sen!2sus!4v1648421720564!5m2!1sen!2sus"
          allowfullscreen="true"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </ul>
    </div>

    <div class="grid grid-cols-1 grid-rows-1 md:grid-cols-2">
      <div class="pb-8 col-span-1">
        <ul>
          <li class="font-bold flex-grow border-b-2 ml-5 mr-10 border-danby-red">Email:</li>
        </ul>
        <ul class="indent-10">
          <li><b>Contact Email:</b></li>
          <li class="indent-10">info@danbyfiredept.org</li>
          <li><b>Requests for station use:</b></li>
          <li class="indent-10">station@danbyfiredept.org</li>
        </ul>
      </div>
      <div class="pb-8 col-span-1">
        <ul>
          <li class="font-bold flex-grow border-b-2 ml-5 mr-10 border-danby-red">Social Media:</li>
          <li class="indent-10">
            <a
              href="https://www.facebook.com/DanbyVolunteerFireCompany"
              target="_blank"
              class="text-blue-700 hover:underline hover:text-blue-700"
              >Facebook</a
            >
          </li>
          <li class="indent-10">
            <a
              href="https://bsky.app/profile/danbyfiredept.bsky.social"
              target="_blank"
              class="text-blue-700 hover:underline hover:text-blue-700"
              >Bluesky</a
            >
          </li>
          <li class="indent-10">
            <a
              href="https://twitter.com/DanbyFire"
              target="_blank"
              class="text-blue-700 hover:underline hover:text-blue-700"
              >Twitter</a
            >
          </li>
        </ul>
      </div>
    </div>
    <div class="pb-8 col-span-1">
      <ul>
        <li class="font-bold flex-grow border-b-2 ml-5 mr-10 border-danby-red">Donations:</li>
      </ul>
      <ul class="indent-10 pb-4">
        <li class="pb-4 m-8">
          If you'd like to support us in our mission, we have a Paypal donation page set up that can
          be paid with Credit/Debit cards (or Paypal of course).
        </li>
        <li class="m-8">
          You can find a link to our PayPal by scanning the QR code below or click
          <a
            href="https://www.paypal.com/donate/?hosted_button_id=6VPGJH6FFYKNW&fbclid=IwAR1gMQXZOjXCURDdBpkVw5gX4dRQBNhlYNr6JmLpY6wlfOq83tWKK0E5zUw"
            target="_blank"
            class="text-blue-700 hover:underline hover:text-blue-700"
            >here</a
          >.
        </li>
      </ul>
      <div class="flex justify-center items-center">
        <img
          src="../assets/social/danbyQRCode.png"
          alt="QR Code that takes you to the Danby PayPal donation link."
        />
      </div>
    </div>
  </div>
</template>
