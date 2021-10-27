const { prompt } = require("inquirer");
const logo = require("asciiart-logo");
const db = require(".");
require("console.table");

init();

// Display the logo text and load main prompts
function init() {
    const logoText = logo({ name: "Employee Manager"}).render();
    console.log(logoText);
}

