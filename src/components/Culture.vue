<template>
  <section class="lg:py-12">
    <div class="container mx-auto px-6 lg:px-8 py-12 flex flex-col items-center">
      <h2 class="text-3xl font-semibold text-gray-800">
        <span class="italic font-light">Awesome</span> Culture
      </h2>
      <span class="w-10 border-b-2 border-gray-800 my-2"></span>
      <p class="max-w-lg text-center text-gray-700 leading-relaxed">
        We have extraordinary cultures to support us, make a better workflows
        and to be productive while working.
      </p>
      <div class="flex flex-wrap mt-16 lg:-mx-10">
        <div
          v-for="culture in cultures"
          :key="culture.name"
          class="flex flex-col lg:flex-row w-full lg:w-1/2 lg:px-10 box-border my-10 items-center"
        >
          <g-image
            :src="culture.image"
            :alt="culture.name"
            width="256"
            immediate="true"
            class="w-40 mb-4 lg:mb-0"
          />
          <div class="flex flex-col lg:ml-6">
            <h4
              class="font-semibold text-lg mb-1 capitalize text-center lg:text-left"
            >{{ culture.name }}</h4>
            <p
              class="text-gray-700 leading-relaxed text-center lg:text-left"
            >{{ culture.description }}</p>
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
            "Standard working hours is 9 to 6 with 8 hours from Monday to Friday. But we have clients is several timezones and a work culture that allow us to flexibly arrange our own hours, as long as we fulfill our responsibilities towards project and team.",
          image: workingHourImage
        },
        {
          name: "Working remotey",
          description:
            "We have a remote working culture, allowing all team members to work from any location. Responsibility to do so is up to the individual to make sure that he or she feels equally present and available to the team and client. We believe in freedom under responsibility. We do emphasize the importance of regular physical presence to build team spirit and social bonds.",
          image: workingRemotelyImage
        },
        {
          name: "Daily standup",
          description:
            "Our work day starts by daily a standup. It is our way to being accountable to ourselves and the team to what we want to accomplish. Day starts only when we have done our daily standup check in",
          image: dailyStandupImage
        },
        {
          name: "Working at Co-working space",
          description:
            "We have two main on site work locations in Bali: Colony Creative Hub in Plaza Renon and KE{M}BALI Innovation Hub in Sunset Road.",
          image: coworkingImage
        }
      ]
    };
  }
};
</script>
