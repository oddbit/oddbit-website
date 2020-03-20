<template>
  <footer class="bg-gray-900 pt-16 py-4">
    <div class="container mx-auto px-6 lg:px-8 flex flex-col items-center">
      <a href="/" class="flex flex-col items-center">
        <g-image
          src="~/assets/images/oddbit.svg"
          alt="Oddbit"
          width="256"
          class="w-16"
        />
        <span class="font-bold text-primary uppercase text-xl">Oddbit</span>
      </a>
      <nav class="my-4 flex flex-row flex-wrap justify-center">
        <g-link
          v-for="item in navItems"
          :key="item.name"
          :to="item.to"
          exact
          class="text-sm tracking-widest text-white font-medium mx-2 lg:mx-4 first:ml-0 last:mr-0 uppercase my-1 lg:my-0"
          >{{ item.name }}</g-link
        >
      </nav>
      <div class="flex flex-col text-white lg:items-center my-2 font-light">
        <a
          href="https://g.page/kembalihub?share"
          target="_blank"
          class="flex mb-2"
        >
          <AddressIcon class="flex-shrink-0" />
          <span class="ml-2"
            >Jl. Sunset Road No.28, Seminyak, Kuta, Kabupaten Badung, Bali
            80361</span
          >
        </a>
        <a href="mailto:contact@oddbit.id" target="_blank" class="flex">
          <EmailIcon class="flex-shrink-0" />
          <span class="ml-2">contact@oddbit.id</span>
        </a>
      </div>
      <div class="text-white flex flex-wrap justify-center socmed mt-4 -mx-4">
        <a
          v-for="item in socmeds"
          :key="item.link"
          :href="item.link"
          target="_blank"
          class="mx-4 my-1 lg:my-0"
        >
          <span :is="item.icon"></span>
        </a>
      </div>
      <span class="border-b w-10 my-6"></span>
      <span class="text-white font-light"
        >&copy; Oddbit. All rights reserved.</span
      >
    </div>
  </footer>
</template>

<script>
import AddressIcon from "~/components/icons/Address";
import EmailIcon from "~/components/icons/Email";
import InstagramIcon from "~/components/icons/Instagram";
import FacebookIcon from "~/components/icons/Facebook";
import TwitterIcon from "~/components/icons/Twitter";
import MediumIcon from "~/components/icons/Medium";
import LinkedinIcon from "~/components/icons/Linkedin";
import GithubIcon from "~/components/icons/Github";

export default {
  components: {
    AddressIcon,
    EmailIcon,
    FacebookIcon,
    InstagramIcon,
    TwitterIcon,
    MediumIcon,
    LinkedinIcon,
    GithubIcon
  },
  data() {
    return {
      navItems: [
        {
          name: "Team",
          to: "/team"
        },
        {
          name: "Career",
          to: "/career"
        }
      ],
      socmeds: [
        {
          link: "https://instagram.com/oddbit.id",
          icon: InstagramIcon
        },
        {
          link: "https://www.facebook.com/oddbit",
          icon: FacebookIcon
        },
        {
          link: "https://twitter.com/evenbit",
          icon: TwitterIcon
        },
        {
          link: "https://medium.com/evenbit",
          icon: MediumIcon
        },
        {
          link: "https://www.linkedin.com/company/oddbit",
          icon: LinkedinIcon
        },
        {
          link: "https://github.com/oddbit",
          icon: GithubIcon
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.socmed {
  a /deep/ svg {
    width: 32px !important;
    height: 32px !important;
  }
}
</style>
