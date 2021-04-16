let products = [
  { id: 1, name: "macbook Pro", price: 2500, count: 3 },
  { id: 2, name: "macbook Air", price: 1300, count: 10 },
  { id: 3, name: "Lenovo Legion", price: 950, count: 4 },
  { id: 4, name: "Acer Predator", price: 1500, count: 5 },
  { id: 5, name: "Asus Zephyrus", price: 2000, count: 15 },
  { id: 6, name: "Dell Inserption", price: 1050, count: 3 },
  { id: 7, name: "Lenovo IdeaPad", price: 750, count: 1 },
  { id: 8, name: "ASUS ROG", price: 1500, count: 24 },
  { id: 9, name: "ACER PREDATOR", price: 1250, count: 4 },
];

let itemsContainer = document.querySelector(".container");

let createHTML = (name, price, count) => `<div class="item_block">
    <h2>${name}</h2>
    <h3>price: ${price}</h3>
    <span class="countItem">count: ${count}</span>
    </div>`;

let mapProps = (products) =>
  products.map(
    ({ name, price, count }) =>
      (itemsContainer.innerHTML += createHTML(name, price, count))
  );

mapProps(products);

let btnSort = document.querySelector(".js-btn-sort");

btnSort.addEventListener("click", function (e) {
  itemsContainer.innerHTML = "";
  let value = document.querySelector("#radioSort:checked").value;
  console.log(value);
  if (value === "toCheap") {
    sorting(products, "price");
  }

  if (value === "toExpensive") {
    sortingByNamePriceExpensive(products, "price");
  }

  if (value === "byCount") {
    sorting(products, "count");
  }

  if (value === "byName") {
    sortingByNamePriceExpensive(products, "name");
  }
});

function sorting(products, param) {
  return products
    .sort((a, b) => b[param] - a[param])
    .map(
      ({ name, price, count }) =>
        (itemsContainer.innerHTML += createHTML(name, price, count))
    );
}

function sortingByNamePriceExpensive(products, param) {
  console.log();
  return products
    .sort(function (a, b) {
      if (a[param] < b[param]) {
        return -1;
      }
      if (a[param] > b[param]) {
        return 1;
      }
      return 0;
    })
    .map(
      ({ name, price, count }) =>
        (itemsContainer.innerHTML += createHTML(name, price, count))
    );
}

// function sortByCheap(products, callback) {
//     return products
//       .sort((a, b) => b.price - a.price)
//       .map(
//         ({ name, price, count }) =>

//          version with callback doesn't work
//           (itemsContainer.innerHTML += callback(name, price, count))
//       );
//   }
// let { name, price, count } = products;
// let val = sortByCheap(products, createHTML(name, price, count));
// console.log(val);
