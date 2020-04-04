<template>
  <section class="bg-gray-200 lg:py-12">
    <div
      class="container px-6 lg:px-8 mx-auto py-12 flex flex-col items-center"
    >
      <h2 class="text-3xl font-semibold text-gray-800 text-center">
        Tech Stacks
      </h2>
      <p
        class="text-lg max-w-xl text-center mt-4 leading-relaxed text-gray-700"
      >
        We strive to stay on the frontline of new standards and leading
        technologies. We will always adopt and evaluate new opportunities for
        your business needs.
      </p>
      <div class="flex justify-center flex-wrap -mx-4 mt-6 lg:mt-12">
        <g-image
          v-for="logo in logos"
          :key="logo.name"
          :src="logo.source"
          :alt="logo.name"
          width="256"
          immediate="true"
          class="logo object-contain mx-5 lg:mx-10 my-8"
        />
      </div>
    </div>
  </section>
</template>

<script>
import JavascriptImage from "~/assets/images/tech-stacks/javascript.svg";
import TypescriptImage from "~/assets/images/tech-stacks/typescript.svg";
import ReactImage from "~/assets/images/tech-stacks/react.svg";
import VueImage from "~/assets/images/tech-stacks/vuejs.svg";
import AngularImage from "~/assets/images/tech-stacks/angular.svg";
import NextImage from "~/assets/images/tech-stacks/nextjs.svg";
import NuxtImage from "~/assets/images/tech-stacks/nuxt.svg";
import NodeImage from "~/assets/images/tech-stacks/nodejs.svg";
import ExpressImage from "~/assets/images/tech-stacks/express.svg";
import FirebaseImage from "~/assets/images/tech-stacks/firebase.svg";
import FlutterImage from "~/assets/images/tech-stacks/flutter.svg";
import PwaImage from "~/assets/images/tech-stacks/pwa.svg";

export default {
  data() {
    return {
      logos: [
        {
          name: "js",
          source: JavascriptImage
        },
        {
          name: "ts",
          source: TypescriptImage
        },
        {
          name: "react",
          source: ReactImage
        },
        {
          name: "vue",
          source: VueImage
        },
        {
          name: "angular",
          source: AngularImage
        },
        {
          name: "nextjs",
          source: NextImage
        },
        {
          name: "nuxtjs",
          source: NuxtImage
        },
        {
          name: "nodejs",
          source: NodeImage
        },
        {
          name: "express",
          source: ExpressImage
        },
        {
          name: "firebase",
          source: FirebaseImage
        },
        {
          name: "flutter",
          source: FlutterImage
        },
        {
          name: "pwa",
          source: PwaImage
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.logo {
  max-width: 64px;
  max-height: 48px;

  @media (min-width: 1024px) {
    max-width: 80px;
    max-height: 56px;
  }
}
</style>
