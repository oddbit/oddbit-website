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
            
              <h3 class="text-gray-700 font-semibold mt-4">Requirements:</h3>
              <ul class="text-gray-700 requirement-list">
                <li>Good knowledge with one or more framework such as Vue, React or Angular</li>
                <li>Previous experience with another language except for Javascript/Typescript
                <li>Good knowledge of NodeJS</li>
                <li>Ability to translate a visual design into HTML and styling</li>
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
              <h3 class="text-gray-700 font-semibold mt-4">Requirements:</h3>
              <ul class="text-gray-700 requirement-list">
                <li>Good knowledge with at least one of iOS or Android</li>
                <li>For iOS developers: good knowledge of Swift</li>
                <li>For Android developers: experience with Kotlin</li>
                <li>Previous experience with a cross-platform framework such as React Native or Flutter</li>
                <li>Ability to translate a visual design into mobile layouts on respective platform</li>
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
                Internships is temporary jobs that provide real-time work experience, often for college students. provide other values such as certificates, job recommendations, mentoring and networking.
              </p>
              <p class="text-gray-700 leading-relaxed my-2">
                Part Time is a job that has half of normal or full time working hours. Part time jobs are temporary for certain periods determined by the company.
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
