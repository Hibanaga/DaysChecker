
class Car {


    static getSpecs(car) {
        return `maxSpeed: ${car.speed} , price: ${car.price} , maxSpeed: ${car.maxSpeed} , isOn: ${car.isOn} , distance: ${car.distance}`
    }

    // static getSpecs() {
    //     return `maxSpeed: ${this.speed} , price: ${this.price} , maxSpeed: ${this.maxSpeed} , isOn: ${this.isOn} , distance: ${this.distance}`
    // }

    constructor(speed=0,price,maxSpeed,isOn=false,distance=0) {
        this.speed = speed;
        this.price = price;
        this.maxSpeed = maxSpeed;
        this.isOn = isOn;
        this.distance = distance
    }

    get priceInfo() {
        return this.price
    }

    set newPrice(newPrice) {
        this.price = newPrice
    }

    // set discountPrice(discount) {
    //     this.price = this.price - (this.price * discount/100)
    // }

    discountPrice(discount) {
        return this.price = this.price - (this.price * discount/100)
    }

    turnOn() {
       this.isOn = true;
    }
    
    turnOff() {
        this.isOn = false;
        this.speed = 0;
    }

    accelerate(value) {
        if (this.speed + value < this.maxSpeed) {
            this.speed += value;  
        }
    }

    decelarate(value) {
        if (this.speed - value > 0 && this.isOn === true) {
            this.speed -= value;
        }
    }

    drive(hours) {
        if (this.speed > 0 && this.isOn === true) {
            this.distance += this.speed * hours
        }
    }


}

let carInfo = {
    speed:22,
    price:33,
    maxSpeed:44,
    isOn:true,
    distance:55
}

//check default values
// const audi = new Car(undefined,122,144,undefined,undefined);

 const audi = new Car(60,122,144,false,120);
console.log(audi);

//with arguments
// console.log(Car.getSpecs(carInfo));

//with bind
// console.log(Car.getSpecs.call(carInfo));

//setter getter to class Car and operations with Price
// console.log(audi.priceInfo)
// audi.newPrice = 500
// console.log(audi.priceInfo)
// console.log(audi.discountPrice(50));
// audi.discountPrice = 50


//methods to change isOn value
audi.turnOn()
// console.log(audi);
// audi.turnOff()
// console.log(audi)


//methods to speed
// audi.accelerate(15);
// console.log(audi)
// audi.decelarate(15)
// console.log(audi)
// audi.drive(4);
// console.log(audi);














