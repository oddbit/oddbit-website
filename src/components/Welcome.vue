<template>
  <section class="overflow-hidden relative min-h-screen flex -mt-85 lg:-mt-80">
    <div
      class="container px-6 lg:px-8 mx-auto flex flex-col-reverse lg:flex-row justify-center py-85 lg:py-0"
    >
      <div class="lg:w-1/3 flex flex-col justify-center">
        <h1
          class="text-xl leading-normal lg:leading-tight text-center lg:text-left lg:text-4xl font-semibold text-gray-800 leading-tight mb-2 lg:mb-4"
        >
          Looking for software developer team?
        </h1>
        <p
          class="lg:text-xl text-gray-700 leading-relaxed text-center lg:text-left"
        >
          We are here to translate and realize your business needs into a
          technical solution.
        </p>
        <div class="flex justify-center lg:self-start">
          <button
            class="bg-primary py-2 px-4 rounded text-gray-800 capitalize font-medium tracking-wide mt-8 shadow-md focus:outline-none hover:bg-secondary hover:text-white"
            @click="anchorGoToOurServices"
          >
            Let me show you
          </button>
        </div>
      </div>
      <div class="lg:flex-1 flex items-center my-8 lg:my-0">
        <g-image
          src="~/assets/images/in-sync.svg"
          alt="Oddbit"
          width="768"
          immediate="true"
          class="object-contain"
        />
      </div>
    </div>
    <g-image
      src="~/assets/images/wave.svg"
      alt="Oddbit wave"
      width="1440"
      immediate="true"
      class="absolute left-0 bottom-0 lg:-mb-80 -z-1"
    />
  </section>
</template>

<script>
export default {
  methods: {
    anchorGoToOurServices() {
      const el = document.getElementById("our-services");
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }
};
</script>
