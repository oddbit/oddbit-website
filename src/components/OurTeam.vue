<template>
  <section class="bg-gray-100 lg:py-12">
    <div
      class="container mx-auto px-6 lg:px-8 py-12 flex flex-col-reverse lg:flex-row"
    >
      <div class="flex-1 lg:pr-24">
        <h4
          class="uppercase lg:mb-2 font-semibold tracking-widest text-red-500"
        >
          We're hiring!
        </h4>
        <h2 class="text-3xl font-semibold text-gray-800">Our Team</h2>
        <span class="border-b-2 border-gray-700 flex w-16 my-8"></span>
        <p class="text-gray-700 leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          laborum odio mollitia, neque doloribus quibusdam fugit quia
          reprehenderit itaque. Minus sit repellendus eligendi aliquam
          voluptatibus quo delectus quidem. Modi, nisi!
        </p>
        <br />
        <p class="text-gray-700 leading-relaxed">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum facere
          cum recusandae qui. Laboriosam exercitationem, modi id rem eaque minus
          doloribus maxime earum numquam laudantium labore nesciunt placeat.
          Praesentium, numquam.
        </p>
        <g-link to="/team">
          <button
            class="bg-primary py-2 px-4 rounded text-gray-800 capitalize font-medium tracking-wide mt-8 shadow-md focus:outline-none tracking-wide hover:bg-secondary hover:text-white mr-2"
          >
            See our team
          </button>
        </g-link>
        <g-link to="/career">
          <button
            class="bg-primary py-2 px-4 rounded text-gray-800 capitalize font-medium tracking-wide mt-8 shadow-md focus:outline-none tracking-wide hover:bg-secondary hover:text-white"
          >
            Join with us
          </button>
        </g-link>
      </div>
      <div class="flex-1 mb-8 lg:mb-0">
        <div class="relative flex">
          <g-image
            src="~/assets/images/team-oddbit.jpg"
            alt="Oddbit team"
            width="1024"
            class="w-full rounded-lg shadow-xl object-cover z-10"
          />
        </div>
      </div>
    </div>
  </section>
</template>
