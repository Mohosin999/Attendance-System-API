/**
 * Project Requirements:
 * - Change the background color by generating random RGB color by clicking a button
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

  // event listener & handler
  btn.addEventListener("click", function () {
    const bgColor = generateRGBColor();
    root.style.backgroundColor = bgColor;
  });
}

// random color generator function
function generateRGBColor() {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);

  return `rgb(${red}, ${green}, ${blue})`;
}
