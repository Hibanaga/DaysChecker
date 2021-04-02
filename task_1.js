
//ES-5 object
function Account(logininfo) {
  this.logininfo = logininfo
}

Account.prototype.getInfo = function() {
    return ` Your login is ${this.logininfo.login} and your email is ${this.logininfo.email}`;
}

//params
let info = {
    login:"Poly",
    email:"poly@mail.com"
}

let poly = new Account(info);

console.log(poly.getInfo());


//ES-5 params
// function Account(login,email) {
//   this.login = login;
//   this.email = email;
// }


// Account.prototype.getInfo = function () {
//   return ` Your login is ${this.login} and your email is ${this.email}`;
// }

// let poly = new Account("Poly","poly@mail.com");


// console.log(poly.getInfo());







//ES-6
// class Account {
//   constructor(logininfo) {
//     this.logininfo = logininfo
//   }

//   getInfo() {
//     return ` Your login is ${this.logininfo.login} and your email is ${this.logininfo.email}`;
//   }

// }
// let info = {
//     login:"Poly",
//     email:"poly@mail.com"
// }

// let poly = new Account(info);

// console.log(poly.getInfo());