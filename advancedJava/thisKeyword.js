// learn context of this keyword
const person = {
    name: "Anshu",
    greet(){
        console.log(`Hi, I am ${this.name}`);
    },
};
person.greet();
