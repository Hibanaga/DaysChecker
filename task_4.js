//ES-5
function StringBuilder(_value) {
    this.value = _value
}

StringBuilder.prototype.get = function() {
    return this.value
};

StringBuilder.prototype.append = function(str) {
    return this.value+=str
}

StringBuilder.prototype.prepend = function(str) {
    return this.value = str + this.value;
}

StringBuilder.prototype.pad = function(str) {
    return this.value = str + this.value + str;
}

// StringBuilder

const builder = new StringBuilder(".");

console.log(builder.get())
builder.append("^");
console.log(builder.get())
builder.prepend("^");
console.log(builder.get())
builder.pad("=")
console.log(builder.get())


//ES-6
//extends functional classes to default classes
// class StringBuilderClass extends StringBuilder {
//     constructor(_value) {
//         super(_value)
//     }
// }

// const builderClass = new StringBuilderClass("&");

// console.log(builderClass.get());
// builderClass.append("-");
// console.log(builderClass.get());
// builderClass.prepend("-");
// console.log(builderClass.get());
// builderClass.pad("^");
// console.log(builderClass.get());