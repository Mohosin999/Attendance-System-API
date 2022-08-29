// Globals
let div = null;

// onload function
window.onload = () => {
  main();
};

// main function
function main() {
  const root = document.getElementById("root");
  const output = document.getElementById("output");
  const changeBtn = document.getElementById("change-btn");
  const copyBtn = document.getElementById("copy-btn");

  // change btn function
  changeBtn.addEventListener("click", function () {
    const bgColor = generateHexColor();
    root.style.backgroundColor = bgColor;
    output.value = bgColor.substring(1);
  });

  // copy btn function
  copyBtn.addEventListener("click", function () {
    navigator.clipboard.writeText(`#${output.value}`);
    if (div !== null) {
      div.remove();
      div = null;
    }
    // validation check
    if (isValidHex(output.value)) {
      generateToastMessage(`#${output.value} copied`);
    } else {
      alert("Invalid Color Code");
    }
  });

  // typing hex color to change the background
  output.addEventListener("keyup", function (e) {
    const color = e.target.value;
    if (color) {
      output.value = color.toLowerCase();
      if (isValidHex(color)) {
        root.style.backgroundColor = `#${color}`;
      }
    }
  });
}

// generate hex color
function generateHexColor() {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);

  return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
}

// toast message
function generateToastMessage(msg) {
  div = document.createElement("div");
  div.innerText = msg;
  div.className = "toast-message toast-message-slide-in";

  // toast message remove
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
 * hex validation function
 * @param {string} color : ;
 */
function isValidHex(color) {
  if (color.length !== 6) return false;
  return /^[0-9A-Fa-f]{6}$/i.test(color);
}
