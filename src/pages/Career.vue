<template>
  <Layout>
    <div
      class="container mx-auto px-6 lg:px-8 flex flex-col items-center py-16"
    >
      <h1 class="font-bold text-3xl lg:text-4xl text-gray-800 uppercase">
        Career
      </h1>
      <div class="flex flex-col my-4">
        <div
          class="flex flex-col-reverse lg:flex-row my-8 lg:my-24 lg:items-center"
        >
          <div class="flex-1">
            <div class="max-w-md flex flex-col">
              <h2 class="font-medium text-2xl">Web Developer</h2>
              <p class="text-gray-700 leading-relaxed my-2">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Voluptate eius alias minima quidem dignissimos. Incidunt
                provident mollitia neque voluptatem omnis. Voluptatum maiores
                magni commodi esse quisquam sunt distinctio repellendus magnam!
              </p>
              <h3 class="text-gray-700 font-semibold mt-4">Requirements:</h3>
              <ul class="text-gray-700 requirement-list">
                <li>HTML, CSS/SASS/CSS in JS</li>
                <li>JavaScript</li>
                <li>TypeScript [Optional] (Will be good)</li>
                <li>React/Vue/Angular</li>
                <li>Firebase</li>
                <li>NodeJS</li>
              </ul>
              <div class="mt-6">
                <a
                  href="mailto:contact@oddbit.id?subject=[Career] Web Developer"
                  target="_blank"
                  class="bg-primary py-2 px-4 rounded text-gray-800 font-medium tracking-wide shadow-md focus:outline-none hover:bg-secondary hover:text-white"
                  >Apply as Web Developer</a
                >
              </div>
            </div>
          </div>
          <div class="flex-1 mb-8 lg:mb-0">
            <g-image
              src="~/assets/images/web-developer.svg"
              alt="Web developer career"
              width="768"
              immediate="true"
              class="w-full"
            />
          </div>
        </div>
        <div
          class="flex flex-col-reverse lg:flex-row-reverse my-8 lg:my-24 lg:items-center"
        >
          <div class="flex-1">
            <div class="max-w-md ml-auto">
              <h2 class="font-medium text-2xl">Mobile Developer</h2>
              <p class="text-gray-700 leading-relaxed my-2">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Voluptate eius alias minima quidem dignissimos. Incidunt
                provident mollitia neque voluptatem omnis. Voluptatum maiores
                magni commodi esse quisquam sunt distinctio repellendus magnam!
              </p>
              <h3 class="text-gray-700 font-semibold mt-4">Requirements:</h3>
              <ul class="text-gray-700 requirement-list">
                <li>Dart</li>
                <li>Flutter</li>
                <li>Firebase</li>
              </ul>
              <div class="mt-6">
                <a
                  href="mailto:contact@oddbit.id?subject=[Career] Mobile Developer"
                  target="_blank"
                  class="bg-primary py-2 px-4 rounded text-gray-800 font-medium tracking-wide shadow-md focus:outline-none hover:bg-secondary hover:text-white"
                  >Apply as Mobile Developer</a
                >
              </div>
            </div>
          </div>
          <div class="flex-1 mb-8 lg:mb-0">
            <g-image
              src="~/assets/images/develop-app.svg"
              alt="Mobile developer career"
              width="768"
              immediate="true"
              class="w-full"
            />
          </div>
        </div>
        <div
          class="flex flex-col-reverse lg:flex-row my-8 lg:my-24 lg:items-center"
        >
          <div class="flex-1">
            <div class="max-w-md">
              <h2 class="font-medium text-2xl">Internship/Part Time</h2>
              <p class="text-gray-700 leading-relaxed my-2">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Voluptate eius alias minima quidem dignissimos. Incidunt
                provident mollitia neque voluptatem omnis. Voluptatum maiores
                magni commodi esse quisquam sunt distinctio repellendus magnam!
              </p>
              <h3 class="text-gray-700 font-semibold mt-4">
                Requirements: Depends on position you apply (Web or Mobile)
              </h3>
              <div class="mt-6 flex flex-col lg:flex-row">
                <a
                  href="mailto:contact@oddbit.id?subject=[Career] Part Time Developer"
                  target="_blank"
                  class="bg-primary py-2 px-4 rounded text-gray-800 font-medium tracking-wide shadow-md focus:outline-none hover:bg-secondary hover:text-white lg:mr-2 mb-2 lg:mb-0"
                  >Apply as Part Time</a
                >
                <a
                  href="mailto:contact@oddbit.id?subject=[Career] Internship"
                  target="_blank"
                  class="bg-primary py-2 px-4 rounded text-gray-800 font-medium tracking-wide shadow-md focus:outline-none hover:bg-secondary hover:text-white"
                  >Apply Internship</a
                >
              </div>
            </div>
          </div>
          <div class="flex-1 mb-8 lg:mb-0">
            <g-image
              src="~/assets/images/work-time.svg"
              alt="Web developer career"
              width="768"
              immediate="true"
              class="w-full"
            />
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Career"
  }
};
</script>

<style lang="scss" scoped>
.requirement-list {
  li {
    margin: 4px 0;
    &::before {
      content: "-";
      margin-right: 8px;
      margin-left: 8px;
    }
  }
}
</style>
