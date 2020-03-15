<template>
  <Layout>
    <Welcome />
    <OurServices />
    <OurClients />
    <TechStacks />
    <OurTeam />
    <Culture />
    <ContactUs />
  </Layout>
</template>

<script>
import Welcome from "~/components/Welcome";
import OurServices from "~/components/OurServices";
import OurClients from "~/components/OurClients";
import TechStacks from "~/components/TechStacks";
import OurTeam from "~/components/OurTeam";
import Culture from "~/components/Culture";
import ContactUs from "~/components/ContactUs";

export default {
  components: {
    Welcome,
    OurServices,
    OurClients,
    TechStacks,
    OurTeam,
    Culture,
    ContactUs
  },
  metaInfo: {
    title: "Profesional developer team in Bali",
    description:
      "Oddbit is a software development agency based in Bali, that helps to translate your business needs into a technical solutions."
  }
};
</script>
