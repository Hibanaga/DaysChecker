let counter = document.querySelector("#counter");

console.log(counter);

let [dicrement, value, increment] = counter.children;

dicrement.addEventListener("click", () => {
  value.innerHTML = Number(value.innerText) - 1;
});

increment.addEventListener("click", () => {
  value.innerHTML = Number(value.innerText) + 1;
});
