<template>
  <Layout>
    <div
      class="container mx-auto px-6 lg:px-8 flex flex-col items-center my-16"
    >
      <div class="my-6 flex flex-col items-center">
        <h1 class="uppercase text-4xl font-bold tracking-wider text-gray-800">
          Our team
        </h1>
        <span class="border-b-2 border-primary w-10 my-2"></span>
        <p class="text-gray-800 text-lg font-light text-center">
          Our team based in Bali with remote team in Jakarta
        </p>
      </div>
      <div class="flex flex-wrap lg:-mx-8 mt-10">
        <div
          v-for="person in people"
          :key="person.name"
          class="flex flex-col w-full md:w-1/2 lg:w-1/4 items-center py-6 md:px-6 lg:p-8 text-center"
        >
          <g-image
            :src="person.picture"
            :alt="person.name"
            width="256"
            immediate="true"
            class="w-32 h-32 rounded-full border-4 border-white mb-1"
          />
          <h4 class="font-bold">{{ person.name }}</h4>
          <h5 class="font-light">{{ person.position }}</h5>
          <span class="border-b border-gray-500 w-10 my-2"></span>
          <p class="text-gray-700 font-light">{{ person.description }}</p>
        </div>
        <!-- Next team -->
        <div
          class="flex flex-col w-full md:w-1/2 lg:w-1/4 items-center py-6 md:px-6 lg:p-8 text-center"
        >
          <g-image
            src="~/assets/images/no-avatar.jpg"
            alt="Oddbit next team"
            width="256"
            immediate="true"
            class="w-32 h-32 rounded-full border-4 border-white mb-1"
          />
          <h4 class="font-bold capitalize">Are you the next?</h4>
          <g-link to="/career" class="font-light text-secondary"
            >Yes, I am</g-link
          >
          <span class="border-b border-gray-500 w-10 my-2"></span>
          <p class="text-gray-700 font-light">
            Be a part of our team and grow together.
          </p>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
import noAvatar from "~/assets/images/no-avatar.jpg";
import Deta from "~/assets/images/teams/deta.jpg";
import Wida from "~/assets/images/teams/wida.jpg";
import Melya from "~/assets/images/teams/melya.jpg";
import Dennis from "~/assets/images/teams/dennis.jpg";
import Ananda from "~/assets/images/teams/ananda.jpg";
import Fery from "~/assets/images/teams/fery.jpg";
import EkaParama from "~/assets/images/teams/eka.jpg";
import Surya from "~/assets/images/teams/surya.jpg";
import Catra from "~/assets/images/teams/catra.jpg";

export default {
  metaInfo: {
    title: "Team"
  },
  data() {
    return {
      people: [
        {
          name: "Dennis Alund",
          position: "CTO",
          description:
            "Google Developers Expert for Firebase and an active community contributor. He is passionate about product development and is certified Google Design Sprint Master",
          picture: Dennis
        },
        {
          name: "Catra Darusman",
          position: "Project Manager",
          description:
            "Experience in various industry from energy to tech and innovation. Highly enthusiast in Innovation, Product, and Business. Certified design sprint facilitator and noodle lover.",
          picture: Catra
        },
        {
          name: "Eka Parama",
          position: "Developer",
          description:
            "Roaming between Mobile Android/iOS and Web technologies.",
          picture: EkaParama
        },
        {
          name: "Surya Adi",
          position: "Mobile Developer",
          description:
            "Starting career as a desktop programmer and passionate in Mobile Apps Development. Focus on IOS, Android, and Flutter. He is Apple fanboy but Android user.",
          picture: Surya
        },
        {
          name: "Fery Syukur",
          position: "Mobile Developer",
          description:
            "Mobile Developer who enjoy to learning and trying new things on Android, IOS and Flutter.",
          picture: Fery
        },
        {
          name: "Ananda Prabawa",
          position: "Web Developer",
          description:
            "JavaScript enthusiast and focusing on frontend development as well as backend. He is also likes anythings about startup.",
          picture: Ananda
        },
        {
          name: "Deta Utama",
          position: "Web Developer",
          description: "Focusing on frontend development. HTML, CSS, and JavaScript are his favorite things to work with. He loves to share and active in community about social and technology",
          picture: Deta
        },
        {
          name: "Wida",
          position: "Web Developer",
          description: "Web Developer who always happy learning, and she always energetic trying new things on HTML, CSS, Java Script, Angular",
          picture: Wida
        },
        {
          name: "Melya",
          position: "Web Developer",
          description:
            "Like to learning and trying new things about website, with framework and programming languages. She is enjoy the coding and like join in community",
          picture: Melya
        }
      ]
    };
  }
};
</script>
