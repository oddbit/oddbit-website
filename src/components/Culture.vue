<template>
  <section class="lg:py-12">
    <div class="container mx-auto px-6 lg:px-8 py-12 flex flex-col items-center">
      <h2 class="text-3xl font-semibold text-gray-800">
        <span class="italic font-light">Awesome</span> Culture
      </h2>
      <span class="w-10 border-b-2 border-gray-800 my-2"></span>
      <p
        class="max-w-lg text-center text-gray-700 leading-relaxed"
      >We have extraordinary cultures to support us, make a better workflows and to be productive while working.</p>
      <div class="flex flex-wrap mt-16 lg:-mx-10">
        <div
          v-for="culture in cultures"
          :key="culture.name"
          class="flex flex-col lg:flex-row w-full lg:w-1/2 lg:px-10 box-border my-10 items-center"
        >
          <g-image :src="culture.image" :alt="culture.name" width="256" class="w-40 mb-4 lg:mb-0" />
          <div class="flex flex-col lg:ml-6">
            <h4
              class="font-semibold text-lg mb-1 capitalize text-center lg:text-left"
            >{{culture.name}}</h4>
            <p
              class="text-gray-700 leading-relaxed text-center lg:text-left"
            >{{culture.description}}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import workingHourImage from "~/assets/images/cultures/time-management.svg";
import workingRemotelyImage from "~/assets/images/cultures/working-remotely.svg";
import dailyStandupImage from "~/assets/images/cultures/things-to-say.svg";
import coworkingImage from "~/assets/images/cultures/co-working.svg";

export default {
  data() {
    return {
      cultures: [
        {
          name: "Flexible working hours",
          description:
            "Standard working hours is 9 to 6 with 8 hours from Monday to Friday. But we can start working any time as it's fulfill the responsibility.",
          image: workingHourImage
        },
        {
          name: "Working remotey",
          description:
            "We focused works at office, but we can work remotely if any personal things that make us can't go to office with reasonable reason.",
          image: workingRemotelyImage
        },
        {
          name: "Daily standup",
          description:
            "Our works starting by daily standup. What we did yesterday, what will we do now, and other things the team need to know.",
          image: dailyStandupImage
        },
        {
          name: "Working at Co-working space",
          description:
            "We have 2 places to work. Colony Creative Hub - Plaza Renon, and KE{M}BALI Hub.",
          image: coworkingImage
        }
      ]
    };
  }
};
</script>