// loader
// enter button activtion
// light box for photos open together
// photo clickable
// random photos at home page
//  more photos at home page instead of 3
// theme dark
// adding better css
// header >> images keep repeating like Pexel
// navbar
// search button attractivness
// make website like Pexel and Yandex
// add signup and login pages
// add navbar with functionality

const accessKey = "4CW4fmD5UhhB1SumLRtm9zLfdUamebyFKmFf12uZq0U";

const formEl = document.querySelector("form");
const inputEl = document.getElementById("search-input");
const searchResults = document.querySelector(".search-results");
const showMore = document.getElementById("show-more-button");
const randomCategory = [
  "car",
  "mountains",
  "bollywood",
  "apple",
  "table",
  "laptop",
];

let inputDate =
  randomCategory[Math.floor(Math.random() * randomCategory.length)];
let page = 1;

async function searchImages() {
  if (inputEl.value) {
    inputDate = inputEl.value;
  }
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputDate}&client_id=${accessKey}`;

  const response = await fetch(url);
  const data = await response.json();

  const results = data.results;

  if (page === 1) {
    searchResults.innerHTML = "";
  }

  results.map((result) => {
    const imageWrapper = document.createElement("div");
    imageWrapper.classList.add("search-result");
    const image = document.createElement("img");
    image.src = result.urls.small;
    image.alt = result.alt_description;
    const imageLink = document.createElement("a");
    imageLink.href = result.links.html;
    // document.imageLink.style.searchresult.backgroundColor = "red";
    imageLink.target = "_blank";
    imageLink.textContent = result.alt_description;
    // >>>>>>>>>>*********<<<<<<>>>>>>>>

    // document.getElementById("anchorcolor").style.backgroundColor = "red";

    imageWrapper.appendChild(image);
    imageWrapper.appendChild(imageLink);
    searchResults.appendChild(imageWrapper);
  });
  page++;

  if (page > 1) {
    showMore.style.display = "block";
  }
}

formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  page = 1;
  searchImages();
});

showMore.addEventListener("click", () => {
  searchImages();
});
document.addEventListener("DOMContentLoaded", function () {
  // Get all the image elements with the class 'search-result'
  var imageElements = document.querySelectorAll(".search-result img");

  // Add a click event listener to each image element
  imageElements.forEach(function (img) {
    img.addEventListener("click", function () {
      // Get the source (src) attribute of the clicked image
      var imageUrl = img.getAttribute("src");

      // Open the image in a new tab
      window.open(imageUrl, "_blank");
    });
  });
});

// adding the random photos=======================

function fetchRandomPhoto() {
  const randomPhoto = document.getElementById("randomPhoto");

  // Replace 'your-access-key' with your actual Unsplash Access Key
  const accessKey = "your-access-key";
  const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${accessKey}`;

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      // Get the URL of the random photo
      const photoUrl = data.urls.regular;

      // Set the image source
      randomPhoto.src = photoUrl;
    })
    .catch((error) => {
      console.error("Error fetching random photo:", error);
    });
}

// Initial call to fetch a random photo
// fetchRandomPhoto();
searchImages();

// navbar functionality=========================

function openInNewTab(sectionId) {
  let section = document.querySelector(sectionId);
  if (section) {
    let url = window.location.href.split("#")[0] + sectionId;
    window.open(url, "_blank");
  }

  // console.log("openInNewTab >>> sectionId", document.querySelector(sectionId));
  // document.querySelector(sectionId).scrollIntoView({
  //   behavior: "smooth",
  // });
}

// theme mode functionality==================

// function toggleDarkMode() {
//   const body = document.body;
//   body.classList.add.toggle("darkMode");

// }
document.addEventListener("DOMContentLoaded", function () {
  // Check for saved theme preference or use default
  const currentTheme = localStorage.getItem("theme") || "light-theme";
  document.body.classList.add(currentTheme);

  // Dark mode button click event
  document.getElementById("darkMode").addEventListener("click", function () {
    document.body.classList.remove("light-theme");
    document.body.classList.remove("toggleOff");

    document.body.classList.add("dark-theme");
    document.body.classList.add("toggleOn");
    // console.log("document container >>>", document.getElementsByClassName("container"))
    // document.getElementsByClassName("container")[0].style.backgroundColor="#000"
    localStorage.setItem("theme", "dark-theme");
  });

  // Light mode button click event
  document.getElementById("lightMode").addEventListener("click", function () {
    document.body.classList.add("light-theme");
    document.body.classList.add("toggleOff");

    // document.getElementsByClassName("container")[0].style.backgroundColor="#fff"

    document.body.classList.remove("dark-theme");
    document.body.classList.remove("toggleOn");

    localStorage.setItem("theme", "light-theme");
  });
});

function toggleTheme() {
  const currentTheme = localStorage.getItem("theme") || "light-theme";
  document.body.classList.add(currentTheme);
  let toggleButton = document.getElementById("toggle-handle");
  if (currentTheme == "light-theme") {
    document.body.classList.remove("light-theme");
    document.body.classList.add("dark-theme");
    localStorage.setItem("theme", "dark-theme");
    toggleButton.innerHTML = "toggle_off";
  } else {
    document.body.classList.add("light-theme");
    document.body.classList.remove("dark-theme");
    localStorage.setItem("theme", "light-theme");
    toggleButton.innerHTML = "toggle_on";
  }
}

