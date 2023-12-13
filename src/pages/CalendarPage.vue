<template>
  <div>
    <div class="pt-5 flex-grow border-b-2 border-danby-red">
      <h1 class="font-bold text-center">Calendar</h1>
    </div>
    <p class="pt-10 indent-8">
      This is the schedule of the Fire Company's upcoming meetings and training.
      Unless otherwise specified, all meetings and training are held at 7:00 PM
      at the
      <a
        href="https://goo.gl/maps/zTgiQ5hUkAfMYj617"
        target="_blank"
        class="hover:underline text-blue-700"
        >Danby Fire Station at 1780 Danby Rd</a
      >. Anyone interested in volunteering is encouraged to drop in, introduce
      themselves, and observe our training prior to submitting an application to
      our monthly business meeting, which is held on the second Monday of each
      month. For more information, see the
      <router-link
        to="/volunteer"
        class="underline hover:underline hover:text-blue-700"
        >Volunteer</router-link
      >
      page.
    </p>
    <div class="p-6 flex justify-center items-center">
      <iframe
        src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23aa2524&ctz=America%2FNew_York&showCalendars=0&showNav=1&showDate=1&showTz=1&title=Danby%20Volunteer%20Fire%20Company&src=dmpyaGswNmg5czRqZGFjN2h1M2hjbDlxczRAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&color=%23aa2524"
        style="border: solid 1px #777"
        width="800"
        height="600"
        frameborder="0"
        scrolling="no"
      ></iframe>
    </div>
  </div>
</template>
