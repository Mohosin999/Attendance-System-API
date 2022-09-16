/**
 * Date: 15-09-2022
 * Author: Mohosin Hasan Akash
 * Description: Color picker application with huge dom functionalities
 */

// Globals
let div = null;

// onload handler
window.onload = () => {
  main();
};

// main function
function main() {
  // dom references
  const generateRandomColorBtn = document.getElementById(
    "generate-random-color"
  );
  // const root = document.getElementById("root");
  // const output = document.getElementById("output");
  // const output2 = document.getElementById("output2");
  // const changeBtn = document.getElementById("change-btn");
  // const copyBtn = document.getElementById("copy-btn");
  // const copyBtn2 = document.getElementById("copy-btn2");

  // event listeners
  generateRandomColorBtn.addEventListener(
    "click",
    handleGenerateRandomColorBtn
  );

  // copy button event listener & handler
  // copyBtn.addEventListener("click", function () {
  //   navigator.clipboard.writeText(`#${output.value}`);
  //   if (div !== null) {
  //     div.remove();
  //     div = null;
  //   }
  //   // prevent copying invalid color code
  //   if (isValidHex(output.value)) {
  //     generateToastMessage(`#${output.value} copied`);
  //   } else {
  //     alert("Invalid color code");
  //   }
  // });

  // copyBtn2.addEventListener("click", function () {
  //   navigator.clipboard.writeText(output2.value);
  //   if (div !== null) {
  //     div.remove();
  //     div = null;
  //   }
  //   generateToastMessage(`${output2.value} copied`);
  // });

  // // input field change handler
  // output.addEventListener("keyup", function (e) {
  //   const color = e.target.value;
  //   if (color) {
  //     output.value = color.toUpperCase();
  //     if (isValidHex(color)) {
  //       root.style.backgroundColor = `#${color}`;
  //       output2.value = hexToRgb(color);
  //     }
  //   }
  // });
}

// event handlers
function handleGenerateRandomColorBtn() {
  const color = generateColorDecimal();
  updateColorCodeToDom(color);
}

// DOM functions

/**
 * Generate a dynamic DOM element to show a toast message
 * @param {string} msg
 */
function generateToastMessage(msg) {
  div = document.createElement("div");
  div.innerText = msg;
  div.className = "toast-message toast-message-slide-in";

  div.addEventListener("click", function () {
    div.classList.remove("toast-message-slide-in");
    div.classList.add("toast-message-slide-out");

    div.addEventListener("animationend", function () {
      div.remove();
      div = null;
    });
  });

  document.body.appendChild(div);
}

/**
 * update dom elements with calculated color values
 * @param {object} color
 */
function updateColorCodeToDom(color) {
  const hexColor = generateHexColor(color);
  const rgbColor = generateRGBColor(color);

  document.getElementById(
    "color-display"
  ).style.backgroundColor = `#${hexColor}`;
  document.getElementById("input-hex").value = hexColor;
  document.getElementById("input-rgb").value = rgbColor;
  document.getElementById("color-slider-red").value = color.red;
  document.getElementById("color-slider-red-label").innerText = color.red;
  document.getElementById("color-slider-green").value = color.green;
  document.getElementById("color-slider-green-label").innerText = color.green;
  document.getElementById("color-slider-blue").value = color.blue;
  document.getElementById("color-slider-blue-label").innerText = color.blue;
}

// utils

/**
 * generate and return an object of three color decimal values
 * @returns {object}}
 */
function generateColorDecimal() {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);

  return { red, green, blue };
}

/**
 * take a color object of three decimal values and return a hexadecimal color code
 * @param {object} param
 * @returns {string}
 */
function generateHexColor({ red, green, blue }) {
  const getTwoCode = (value) => {
    const hex = value.toString(16);
    return hex.length === 1 ? `0${hex}` : hex;
  };

  return `#${getTwoCode(red)}${getTwoCode(green)}${getTwoCode(
    blue
  )}`.toUpperCase();
}

/**
 * take a color object of three decimal values and return a rgb color code
 * @param {object} color
 * @returns {string}
 */
function generateRGBColor({ red, green, blue }) {
  return `rgb(${red}, ${green}, ${blue})`;
}

/**
 * convert hex color to decimal colors object
 * @param {string} hex
 * @returns {object}
 */
function hexToDecimalColors(hex) {
  const red = parseInt(hex.slice(0, 2), 16);
  const green = parseInt(hex.slice(2, 4), 16);
  const blue = parseInt(hex.slice(4), 16);

  return {
    red,
    green,
    blue,
  };
}

/**
 * validate hex color code
 * @param {string} color;
 * @returns {boolean}
 */
function isValidHex(color) {
  if (color.length !== 6) return false;
  return /^[0-9A-Fa-f]{6}$/i.test(color);
}
