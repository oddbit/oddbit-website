<template>
  <Layout>
    <div class="container mx-auto px-6 lg:px-8 flex flex-col items-center my-16">
      <div class="my-6 flex flex-col items-center">
        <h1 class="uppercase text-4xl font-bold tracking-wider text-gray-800">Our team</h1>
        <span class="border-b-2 border-primary w-10 my-2"></span>
        <p
          class="text-gray-800 text-lg font-light text-center"
        >Our team based in Bali with remote team in Jakarta</p>
      </div>
      <div class="flex flex-wrap -mx-8 mt-10">
        <div
          v-for="person in people"
          :key="person.name"
          class="flex flex-col w-full md:w-1/3 lg:w-1/4 items-center p-8 lg:py-12 text-center"
        >
          <g-image
            :src="person.picture"
            :alt="person.name"
            width="256"
            class="w-32 h-32 rounded-full border-4 border-white mb-1"
          />
          <h4 class="font-bold">{{person.name}}</h4>
          <h5 class="font-light">{{person.position}}</h5>
          <span class="border-b border-gray-500 w-10 my-2"></span>
          <p class="text-gray-700 font-light">{{person.description}}</p>
        </div>
        <!-- Next team -->
        <div class="flex flex-col w-full md:w-1/3 lg:w-1/4 items-center p-8 lg:py-12 text-center">
          <g-image
            src="~/assets/images/no-avatar.jpg"
            alt="Oddbit next team"
            width="256"
            class="w-32 h-32 rounded-full border-4 border-white mb-1"
          />
          <h4 class="font-bold capitalize">Are you the next?</h4>
          <g-link to="/career" class="font-light text-secondary">Yes, I am</g-link>
          <span class="border-b border-gray-500 w-10 my-2"></span>
          <p class="text-gray-700 font-light">Be a part of our team and grow together.</p>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
import noAvatar from "~/assets/images/no-avatar.jpg";

export default {
  metaInfo: {
    title: "Team"
  },
  data() {
    return {
      people: [
        {
          name: "Dennis Alund",
          position: "Your Position",
          description:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui saepe libero quibusdam, sapiente repudiandae labore excepturi molestiae porro ducimus velit mollitia cumque deleniti! Autem iste modi rem sapiente iure unde?",
          picture: noAvatar
        },
        {
          name: "Ayu",
          position: "Your Position",
          description:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui saepe libero quibusdam, sapiente repudiandae labore excepturi molestiae porro ducimus velit mollitia cumque deleniti! Autem iste modi rem sapiente iure unde?",
          picture: noAvatar
        },
        {
          name: "Catra Darusman",
          position: "Your Position",
          description:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui saepe libero quibusdam, sapiente repudiandae labore excepturi molestiae porro ducimus velit mollitia cumque deleniti! Autem iste modi rem sapiente iure unde?",
          picture: noAvatar
        },
        {
          name: "Eka Parama",
          position: "Your Position",
          description:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui saepe libero quibusdam, sapiente repudiandae labore excepturi molestiae porro ducimus velit mollitia cumque deleniti! Autem iste modi rem sapiente iure unde?",
          picture: noAvatar
        },
        {
          name: "Surya Adi",
          position: "Your Position",
          description:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui saepe libero quibusdam, sapiente repudiandae labore excepturi molestiae porro ducimus velit mollitia cumque deleniti! Autem iste modi rem sapiente iure unde?",
          picture: noAvatar
        },
        {
          name: "Fery Syukur",
          position: "Your Position",
          description:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui saepe libero quibusdam, sapiente repudiandae labore excepturi molestiae porro ducimus velit mollitia cumque deleniti! Autem iste modi rem sapiente iure unde?",
          picture: noAvatar
        },
        {
          name: "Ananda Prabawa",
          position: "Your Position",
          description:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui saepe libero quibusdam, sapiente repudiandae labore excepturi molestiae porro ducimus velit mollitia cumque deleniti! Autem iste modi rem sapiente iure unde?",
          picture: noAvatar
        },
        {
          name: "Deta Utama",
          position: "Your Position",
          description:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui saepe libero quibusdam, sapiente repudiandae labore excepturi molestiae porro ducimus velit mollitia cumque deleniti! Autem iste modi rem sapiente iure unde?",
          picture: noAvatar
        },
        {
          name: "Wida",
          position: "Your Position",
          description:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui saepe libero quibusdam, sapiente repudiandae labore excepturi molestiae porro ducimus velit mollitia cumque deleniti! Autem iste modi rem sapiente iure unde?",
          picture: noAvatar
        },
        {
          name: "Melya",
          position: "Your Position",
          description:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui saepe libero quibusdam, sapiente repudiandae labore excepturi molestiae porro ducimus velit mollitia cumque deleniti! Autem iste modi rem sapiente iure unde?",
          picture: noAvatar
        }
      ]
    };
  }
};
</script>
