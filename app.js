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

  // change bg color function
  changeBtn.addEventListener("click", function () {
    const bgColor = generateHexColor();
    root.style.backgroundColor = bgColor;
    output.value = bgColor;
  });

  // copy btn function
  copyBtn.addEventListener("click", function () {
    navigator.clipboard.writeText(output.value);
    generateToastMessage(`${output.value} copied`);
  });
}

// hex color generator function
function generateHexColor() {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);

  return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
}

// toast message generator function
function generateToastMessage(msg) {
  const div = document.createElement("div");
  div.innerText = msg;
  div.className = "toast-message toast-message-slide-in";

  document.body.appendChild(div);
}
