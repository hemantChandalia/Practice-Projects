const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");

menuBtn.addEventListener("click", () => {
  sideMenu.style.display = "block";
});

// closeBtn.addEventListener('click', ()=> {
//     sideMenu.style.display = 'none;
// })

// functionality in theme toggler ==============

// Adding the toggle functionality==============

document.addEventListener("DOMContentLoaded", function () {
  // Check for saved theme preference or use default
  const currentTheme = localStorage.getItem("theme") || "light-theme";
  document.body.classList.add(currentTheme);

  // Dark mode button click event
  document
    .getElementById("darkModeToggle")
    .addEventListener("click", function () {
      document.body.classList.remove("light-theme");
      document.body.classList.add("dark-theme");
      // console.log("document container >>>", document.getElementsByClassName("container"))
      // document.getElementsByClassName("container")[0].style.backgroundColor="#000"
      localStorage.setItem("theme", "dark-theme");
    });

  // Light mode button click event
  document
    .getElementById("lightModeToggle")
    .addEventListener("click", function () {
      document.body.classList.add("light-theme");
      // document.getElementsByClassName("container")[0].style.backgroundColor="#fff"

      document.body.classList.remove("dark-theme");
      localStorage.setItem("theme", "light-theme");
    });
});
