const colorChanging = document.querySelector(".widget");
const nameColor = document.querySelector(".color");
const colorChangingBtn = document.querySelector(".change-color");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

colorChangingBtn.addEventListener("click", () => {
  const color = getRandomHexColor();
  nameColor.textContent = color;
  document.body.style.backgroundColor = color;
});
