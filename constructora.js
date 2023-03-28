function car(brand, model, year){
    this.brand = brand;
    this.model = model;
    this.year = year;
}

let newCar = new car("Tesla", "Model X", 2022);
let newCar2 = new car("BMW", "X6M", 2022);
let newCar3 = new car("Audi", "Q8", 2022);
console.log(newCar)
console.log(newCar2)
console.log(newCar3)


