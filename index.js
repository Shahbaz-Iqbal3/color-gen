const containerEl = document.querySelector(".container");

for (let index = 0; index < 1500; index++) {
  const colorboxEL = document.createElement("div");
  colorboxEL.classList.add("color-box");
  containerEl.appendChild(colorboxEL);
}

const colorboxEls = document.querySelectorAll(".color-box");

colorGeneration();
function colorGeneration() {
  colorboxEls.forEach((colorboxEL) => {
    let colorcode = randomcolor();
    colorboxEL.style.backgroundColor = "#" + colorcode;
    colorboxEL.innerText = "#" + colorcode;
  });
}

randomcolor();
function randomcolor() {
  const chra = "0123456789abcdef";
  const colorcodelength = 6;
  let color = "";
  for (let index = 0; index < colorcodelength; index++) {
    const randomNum = Math.floor(Math.random() * chra.length);
    color += chra.substring(randomNum, randomNum + 1);
  }
  return color;
}
