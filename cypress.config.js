const { defineConfig } = require("cypress");
require("dotenv").config({
  path: require("path").resolve(process.cwd(), ".env"),
});
module.exports = defineConfig({
  reporter: "mochawesome",

  reporterOptions: {
    reportDir: "cypress/reports",
    overwrite: false,
    html: false,
    json: true,
  },
  e2e: {
    watchForFileChanges: false,
    retries: 2,
    experimentalRunAllSpecs: true,
    setupNodeEvents(on, config) {
      return config;
      // implement node event listeners here
    },
    defaultCommandTimeout: 80000,
    viewportHeight: 1080,
    viewportWidth: 1800,
    pageLoadTimeout: 80000,
    requestTimeout: 80000,
    responseTimeout: 80000,
  },
  env: {
    username: process.env.CYPRESS_USERNAME,
    password: process.env.CYPRESS_PASSWORD,
    jp: {
      username: process.env.CYPRESS_USERNAME,
      password: process.env.CYPRESS_PASSWORD,

    },
  },




});
