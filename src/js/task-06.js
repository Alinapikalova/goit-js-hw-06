const input = document.querySelector("#validation-input");

input.addEventListener("focus", onInputFocus);
input.addEventListener("blur", onInputBlur);

function onInputFocus(event) {
  input.classList.remove("invalid");
  input.classList.remove("valid");
}
function onInputBlur(event) {
  if (
    event.currentTarget.value.length ===
    parseInt(input.getAttribute("data-length"))
  ) {
    input.classList.add("valid");
    // input.classList.remove("invalid");
  } else {
    //input.classList.remove("valid");
    input.classList.add("invalid");
  }
}
