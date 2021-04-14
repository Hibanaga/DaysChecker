const images = [
  {
    url:
      "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url:
      "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url:
      "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

//Почему не работает с вариантом который сделан в другом варианте кода?
images.map(({ url, alt }) => {
  document
    .querySelector("#gallery")
    .insertAdjacentHTML(
      "beforeend",
      `<img class="img_gallery" src="${url}" alt="${alt}">`
    );
});

//version 2:
// images.map(({ url, alt }) => {
//   let liImg = document.createElement("img");
//   liImg.setAttribute("src", url);
//   liImg.setAttribute("alt", alt);
//   liImg.classList.add("img_gallery");
//   console.log(liImg);
// doesn't work with
//   document.querySelector("#gallery").append(liImg);

// DOESN'T WORK WITH THIS
// /* .insertAdjacentHTML(
//     "beforeend",
//     liImg
//   );*/
// });
