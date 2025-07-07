// higher order functions
function makeTea(type){
    return `making ${type}`
}
function processTea(teaOrder, type){
    return teaOrder(type);
}

let takeOrder = processTea(makeTea,'Chai Tea')

console.log(takeOrder)

// forEach
jobs = [
    {Name: 'Ashwani', Age: 25},
    {Name: 'Sakshi', Age: 23},
    {Name: 'Baby', Age: 27}
]

const eligible = jobs.filter(cand => cand.Age<=30);

console.log(eligible);

