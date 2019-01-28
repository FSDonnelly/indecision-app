// arguments object - no longer bound with arrow functions

const add = (a, b) => {
//     console.log(arguments);
    return a + b;
}
console.log(add(55, 1, 1001));

// this key word - no longer bound

const user = {
    name: 'Frank',
    cities: ['San Diego', 'Sacramento', 'Atlanta'],
    printPlacesLived() {
        // console.log(this.name);
        // console.log(this.cities);
       return this.cities.map((city) => this.name + ' has lived in ' + city);
           

        // return cityMessages;

        // this.cities.forEach((city) => {
        //     console.log(this.name + ' has lived in ' + city); // this.name not recognized when wrapped in another function unless you use arrow function.
        // });

    }
};
console.log(user.printPlacesLived());

// Challenge area

const multiplier = {
    // numbers - array
    numbers: [1, 2, 3],
    // multiplyBy - single number
    multiplyBy: 3,
    // multiply - return a new array where the numbers have been multiplied
    multiply() {
        return this.numbers.map((number)=> number * this.multiplyBy);
    }
};

console.log(multiplier.multiply())