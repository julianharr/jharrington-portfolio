const themeSwitcher = () => {
  const themePink = document.querySelector(".theme-pink");
  if (themePink) {
    themeSwitch.addEventListener("click", function () {
      document.body.classList.toggle("pink-theme");
    });
  }
};

export { themeSwitcher };
