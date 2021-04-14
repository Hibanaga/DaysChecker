//input text tag
let inputName = document.querySelector("#name-input");

//span output tag
let NameOutput = document.querySelector("#name-output");

inputName.addEventListener("input", () => {
  inputName.value === ""
    ? (NameOutput.innerHTML = "незнакомец")
    : (NameOutput.innerHTML = inputName.value);
});
