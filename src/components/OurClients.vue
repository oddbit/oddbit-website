<template>
  <section class="py-4 bg-white">
    <div class="container px-6 lg:px-8 mx-auto flex flex-col items-center">
      <h2
        class="text-sm font-medium font-light text-gray-500 uppercase my-4 tracking-wider"
      >Our outstanding clients</h2>
      <div class="flex items-center -mx-4 flex-col sm:flex-row">
        <g-image
          v-for="logo in logos"
          :key="logo.name"
          :src="logo.image"
          class="logo object-contain mx-4"
        />
      </div>
    </div>
  </section>
</template>

<script>
import goalLogo from "~/assets/images/clients/goal.png";
import googleLogo from "~/assets/images/clients/google.png";
import thnxLogo from "~/assets/images/clients/thnx.png";

export default {
  data() {
    return {
      logos: [
        {
          name: "Goal",
          image: goalLogo
        },
        {
          name: "Google",
          image: googleLogo
        },
        {
          name: "Thnx",
          image: thnxLogo
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.logo {
  max-width: 80px;
  max-height: 80px;
}
</style>