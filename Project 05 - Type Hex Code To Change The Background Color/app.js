/**
 * Project Requirements:
 * - Change the background color by generating random hex color by clicking a button
 * - Also display the hex code to a disabled input field
 * - Add a button to copy the color code
 * - Add a toast message when copied
 * - User can type their own hex code too
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
  const changeBtn = document.getElementById("change-btn");
  const copyBtn = document.getElementById("copy-btn");

  // change button event listener & handler
  changeBtn.addEventListener("click", function () {
    const bgColor = generateHexColor();
    root.style.backgroundColor = bgColor;
    output.value = bgColor;
  });

  // copy button event listener & handler
  copyBtn.addEventListener("click", function () {
    navigator.clipboard.writeText(output.value);
    if (div !== null) {
      div.remove();
      div = null;
    }

    // prevent copying invalid color code
    if (isValidHex(output.value)) {
      generateToastMessage(`${output.value} copied`);
    } else {
      alert("Invalid color code");
    }
  });

  // input field change handler
  output.addEventListener("keyup", function (e) {
    const color = e.target.value;
    if (color && isValidHex(color)) {
      root.style.backgroundColor = color;
    }
  });
}

// random color generator function
function generateHexColor() {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);

  return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
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
  if (color.length !== 7) return false;
  if (color[0] !== "#") return false;

  color = color.substring(1);
  return /^[0-9A-Fa-f]{6}$/i.test(color);
}
