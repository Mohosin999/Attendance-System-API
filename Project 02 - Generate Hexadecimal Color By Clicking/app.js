/**
 * Project Requirements:
 * - Change the background color by generating random hex color by clicking a button
 * - Also display the hex code to a disabled input field
 */

/**
 * Steps
 * 1. create onload handler
 * 2. random color generator function
 * 3. collect all necessary dom references
 * 4. handle the click event
 */

// onload handler
window.onload = () => {
  main();
};

function main() {
  // dom references
  const root = document.getElementById("root");
  const btn = document.getElementById("change-btn");
  const output = document.getElementById("output");

  // event listener & handler
  btn.addEventListener("click", function () {
    const bgColor = generateHexColor();
    root.style.backgroundColor = bgColor;
    output.value = bgColor;
  });
}

// random color generator function
function generateHexColor() {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);

  return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
}
