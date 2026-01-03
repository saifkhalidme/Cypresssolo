Cypress.on('fail', (error) => {
  if (error.message.includes('Timed out after waiting 60000ms for your remote page to load.')) {
    return false; // prevent Cypress from failing the test
  }
  throw error;
});

//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'