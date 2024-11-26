<template>
  <div class="py-2">
    <div class="pt-5 flex-grow border-b-2 border-danby-red">
      <h1 class="font-bold text-center">House Numbering Sign for Emergency Services Info</h1>
    </div>
    <div class="mx-4">
      <p class="indent-8 pt-5 pb-2">
        Most houses have some kind of address numbering to identify them. However, numbering which
        is compliant with NYS law and perfectly suitable for helping the post office to deliver your
        mail may not be enough in an emergency. We have missed poorly numbered addresses and had to
        turn around. Please help us find you when seconds count:
      </p>

      <ul class="pb-10 ml-10 list-disc list-inside">
        <li>
          Make sure numbers are at least four inches tall, are reflective, and contrast with their
          background. Mail arrives during the day; we frequently must find your house at night.
          Reflective white letters on a dark background are best.
        </li>
        <li>
          Make sure numbers can be clearly seen from a distance. Your mail carrier drives slowly and
          stops at every house; we are traveling quickly and would like to stop at only yours. Make
          sure numbers are not obscured by newspaper boxes or vegetation.
        </li>
        <li>
          Make sure numbers can be seen from both directions, not only from the direction the mail
          comes from.
        </li>
        <li>
          Place numbers at the end of your driveway, on the same side of the road as your house.
          Numbers on the house itself can usually only be seen as we drive past them, and are not
          suitable. Numbers on a mailbox across the street are usually okay, but sometimes may
          appear to belong to the house across the steet. The end of the driveway is best.
        </li>
        <li>In winter, clear snow from number signs as promptly as possible.</li>
        <li>
          Talk to your neighbors about clearly visible numbering. If your house is number 200 and we
          see your neighbor's bright, reflective "198" sign, we know we're getting close.
        </li>
        <li>
          Talk to the Fire Company about unusual situations. On certain roads in Danby, house
          numbers appear out of order, or corner houses have addresses on one road but driveways on
          another. In these kinds of circumstances, take extra care to number your house very
          visibly, and also contact us to advise us of the situation. We can advise the Tompkins
          County 911 center to put a note in their computer system so that, if we are called to your
          house, we will get a reminder of the location as part of our dispatch information.
        </li>
      </ul>
    </div>
    <p>
      Under a grant, we are able to offer these at no cost to Danby residents who are senior
      citizens or who have disabilities. To order a sign, please fill out a form
      <router-link
        to="/safety/house-sign-form"
        class="hover:underline hover:text-blue-700 underline"
        >here</router-link
      >.
    </p>
  </div>
</template>
