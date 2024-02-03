const hexBtn = document.querySelector(".hex-Btn");
const hexColorValue = document.querySelector(".hex-color-value");
const hexColorContainer = document.querySelector(".hex-color-container");
const hexCopyBtn = document.querySelector(".hex-copy-color");

hexBtn.addEventListener("click", () => {
  let characterSet = "0123456789ABCDEF";
  let hexColorOutput = "";

  for (let i = 0, charSetLength = characterSet.length; i < 6; ++i) {
    hexColorOutput += characterSet.charAt(
      Math.floor(Math.random() * charSetLength)
    );
  }
  hexColorValue.textContent = `#${hexColorOutput}`;
  hexColorContainer.style.backgroundColor = `#${hexColorOutput}`;
  hexBtn.style.color = `#${hexColorOutput}`;

  console.log(hexColorOutput);
});

// RGB Color Generator================

const rgbBtn = document.querySelector(".rgb-btn");
const getRedInputRange = document.querySelector("#red");
const getGreenInputRange = document.querySelector("#green");
const getBlueInputRange = document.querySelector("#blue");
const rgbColorContainer = document.querySelector(".rgb-color-container");
const rgbCopyBtn = document.querySelector(".rgb-copy-color");
const rgbColorValue = document.querySelector(".rgb-color-value");

rgbBtn.addEventListener("click", () => {
  let extractRedValue = getRedInputRange.value;
  let extractGreenValue = getGreenInputRange.value;
  let extractBlueValue = getBlueInputRange.value;
  rgbColorValue.textContent = `rgb(${extractRedValue}, ${extractGreenValue}, ${extractBlueValue})`;
  rgbColorContainer.style.backgroundColor = `rgb(${extractRedValue}, ${extractGreenValue}, ${extractBlueValue})`;
  rgbBtn.style.color = `rgb(${extractRedValue}, ${extractGreenValue}, ${extractBlueValue})`;

  //   console.log(extractRedValue, extractGreenValue, extractBlueValue);
});

// Copy To Clipboard hexColor =========================

function copyHexColorToClipboard() {
  try {
    console.log(hexColorValue.textContent);
    navigator.clipboard
      .writeText(hexColorValue.textContent)
      .then(() => {
        console.log(hexColorValue.textContent);
        alert("Hex Color is copied to clipboard");
      })
      .catch((err) => {
        console.error("Unable to copy to clipboard", err);
        alert("Failed to copy Hex Color to clipboard");
      });
  } catch (err) {
    console.error("Error accessing hex color value", err);
    alert("Failed to copy Hex Color to clipboard");
  }
}

hexCopyBtn.addEventListener("click", copyHexColorToClipboard);

function copyRgbColorToClipboard() {
  try {
    console.log(rgbColorValue.textContent);
    navigator.clipboard
      .writeText(rgbColorValue.textContent)
      .then(() => {
        console.log(rgbColorValue.textContent);
        alert("rgb Color is copied to clipboard");
      })
      .catch((err) => {
        console.error("Unable to copy to clipboard", err);
        alert("Failed to copy rgb Color to clipboard");
      });
  } catch (err) {
    console.error("Error accessing hex color value", err);
    alert("Failed to copy rgb Color to clipboard");
  }
}

// function copyRgbColorToClipboard() {
//   navigator.clipboard.writeText(rgbColorValue);
//   alert("RGB Color is copied to clipboard");
// }

rgbCopyBtn.addEventListener("click", copyRgbColorToClipboard);
