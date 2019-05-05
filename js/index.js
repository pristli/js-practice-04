let teslaX = {};
teslaX.make = 'Tesla';
teslaX.model = 'X';
teslaX.price = 150000;

function beep() {
    console.log( this.make + ' ' + this.model +' beep-beep');
}

teslaX.beep = beep;
teslaX.beep();

let seatIbiza = {
    make: 'siat',
    model: 'Ibiza',
    price: '11000',
    beep: beep
};

seatIbiza.beep();

function Car (make, model, price){
    this.make = make;
    this.model = model;
    this.price = price;
    // this.beep = beep;
}

Car.prototype.beep = beep;

let volkswagenBeetle = new Car ('Volkswagen', 'Beetle', 20000);

volkswagenBeetle.beep();

let zazLanos = Object.create(null);
zazLanos.make = 'Zaz';
zazLanos.model = 'Lanos';
zazLanos.price = 3000;
zazLanos.beep = beep;
zazLanos.beep();

let zazSens = Object.create(zazLanos);
zazSens.model = 'Sens';
zazSens.beep();

const serverData = `{
   "make": "Chevrolet", 
   "model": "Corvette",
   "price": 10000
}`;

const chevroletCorvette = JSON.parse(serverData);

const zazLanosSerialized = JSON.stringify(zazLanos);

const zazSensSerialized = JSON.stringify(zazSens);

class SuperCar extends Car {
    constructor(make, model, price) {
        super(make, model, price);
        this.isSupercar = true;
    }
    nitro() {
        console.log(`SuperCar ${this.make} ${this.model} NITRO!!!`);
    }
}

const ferraryLaFerrari = new SuperCar(`Ferrari`, `LaFerrari`, 30000);
ferraryLaFerrari.beep();
ferraryLaFerrari.nitro();