let genericCar = {
    tyres: 4
};

let tesla ={
    driver: 'AI'
}

Object.setPrototypeOf(genericCar,tesla)

console.log(`tesla`, Object.getPrototypeOf(genericCar))
