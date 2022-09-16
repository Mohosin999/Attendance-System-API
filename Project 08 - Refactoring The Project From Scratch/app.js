/**
 * Project Requirements:
 * - Change the background color by generating random hex color by clicking a button
 * - Also display the hex code to a disabled input field
 * - Add a button to copy the color code
 * - Add a toast message when copied
 * - User can type their own hex code too
 * - show rgb color too, but do not need to edit it
 * - user can also copy the rgb color code
 */

/**
 * Steps
 * 1. create onload handler
 * 2. random color generator function
 * 3. collect all necessary dom references
 * 4. handle the change button click event
 * 5. handle the copy button click event
 * 6. activate toast message
 * 7. create a dynamic toast message
 * 8. clear toast message
 * 9. create isValidHex function
 * 10. implement change handler on input field
 * 11. prevent copying hex code if it is not valid
 * 12. refactor the color generator function
 * 13. update change color code to display rbg colors
 * 14. create hex to rgb function
 * 15. update change handler
 * 16. implement copy function
 */

// Globals
let div = null;

// onload handler
window.onload = () => {
  main();
};

function main() {
  // dom references
  const root = document.getElementById("root");
  const output = document.getElementById("output");
  const output2 = document.getElementById("output2");
  const changeBtn = document.getElementById("change-btn");
  const copyBtn = document.getElementById("copy-btn");
  const copyBtn2 = document.getElementById("copy-btn2");

  // change button event listener & handler
  changeBtn.addEventListener("click", function () {
    const color = generateColorDecimal();
    const hex = generateHexColor(color);
    const rgb = generateRGBColor(color);
    root.style.backgroundColor = hex;
    output.value = hex.substring(1);
    output2.value = rgb;
  });

  // copy button event listener & handler
  copyBtn.addEventListener("click", function () {
    navigator.clipboard.writeText(`#${output.value}`);
    if (div !== null) {
      div.remove();
      div = null;
    }
    // prevent copying invalid color code
    if (isValidHex(output.value)) {
      generateToastMessage(`#${output.value} copied`);
    } else {
      alert("Invalid color code");
    }
  });

  copyBtn2.addEventListener("click", function () {
    navigator.clipboard.writeText(output2.value);
    if (div !== null) {
      div.remove();
      div = null;
    }
    generateToastMessage(`${output2.value} copied`);
  });

  // input field change handler
  output.addEventListener("keyup", function (e) {
    const color = e.target.value;
    if (color) {
      output.value = color.toUpperCase();
      if (isValidHex(color)) {
        root.style.backgroundColor = `#${color}`;
        output2.value = hexToRgb(color);
      }
    }
  });
}

/**
 * function - 01
 * generate three random decimal number for red, green and blue
 * @returns as a object
 */
function generateColorDecimal() {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);

  return { red, green, blue };
}

// function 2 - generate hex color code
function generateHexColor({ red, green, blue }) {
  const getTwoCode = (value) => {
    const hex = value.toString(16);
    return hex.length === 1 ? `0${hex}` : hex;
  };

  return `#${getTwoCode(red)}${getTwoCode(green)}${getTwoCode(
    blue
  )}`.toUpperCase();
}

// function 3 - generate rgba color code
function generateRGBColor({ red, green, blue }) {
  return `rgb(${red}, ${green}, ${blue})`;
}

/**
 * convert hex color to rgb
 * @param {string} hex
 */
function hexToRgb(hex) {
  const red = parseInt(hex.slice(0, 2), 16);
  const green = parseInt(hex.slice(2, 4), 16);
  const blue = parseInt(hex.slice(4), 16);

  return `rgb(${red}, ${green}, ${blue})`;
}

// activate or generate a toast message
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
 * isValidHex function
 * @param {string} color
 */
function isValidHex(color) {
  if (color.length !== 6) return false;
  return /^[0-9A-Fa-f]{6}$/i.test(color);
}
