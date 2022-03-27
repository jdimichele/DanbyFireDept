<template>
  <div class="componentCard grid grid-cols-2 grid-row-1 gap-10">
    <div class="relative col-span-1 row-span-1 top-5">
      <Carousel
        :navigation="true"
        :pagination="false"
        :startAutoPlay="true"
        :timeout="5000"
        v-slot="{ currentImage }"
      >
        <CarouselSlide
          v-for="(image, index) in carouselImages"
          :key="index"
          class="absolute container bg-black rounded-lg"
        >
          <div
            v-show="currentImage === index + 1"
            class="relative justify-center align-middle max-w-screen max-h-screen"
          >
            <img class="m-auto" :src="require(`../assets/${image}.png`)" />
          </div>
        </CarouselSlide>
      </Carousel>
    </div>
    <div class="col-span-1">
      <p class="indent-8 pt-5 pb-2">
        The <b>Danby Volunteer Fire Company</b> is a 100%-volunteer fire company
        protecting most of the town of
        <a
          href="https://danby.ny.gov/"
          target="_blank"
          class="hover:underline text-blue-700"
          >Danby, NY</a
        >. Other portions of the town are served by the West Danby Fire
        Department and the
        <a
          href="https://www.facebook.com/BrooktondaleFire/"
          target="_blank"
          class="hover:underline text-blue-700"
          >Brooktondale Volunteer Fire Company</a
        >. We are one of two fire companies organized within the Danby Fire
        District.
      </p>
      <p class="indent-8 pt-5 pb-2">
        Our mission is to provide the best possible fire protection, emergency
        medical, and related public safety services to the residents of the
        Danby Fire District. Under mutual aid agreements, we also respond when
        called to assist other municipalities.
      </p>
    </div>

    <div class="col-span-1">
      <h1 class="underline">What We Do:</h1>
      <p class="indent-8 pt-2">
        Many people's image of firefighters comes from Hollywood, where paid,
        full-time firefighters staff an urban firehouse 24/7. Though this is
        accurate of Ithaca and most larger cities, rural America is
        predominantly covered by
        <a
          href="https://en.wikipedia.org/wiki/Volunteer_fire_department"
          target="_blank"
          class="hover:underline text-blue-700"
          >volunteer fire departments</a
        >. According to the National Fire Protection Association, 65% of U.S.
        firefighters are volunteers
        <a
          href="https://www.nfpa.org/News-and-Research/Data-research-and-tools/Emergency-Responders/US-fire-department-profile"
          target="_blank"
          class="hover:underline text-blue-700"
          >(source)</a
        >.
      </p>
      <p class="indent-8 pt-1">
        Danby is all-volunteer, from the newest recruit to the fire chief. Our
        members are regular folks who typically come to the company with no
        background in the fire service, and receive all their training through
        us. In the rest of their lives they are bus drivers, dishwashers,
        students, professors, lawyers, stay-at-home moms and retirees.
      </p>
      <p class="indent-8 pt-1">
        Most of the time there is no one staffing the firehouse. Members have
        pagers that alert them to emergencies. They respond from wherever they
        are in their lives — home, the grocery store, bed — directly to the
        scene, or to the firehouse for a truck. Unfortunately, combined with the
        long distances inherent to responding in a rural area, this means time
        is often against us.
      </p>
      <p class="indent-8 pt-1">
        Fire suppression is only a small portion of our annual call volume. The
        majority of our calls are for medical emergencies. We are not an
        ambulance service, which means we do not transport patients to the
        hospital. As a first response agency, we provide initial care until
        Bangs Ambulance arrives.
      </p>
    </div>

    <div class="col-span-1">
      <h1 class="underline">Services provided:</h1>
      <ul class="list-inside list-disc pt-2">
        <li>
          Emergency medical services (non-transporting first response service
          assisting Bangs Ambulance)
        </li>
        <ul class="pl-10 list-inside list-circle">
          <li>
            Heart problems, strokes, breathing emergencies, seizures, diabetic
            emergencies, allergic reactions, etc...
          </li>
          <li>
            Falls, car accidents, construction accidents, farm accidents, etc...
          </li>
        </ul>

        <ul>
          <ul class="list-inside list-disc">
            <li>Fire suppression &amp; investigation</li>
          </ul>
          <ul class="pl-10 list-inside list-circle">
            <li>Structure fires</li>
            <li>Vehicle fires</li>
            <li>Grass &amp; brush fires</li>
            <li>Fire &amp; carbon monoxide alarm activations</li>
            <li>Gas odors &amp; leaks (in coordination with NYSEG)</li>
            <li>Determine cause &amp; origin of fires</li>
          </ul>
        </ul>

        <ul class="list-inside list-disc">
          <li>Rescue</li>
        </ul>
        <ul class="pl-10 list-inside list-circle">
          <li>Car accidents</li>
          <li>
            Missing persons search (in coordination with law enforcement
            agencies and NYS Forest Rangers)
          </li>
          <li>
            Assist technical rescue personnel from mutual aid fire departments
            (primarily Ithaca) with rope, confined space, trench, water, or ice
            rescues
          </li>
        </ul>
        <ul class="list-inside list-disc">
          <li>Storm damage cleanup</li>
        </ul>
        <ul class="pl-10 list-inside list-circle">
          <li>Flooded basements</li>
          <li>
            Trees or wires down (in coordination with highway department and
            NYSEG)
          </li>
        </ul>
        <ul class="list-inside list-disc">
          <li>
            Hazardous materials response: Secure scene &amp; assist responding
            hazmat team
          </li>
          <li>Control traffic at emergency scenes</li>
          <li>Public education and fire prevention activities</li>
        </ul>
      </ul>
    </div>

    <div class="col-span-2">
      <h1 class="underline text-center">Who We Are</h1>
      <h1 class="underline text-center">2020 Officers:</h1>
      <div class="flex flex-col">
        <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div class="overflow-hidden">
              <table class="min-w-full">
                <thead class="border-b">
                  <tr>
                    <th colspan="2" class="px-6 py-2">Line Officers</th>
                    <th colspan="2" class="px-6 py-2">Staff Officers</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="border-b">
                    <th class="text-right pr-10">Chief</th>
                    <td>John Gaden</td>

                    <th class="text-right pr-10">President</th>
                    <td>Peter Goodman</td>
                  </tr>

                  <tr class="border-b">
                    <th class="text-right pr-10">1st Assistant Chief</th>
                    <td>Tyler Dorn</td>

                    <th class="text-right pr-10">Vice President</th>
                    <td>Roger Grant</td>
                  </tr>

                  <tr class="border-b">
                    <th class="text-right pr-10">2nd Assistant Chief</th>
                    <td>Dan Saracino</td>

                    <th class="text-right pr-10">Secretary</th>
                    <td>Sharon Gaden</td>
                  </tr>

                  <tr class="border-b">
                    <th class="text-right pr-10">3rd Assistant Chief</th>
                    <td>Peter Goodman</td>

                    <th class="text-right pr-10">Treasurer</th>
                    <td>Steve Hilsdorf</td>
                  </tr>

                  <tr class="border-b">
                    <th class="text-right pr-10">Lieutenant</th>
                    <td>Simon Wyatt</td>

                    <th></th>
                    <td></td>
                  </tr>

                  <tr class="border-b">
                    <td></td>
                    <th class="text-right pr-10">At Large Director</th>
                    <td>Amy Westmiller</td>
                  </tr>

                  <tr class="border-b">
                    <td></td>
                    <th class="text-right pr-10">At Large Director</th>
                    <td>Steve Hilsdorf</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Carousel from "@/components/Carousel.vue";
import CarouselSlide from "@/components/CarouselSlide.vue";
export default {
  components: {
    Carousel,
    CarouselSlide,
  },
  data() {
    return {
      carouselImages: ["Trucks", "truck401"],
    };
  },
};
</script>
