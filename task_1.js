let ulArr = document.querySelectorAll("#categories")[0];

console.log(`List exists of ${ulArr.children.length} categories`);

let liItems = document.querySelectorAll(".item");

liItems.forEach((item) => {
  let [text, listItem] = item.children;
  console.log(
    `Категория ${text.innerText} имеет ${listItem.children.length} подкатегории`
  );
});
