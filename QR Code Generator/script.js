// works to be done on QR image generato==============
// add theme light and dark mode
//  responsiveness
//     only text adding ?>>>>
//     function onlyLetters(input) {
//     console.log("input >>> ", input)
//     let regex = /\d/
//     console.log("filteredText >>>> ", regex.test(input))
//     let filteredText = input.replace(regex, "")
//     return filteredText

// }

let imgBox = document.getElementById("imgBox");
let qrImage = document.getElementById("qrImage");
let qrText = document.getElementById("qrText");
let shareBtn = document.getElementById("shareBtn");

// generate QR function>>>>>>
function generateQR() {
  if (qrText.value.length > 0) {
    qrImage.src =
      "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
      qrText.value;
    imgBox.classList.add("show-img");
    shareBtn.style.display = "flex";
  } else {
    qrText.classList.add("error");
    setTimeout(() => {
      qrText.classList.remove("error");
    }, 1000);
  }
}
// enter button active >>>>****
var input = document.getElementById("qrText");
input.addEventListener("keypress", function (event) {
  // let t =  onlyLetters(input.value)
  // if(t){
  //     input.value = t
  // }
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("entrbtn").click();
  }
});
// >>>>>>>>>>>>>>>************>>>>>>>>>>>

document.addEventListener("DOMContentLoaded", function () {
  const shareBtn = document.getElementById("shareBtn");

  if (navigator.share) {
    // If the browser supports the Web Share API
    shareBtn.addEventListener("click", function () {
      navigator
        .share({
          url: "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=",
        })
        .then(() => console.log("Shared successfully"))
        .catch((error) => console.error("Error sharing:", error));
    });
  } else {
    // Fallback if the browser doesn't support Web Share API
    shareBtn.addEventListener("click", function () {
      alert("Your browser does not support the share API");
      // You can implement other sharing mechanisms here for unsupported browsers
    });
  }
});

//  add toggle button ==================================

// const body = document.body;
// const toggleButton = document.getElementById('toggle-button');

// // Function to toggle between light and dark themes
// function toggleTheme() {
//     body.classList.add('dark-theme');
// }

// // Event listener for the button click
// toggleButton.addEventListener('click', toggleTheme);

// ===============================....>???????????

document.addEventListener("DOMContentLoaded", function () {
  // Check for saved theme preference or use default
  const currentTheme = localStorage.getItem("theme") || "light-theme";
  document.body.classList.add(currentTheme);

  // Dark mode button click event
  document
    .getElementById("toggle-button")
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
