// Configuration Cypress avec CommonJS
/* eslint-disable */

const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:4173'
  }
});
