
//ES-5 parameters
function User (name,age,followers) {
    this.name = name;
    this.age = age;
    this.followers = followers;
}

User.prototype.getInfo = function() { //if arrow function context to global object window
    return `User ${this.name} is ${this.age} years old and has ${this.followers} followers`
}

let poly = new User('Poly',3,17);

console.log(poly.getInfo());


//ES-5 object into parameters
// let infodata = {
//     name:"Poly",
//     age:3,
//     followers:17
// }

// function User(infodata) {
//     this.infodata = infodata
// };

// User.prototype.getInfo = function () {
//    return `User ${this.infodata.name} is ${this.infodata.age} years old and has ${this.infodata.followers} followers`
// }

// let poly = new User(infodata)

// console.log(poly.getInfo());




//ES-6
// class User {
//     constructor(name,age,followers) {
//         this.name = name,
//         this.age = age,
//         this.followers = followers
//     }
//     getInfo() {
//         return `User ${this.name} is ${this.age} years old and has ${this.followers} followers`
//     }
// }

// let poly = new User("Abracham","66","6");


// console.log(poly.getInfo());