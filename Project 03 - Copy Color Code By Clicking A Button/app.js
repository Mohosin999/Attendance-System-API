/**
 * Project Requirements:
 * - Change the background color by generating random hex color by clicking a button
 * - Also display the hex code to a disabled input field
 * - Add a button to copy the color code
 */

/**
 * Steps
 * 1. create onload handler
 * 2. random color generator function
 * 3. collect all necessary dom references
 * 4. handle the change button click event
 * 5. handle the copy button click event
 */

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
  });
}

// random color generator function
function generateHexColor() {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);

  return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
}
