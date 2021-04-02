
// ES-5
let arr = [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ];

function Storage(items) {
    this.items = items
}

Storage.prototype.getItems = function()  {
    return `items in storage: ${this.items}`;
}


Storage.prototype.addItem = function(item) {
    return this.items.push(item);
}

Storage.prototype.removeItem = function(item) {
    return this.items.splice(this.items.indexOf(item),1);
}


let storage = new Storage(arr);


console.log(storage.getItems())
storage.addItem('Аннигиляторная пушка');
console.log(storage.getItems())
storage.removeItem("Нанитоиды");
// storage.removeItem("Пролонгер");
console.log(storage.getItems())


//ES-6
// class Storage {
//     constructor(items) {
//         this.items = items
//     }

//     getItems() {
//         return `items in storage: ${this.items}`
//     }

//     addItem(item) {
//         return this.items.push(item);
//     }

//     removeItem(item) {
//         return this.items.splice(this.items.indexOf(item),1);
//     }
// }


// const storage = new Storage(arr);


// console.log(storage.getItems());
// storage.addItem("AK-47")
// console.log(storage.getItems());
// storage.removeItem("Пролонгер");
// console.log(storage.getItems());











