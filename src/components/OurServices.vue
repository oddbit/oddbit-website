<template>
  <section id="our-services" class="lg:py-12 bg-gray-100">
    <div class="container px-6 lg:px-8 mx-auto py-12 flex flex-col">
      <div class="flex flex-col lg:flex-row">
        <h2 class="text-3xl font-semibold text-gray-800">Our Services</h2>
        <span
          class="border-b-2 lg:border-b-0 lg:border-r-2 border-gray-800 lg:mx-12 my-6 lg:my-0 w-16 lg:w-auto"
        ></span>
        <p class="max-w-screen-md text-gray-700 leading-relaxed">
          Our team is experts in Firebase integration for applications, which
          can be tailor-made for your need from full Firebase experience to
          none. We will help you to find the right fit for your project needs.
        </p>
      </div>
      <div class="flex flex-col lg:flex-row -mx-4 mt-12 lg:mt-24">
        <div
          v-for="service in services"
          :key="service.title"
          class="bg-white mx-4 rounded-lg shadow-lg p-6 lg:p-10 flex flex-1 flex-col lg:flex-row mb-8 lg:mb-0 items-center"
        >
          <g-image
            :src="service.image"
            :alt="service.title"
            width="512"
            class="w-40 lg:mr-10 mb-8 lg:mb-0 mt-6 lg:mt-0"
          />
          <div>
            <h4
              class="font-semibold text-lg text-gray-800 mb-2 text-center lg:text-left"
            >{{ service.title }}</h4>
            <p
              class="leading-relaxed text-gray-700 text-center lg:text-left"
            >{{ service.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import mobileAppImage from "~/assets/images/mobile-development.svg";
import websiteImage from "~/assets/images/web-development.svg";

export default {
  data() {
    return {
      services: [
        {
          title: "Mobile App Development",
          description:
            "We do mobile app development for Android and iOS following best practices, using Flutter which makes app development faster.",
          image: mobileAppImage
        },
        {
          title: "Website Development",
          description:
            "We are developing sophisticated website using Vue, React, and Angular. With enhanced stacks likes NuxtJS, NextJS, and Angular Universal will ensure the best performance and SEO.",
          image: websiteImage
        }
      ]
    };
  }
};
</script>
