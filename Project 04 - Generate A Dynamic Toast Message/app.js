/**
 * Project Requirements:
 * - Change the background color by generating random hex color by clicking a button
 * - Also display the hex code to a disabled input field
 * - Add a button to copy the color code
 * - Add a toast message when copied
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
    generateToastMessage(`${output.value} copied`);
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
