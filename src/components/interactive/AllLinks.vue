<template>
  <div class="grid grid-cols-1 sm:grid-cols-2">
    <div>
      <h2 class="font-bold flex-grow border-b-2 ml-5 mr-10 border-danby-red">
        Tompkins County Fire Departments
      </h2>
      <ul class="pb-10 ml-10 list-disc list-inside">
        <li v-for="tompkinsLink in tompkinsLinks" :key="tompkinsLink.id">
          <a
            :href="tompkinsLink.url"
            target="_blank"
            class="hover:underline hover:text-blue-700"
          >
            {{ tompkinsLink.name }}
          </a>
        </li>
      </ul>
    </div>

    <div>
      <h2 class="font-bold flex-grow border-b-2 ml-5 mr-10 border-danby-red">
        Other Fire Agencies
      </h2>
      <ul class="pb-10 ml-10 list-disc list-inside">
        <li v-for="otherFireLink in otherFireLinks" :key="otherFireLink.id">
          <a
            :href="otherFireLink.url"
            target="_blank"
            class="hover:underline hover:text-blue-700"
          >
            {{ otherFireLink.name }}
          </a>
        </li>
      </ul>
    </div>

    <div>
      <h2 class="font-bold flex-grow border-b-2 ml-5 mr-10 border-danby-red">
        Emergency Medical Services
      </h2>
      <ul class="pb-10 ml-10 list-disc list-inside">
        <li
          v-for="emergencyMedicalLink in emergencyMedicalLinks"
          :key="emergencyMedicalLink.id"
        >
          <a
            :href="emergencyMedicalLink.url"
            target="_blank"
            class="hover:underline hover:text-blue-700"
          >
            {{ emergencyMedicalLink.name }}
          </a>
        </li>
      </ul>
    </div>

    <div>
      <h2 class="font-bold flex-grow border-b-2 ml-5 mr-10 border-danby-red">
        Law Enforcement Agencies
      </h2>
      <ul class="pb-10 ml-10 list-disc list-inside">
        <li v-for="lawEnfLink in lawEnfLinks" :key="lawEnfLink.id">
          <a
            :href="lawEnfLink.url"
            target="_blank"
            class="hover:underline hover:text-blue-700"
          >
            {{ lawEnfLink.name }}
          </a>
        </li>
      </ul>
    </div>

    <div>
      <h2 class="font-bold flex-grow border-b-2 ml-5 mr-10 border-danby-red">
        Local Government
      </h2>
      <ul class="pb-10 ml-10 list-disc list-inside">
        <li v-for="localGovLink in localGovLinks" :key="localGovLink.id">
          <a
            :href="localGovLink.url"
            target="_blank"
            class="hover:underline hover:text-blue-700"
          >
            {{ localGovLink.name }}
          </a>
        </li>
      </ul>
    </div>

    <div>
      <h2 class="font-bold flex-grow border-b-2 ml-5 mr-10 border-danby-red">
        Other Local Services
      </h2>
      <ul class="pb-10 ml-10 list-disc list-inside">
        <li v-for="localServsLink in localServsLinks" :key="localServsLink.id">
          <a
            :href="localServsLink.url"
            target="_blank"
            class="hover:underline hover:text-blue-700"
          >
            {{ localServsLink.name }}
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "all-links",
  data() {
    return {
      tompkinsLinks: [
        {
          id: "1",
          name: "Brooktondale Volunteer Fire Company",
          url: "https://www.facebook.com/BrooktondaleFire/",
        },
        {
          id: "2",
          name: "Cayuga Heights Fire Department",
          url: "https://www.chfd.info/",
        },
        {
          id: "3",
          name: "Etna Fire Department",
          url: "https://etnafire.webs.com/",
        },
        {
          id: "4",
          name: "Dryden Fire Department / Neptune Hose Co. #1",
          url: "https://www.facebook.com/Neptune-Hose-Co-1-of-Dryden-Inc-Dryden-Ambulance-Inc-211545062531/",
        },
        {
          id: "5",
          name: "Enfield Volunteer Fire Company",
          url: "https://townofenfield.org/enfield-volunteer-fire-department/",
        },
        {
          id: "6",
          name: "Freeville Fire Department / W.B. Strong Fire Co. Inc.",
          url: "https://www.freevillefd.com/",
        },
        {
          id: "7",
          name: "Groton Fire Department",
          url: "https://www.facebook.com/groups/Groton.NY.Fire.Dept/",
        },
        {
          id: "8",
          name: "Ithaca Fire Department",
          url: "https://cityofithaca.org/204/Ithaca-Fire-Department",
        },
        {
          id: "9",
          name: "Lansing Fire Department",
          url: "https://www.facebook.com/LansingFireDepartmentInc/",
        },
        {
          id: "10",
          name: "McLean Fire Department",
          url: "https://www.facebook.com/McLean-Fire-and-Rescue-NY-242614371114/",
        },
        {
          id: "11",
          name: "Newfield Fire Department",
          url: "https://www.firedepartment.net/directory/new-york/tompkins-county/newfield/newfield-fire-company",
        },
        {
          id: "12",
          name: "West Danby Fire Department",
          url: "https://www.westdanbyfire.com/",
        },
        {
          id: "13",
          name: "Slaterville Springs Volunteer Fire & Ambulance",
          url: "https://www.facebook.com/SlatervilleAmbulance/",
        },
        {
          id: "14",
          name: "Speedsville Volunteer Fire Company",
          url: "http://speedsville.com/",
        },
        {
          id: "15",
          name: "Trumansburg Fire Department",
          url: "http://trumansburgfire.com/",
        },
        {
          id: "16",
          name: "Varna Volunteer Fire Company",
          url: "https://www.varnafire.org/",
        },
        {
          id: "17",
          name: "Ithaca Tompkins Regional Airport",
          url: "https://flyithaca.com/",
        },
      ],
      otherFireLinks: [
        {
          id: "18",
          name: "Candor Fire Department",
          url: "http://www.candorfire.org/",
        },
        {
          id: "19",
          name: "Spencer Fire Company",
          url: "https://www.facebook.com/Spencer-Fire-Department-395624433842838/",
        },
        // Hiding this until we have the correct link for Tompkins County Fire & EMS.
        // {
        //   id: "20",
        //   name: "Tompkins County Fire & EMS",
        //   url: "",
        // },
        {
          id: "21",
          name: "Cortland County Fire/Emergency Management",
          url: "http://www.cortland-co.org/242/Emergency-Response-Communications",
        },
        {
          id: "22",
          name: "Meridian Fire Training",
          url: "http://meridianfiretraining.com/",
        },
        {
          id: "23",
          name: "NYS Office of Fire Prevention & Control",
          url: "https://www.dhses.ny.gov/office-fire-prevention-and-control",
        },
        {
          id: "24",
          name: "NYS Fire Academy",
          url: "https://www.dhses.ny.gov/firefighter-and-emergency-service-resources",
        },
        {
          id: "25",
          name: "U.S. Fire Administration",
          url: "https://www.usfa.fema.gov/",
        },
        {
          id: "26",
          name: "National Fire Protection Association",
          url: "https://www.nfpa.org/",
        },
      ],
      emergencyMedicalLinks: [
        {
          id: "27",
          name: "Bangs Ambulance",
          url: "https://www.bangsambulance.com/",
        },
        {
          id: "28",
          name: "Cayuga Medical Center",
          url: "http://www.cayugamed.org/",
        },
        {
          id: "29",
          name: "LifeNet / Guthrie Air",
          url: "https://lifenetny.com/",
        },
        {
          id: "30",
          name: "Mercy Flight Central",
          url: "https://mercyflightcentral.org/",
        },
        {
          id: "31",
          name: "Central New York EMS Program",
          url: "https://cnyems.org/",
        },
        {
          id: "32",
          name: "NYS Bureau of EMS",
          url: "https://www.health.ny.gov/professionals/ems/",
        },
      ],
      lawEnfLinks: [
        {
          id: "33",
          name: "Tompkins County Sheriff's Office",
          url: "https://www2.tompkinscountyny.gov/sheriff",
        },
        {
          id: "34",
          name: "New York State Police",
          url: "https://troopers.ny.gov/",
        },
        {
          id: "35",
          name: "NYS Department of Environmental Conservation",
          url: "https://www.dec.ny.gov/index.html",
        },
      ],
      localGovLinks: [
        {
          id: "36",
          name: "Town of Danby",
          url: "https://danby.ny.gov/",
        },
        {
          id: "37",
          name: "Tompkins County",
          url: "https://www2.tompkinscountyny.gov/",
        },
      ],
      localServsLinks: [
        {
          id: "38",
          name: "Tompkins County Health Department",
          url: "https://www2.tompkinscountyny.gov/health",
        },
        {
          id: "39",
          name: "TompkinsREADY - Emergency Preparation",
          url: "https://www2.tompkinscountyny.gov/tompkinsready",
        },
        {
          id: "40",
          name: "American Red Cross, Southern Tier Chapter",
          url: "https://www.redcross.org/local/new-york/western-new-york/about-us/locations/southern-tier-chapter.html",
        },
      ],
    };
  },
};
</script>
