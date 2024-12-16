<template>
  <div
    class="relative grid grid-cols-1 grid-rows-1 gap-2 min-w-min sm:grid-rows-1 sm:grid-cols-2 sm:gap-10"
  >
    <div
      class="relative row-span-1 col-span-6 order-1 pt-10 h-96 sm:pt-0 sm:top-5 sm:order-2 sm:col-span-1 sm:grid-rows-1"
    >
      <div class="carousel w-full h-full">
        <img
          :src="carouselImages[currentImageIndex]"
          alt="Carousel Image"
          class="w-full object-cover h-auto max-h-96"
        />
      </div>
      <button
        @click="prevImage"
        class="absolute transform fa-solid fa-chevron-left items-center justify-center rounded-full h-10 w-10 bg-opacity-75 bg-danby-yellow left-2 top-1/2 -translate-y-1/2"
      ></button>
      <button
        @click="nextImage"
        class="absolute transform fa-solid fa-chevron-right items-center justify-center rounded-full h-10 w-10 bg-opacity-75 bg-danby-yellow right-2 top-1/2 -translate-y-1/2"
      ></button>
    </div>

    <div
      class="col-span-6 order-1 row-span-2 sm:order-2 sm:col-span-1 sm:grid-rows-1 sm:row-span-1"
    >
      <p class="indent-8 pt-5 pb-2">
        The <b>Danby Volunteer Fire Company</b> is a 100%-volunteer fire company protecting most of
        the town of
        <a href="https://danby.ny.gov/" target="_blank" class="hover:underline text-blue-700"
          >Danby, NY</a
        >. Other portions of the town are served by the West Danby Fire Department and the
        <a
          href="https://www.facebook.com/BrooktondaleFire/"
          target="_blank"
          class="hover:underline text-blue-700"
          >Brooktondale Volunteer Fire Company</a
        >. We are one of two fire companies organized within the Danby Fire District.
      </p>
      <p class="indent-8 pt-5 pb-2">
        Our mission is to provide the best possible fire protection, emergency medical, and related
        public safety services to the residents of the Danby Fire District. Under mutual aid
        agreements, we also respond when called to assist other municipalities.
      </p>
    </div>

    <div class="col-span-3 row-span-3 order-3 sm:col-span-1 sm:grid-rows-1 sm:row-span-1">
      <h1 class="font-bold flex-grow border-b-2 ml-5 mr-10 border-danby-red">What We Do:</h1>
      <p class="indent-8 pt-2">
        Many people's image of firefighters comes from Hollywood, where paid, full-time firefighters
        staff an urban firehouse 24/7. Though this is accurate of Ithaca and most larger cities,
        rural America is predominantly covered by
        <a
          href="https://en.wikipedia.org/wiki/Volunteer_fire_department"
          target="_blank"
          class="hover:underline text-blue-700"
          >volunteer fire departments</a
        >. According to the National Fire Protection Association, 65% of U.S. firefighters are
        volunteers
        <a
          href="https://www.nfpa.org/News-and-Research/Data-research-and-tools/Emergency-Responders/US-fire-department-profile"
          target="_blank"
          class="hover:underline text-blue-700"
          >(source)</a
        >.
      </p>
      <p class="indent-8 pt-1">
        Danby is all-volunteer, from the newest recruit to the fire chief. Our members are regular
        folks who typically come to the company with no background in the fire service, and receive
        all their training through us. In the rest of their lives they are bus drivers, dishwashers,
        students, professors, lawyers, stay-at-home moms and retirees.
      </p>
      <p class="indent-8 pt-1">
        Most of the time there is no one staffing the firehouse. Members have pagers that alert them
        to emergencies. They respond from wherever they are in their lives — home, the grocery
        store, bed — directly to the scene, or to the firehouse for a truck. Unfortunately, combined
        with the long distances inherent to responding in a rural area, this means time is often
        against us.
      </p>
      <p class="indent-8 pt-1">
        Fire suppression is only a small portion of our annual call volume. The majority of our
        calls are for medical emergencies. We are not an ambulance service, which means we do not
        transport patients to the hospital. As a first response agency, we provide initial care
        until Bangs Ambulance arrives.
      </p>
    </div>

    <div class="col-span-4 row-span-4 order-4 sm:col-span-1 sm:grid-rows-1 sm:row-span-1">
      <h1 class="font-bold flex-grow border-b-2 ml-5 mr-10 border-danby-red">Services provided:</h1>
      <ul class="list-inside list-disc pt-2">
        <li>
          Emergency medical services (non-transporting first response service assisting Bangs
          Ambulance)
        </li>
        <ul class="pl-10 list-inside list-circle">
          <li>
            Heart problems, strokes, breathing emergencies, seizures, diabetic emergencies, allergic
            reactions, etc...
          </li>
          <li>Falls, car accidents, construction accidents, farm accidents, etc...</li>
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
            Missing persons search (in coordination with law enforcement agencies and NYS Forest
            Rangers)
          </li>
          <li>
            Assist technical rescue personnel from mutual aid fire departments (primarily Ithaca)
            with rope, confined space, trench, water, or ice rescues
          </li>
        </ul>
        <ul class="list-inside list-disc">
          <li>Storm damage cleanup</li>
        </ul>
        <ul class="pl-10 list-inside list-circle">
          <li>Flooded basements</li>
          <li>Trees or wires down (in coordination with highway department and NYSEG)</li>
        </ul>
        <ul class="list-inside list-disc">
          <li>Hazardous materials response: Secure scene &amp; assist responding hazmat team</li>
          <li>Control traffic at emergency scenes</li>
          <li>Public education and fire prevention activities</li>
        </ul>
      </ul>
    </div>

    <div class="col-span-5 row-span-5 sm:col-span-2 sm:grid-rows-1 sm:row-span-1 order-5">
      <h1 class="font-bold flex-grow border-b-2 ml-5 mr-10 border-danby-red">Who We Are</h1>
      <!-- {{ currentYear }} will need to be added back in January, 2025 -->
      <h1 class="underline text-center">2025 Officers:</h1>
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
                    <td>Dan Saracino</td>

                    <th class="text-right pr-10">Vice President</th>
                    <td>Derek Dougherty</td>
                  </tr>

                  <tr class="border-b">
                    <th class="text-right pr-10">2nd Assistant Chief</th>
                    <td>Peter Goodman</td>

                    <th class="text-right pr-10">Treasurer</th>
                    <td>Steve Hilsdorf</td>
                  </tr>

                  <tr class="border-b">
                    <th class="text-right pr-10">3rd Assistant Chief</th>
                    <td>Jethro Forbes</td>

                    <th class="text-right pr-10">Secretary</th>
                    <td>Sharon Gaden</td>
                  </tr>

                  <tr class="border-b">
                    <th class="text-right pr-10">Lieutenant</th>
                    <td>Derek Dougherty</td>

                    <th class="text-right pr-10">Director At Large</th>
                    <td>Stephen Sauer</td>
                  </tr>

                  <tr class="border-b">
                    <th class="text-right pr-10">Lieutenant</th>
                    <td>Ivan Ross</td>

                    <th class="text-right pr-10">Director at Large</th>
                    <td>Ivan Ross</td>
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
export default {
  data() {
    return {
      carouselImages: [
        'all_trucks',
        'DSC_5444',
        'DSC_5465',
        'DSC_05499',
        'DSC_5560',
        'DSC_05569',
        'DSC_5609',
        'DSC_6096',
        'DSC_6146',
        'pancakes'
      ],
      currentImageIndex: 0,
      currentYear: new Date().getFullYear()
    }
  },
  mounted() {
    const images = import.meta.glob('../assets/*.png')
    const loadedImages = []

    for (const path in images) {
      images[path]().then((mod) => {
        loadedImages.push(mod.default || mod)
        this.carouselImages = loadedImages
      })
    }

    this.startAutoScroll()
  },
  methods: {
    nextImage() {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.carouselImages.length
    },
    prevImage() {
      this.currentImageIndex =
        (this.currentImageIndex - 1 + this.carouselImages.length) % this.carouselImages.length
    },
    startAutoScroll() {
      this.autoScrollInterval = setInterval(this.nextImage, 5000)
    },
    stopAutoScroll() {
      clearInterval(this.autoScrollInterval)
    }
  },
  beforeUnmount() {
    this.stopAutoScroll()
  }
}
</script>
