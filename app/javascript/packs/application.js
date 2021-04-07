// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"

Rails.start()
Turbolinks.start()
ActiveStorage.start()


// ----------------------------------------------------
// Note(lewagon): ABOVE IS RAILS DEFAULT CONFIGURATION
// WRITE YOUR OWN JS STARTING FROM HERE 👇
// ----------------------------------------------------

// External imports
import "bootstrap";

// Internal imports, e.g:
// import { initSelect2 } from '../components/init_select2';

document.addEventListener('turbolinks:load', () => {
  // Call your functions here, e.g:
  // initSelect2();
  pinkTheme();
  blueTheme();
  greenTheme();
});

const about = document.getElementById("about");

const pinkTheme = () => {
  const themePink = document.querySelector(".theme-pink");
  if (themePink) {
    themePink.addEventListener("click", function() {
      console.log("click");
      about.classList.toggle("theme-pink");
    });
  }
};

const blueTheme = () => {
const themeBlue = document.querySelector(".theme-blue");
  if (themeBlue) {
    themeBlue.addEventListener("click", function() {
      console.log("click");
      about.classList.toggle("theme-blue");
    });
  }
};


const greenTheme = () => {
const greenTheme = document.querySelector(".theme-green");
  if (themeGreen) {
    themeGreen.addEventListener("click", function() {
      console.log("click");
      about.classList.toggle("theme-green");
    });
  }
};
