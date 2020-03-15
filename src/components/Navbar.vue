<template>
  <header
    class="container px-6 lg:px-8 mx-auto flex flex-col lg:flex-row justify-center lg:justify-between items-center py-2 lg:py-4 sticky z-10 border-b border-gray-400 lg:border-b-0"
  >
    <g-link to="/" class="flex items-center my-1 lg:my-0">
      <g-image
        src="~/assets/images/oddbit-logo.png"
        alt="Oddbit"
        width="256"
        class="mr-2 w-8 lg:w-12"
      />
      <span
        class="text-primary text-lg lg:text-2xl font-bold uppercase"
      >{{$static.metadata.siteName}}</span>
    </g-link>
    <nav
      class="nav lg:block self-center lg:self-center mt-1 lg:mt-0 -mx-2 flex flex-wrap justify-center"
    >
      <g-link
        v-for="item in navItems"
        :key="item.name"
        :to="item.to"
        exact
        class="text-md tracking-wide text-gray-800 hover:text-primary font-medium mx-2 lg:mx-4 lg:first:ml-0 lg:last:mr-0 capitalize lg:uppercase"
      >{{item.name}}</g-link>
    </nav>
  </header>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
export default {
  data() {
    return {
      navItems: [
        {
          name: "Home",
          to: "/"
        },
        {
          name: "Team",
          to: "/team"
        },
        {
          name: "Career",
          to: "/career"
        }
      ]
    };
  }
};
</script>

<style scoped>
.nav .active {
  @apply text-primary;
}
</style>
