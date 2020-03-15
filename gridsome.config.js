// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "Oddbit",
  siteUrl: "https://www.oddbit.id",
  siteDescription:
    "Oddbit is a software development agency based in Bali, that helps to translate your business needs into a technical solutions.",
  icon: "./src/assets/favicon.png",
  plugins: [
    {
      use: "gridsome-plugin-tailwindcss"
    }
  ]
};
