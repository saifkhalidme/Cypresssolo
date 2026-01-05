const { defineConfig } = require("cypress");
const dotenv = require("dotenv");

dotenv.config({ path: ".env.orangehrmlogin" });
module.exports = defineConfig({
  e2e: {
    execTimeout: 70000,
     
    setupNodeEvents(on, config) {
     baseUrl = process.env.CYPRESS_BASE_URL;
     return config;
    },
  },
});
