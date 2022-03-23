<template>
  <div class="componentCard grid grid-flow-row-dense grid-cols-3 grid-rows-2">
    <!-- All of this is currently placehold until converted into a Vue component. --->
    <Carousel
      :navigation="true"
      :pagination="false"
      :startAutoPlay="true"
      :timeout="5000"
      class="max-h-20 relative"
      v-slot="{ currentImage }"
    >
      <CarouselSlide v-for="(image, index) in carouselImages" :key="index">
        <div v-show="currentImage === index + 1" class="slide-info absolute">
          <img :src="require(`../assets/${image}.png`)" alt="" class="" />
        </div>
      </CarouselSlide>
    </Carousel>
    <div class="col-span-2">
      <p>
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
        District. Our mission is to provide the best possible fire protection,
        emergency medical, and related public safety services to the residents
        of the Danby Fire District. Under mutual aid agreements, we also respond
        when called to assist other municipalities.
      </p>
    </div>

    <div class="col-span-2">
      <h3 class="underline">What We Do</h3>
      <p>
        Many people's image of firefighters comes from Hollywood, where paid,
        full-time firefighters staff an urban firehouse 24/7. Though this is
        accurate of Ithaca and most larger cities, rural America is
        predominantly covered by volunteer fire departments. According to the
        National Fire Protection Association, 65% of U.S. firefighters are
        volunteers (source). Danby is all-volunteer, from the newest recruit to
        the fire chief. Our members are regular folks who typically come to the
        company with no background in the fire service, and receive all their
        training through us. In the rest of their lives they are bus drivers,
        dishwashers, students, professors, lawyers, stay-at-home moms and
        retirees. Most of the time there is no one staffing the firehouse.
        Members have pagers that alert them to emergencies. They respond from
        wherever they are in their lives — home, the grocery store, bed —
        directly to the scene, or to the firehouse for a truck. Unfortunately,
        combined with the long distances inherent to responding in a rural area,
        this means time is often against us. Fire suppression is only a small
        portion of our annual call volume. The majority of our calls are for
        medical emergencies. We are not an ambulance service, which means we do
        not transport patients to the hospital. As a first response agency, we
        provide initial care until Bangs Ambulance arrives.
      </p>
    </div>

    <div>
      <h3 class="underline">Services provided:</h3>
      <ul>
        <li>
          Emergency medical services (non-transporting first response service
          assisting Bangs Ambulance)
        </li>
        Heart problems, strokes, breathing emergencies, seizures, diabetic
        emergencies, allergic reactions, etc... Falls, car accidents,
        construction accidents, farm accidents, etc... Fire suppression &amp;
        investigation Structure fires Vehicle fires Grass &amp; brush fires Fire
        &amp; carbon monoxide alarm activations Gas odors &amp; leaks (in
        coordination with NYSEG) Determine cause &amp; origin of fires Rescue
        Car accidents Missing persons search (in coordination with law
        enforcement agencies and NYS Forest Rangers) Assist technical rescue
        personnel from mutual aid fire departments (primarily Ithaca) with rope,
        confined space, trench, water, or ice rescues Storm damage cleanup
        Flooded basements Trees or wires down (in coordination with highway
        department and NYSEG) Hazardous materials response: Secure scene &amp;
        assist responding hazmat team Control traffic at emergency scenes Public
        education and fire prevention activities
      </ul>
    </div>
    <div>
      Who We Are 2020 Officers: Line Officers Staff Officers Chief John Gaden
      President Peter Goodman 1st Assistant Chief Tyler Dorn Vice President
      Roger Grant 2nd Assistant Chief Dan Saracino Secretary Sharon Gaden 3rd
      Assistant Chief Peter Goodman Treasurer Steve Hilsdorf Lieutenant Simon
      Wyatt At Large Director Amy Westmiller At Large Director Steve Hilsdorf
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
      carouselImages: ["Trucks", "test"],
    };
  },
};
</script>
