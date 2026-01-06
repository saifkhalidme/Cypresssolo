const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    execTimeout: 70000,

    setupNodeEvents(on, config) {
      // no env configuration
      return config;
    },
  },

  reporter: "mochawesome",
  reporterOptions: {
    reportDir: "cypress/reports",
    overwrite: false,
    html: false,
    json: true,
  },
});
