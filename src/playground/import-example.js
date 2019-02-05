import validator from 'validator';

validator.isEmail('test');
console.log(validator.isEmail('test@gmail.com'));








// // import './utils';

// // import subtract, { square, add } from './utils';


// // console.log('app.js is running!');
// // console.log(square(4));
// // console.log(add(100, 23));
// // console.log(subtract(100, 81));

// // person.js file 
// // named export isAdult(18) - true if adult, otherwise false
// // named export canDrink(18) - true if 21 and over, otherwise false


// import isSenior, { isAdult, canDrink } from './person';

// console.log(isAdult(16));
// console.log(canDrink(21));
// console.log(isSenior(64));

// // setting default export and funciton
// // grab default and call it