const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

ingredients.map((ingridient) => {
  let liItem = document.createElement("li");
  liItem.innerHTML = ingridient;
  document.querySelector("#ingredients").append(liItem);
});

//version 2:
// function returnHtmlList(arr) {
//   arr.map(
//     (itemArr) =>
//       (document.querySelector(
//         "#ingredients"
//       ).innerHTML += `<li>${itemArr}</li>`)
//   );
// }

// returnHtmlList(ingredients);
