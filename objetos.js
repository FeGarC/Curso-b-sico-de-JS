var myCar = {
    brand: "Mercedes-benz",
    model: "GLE Coupé",
    year: 2023,
    detailOfCar: function(){
        console.log(`Car ${this.model} ${this.year}`);
    }
};

console.log(myCar);

myCar.brand
myCar.year

myCar.detailOfCar();