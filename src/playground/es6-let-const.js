var nameVar = 'Frank';
var nameVar = 'Mike';
console.log('nameVar' , nameVar);

let nameLet = 'Jen';
nameLet = 'Julie';
console.log('nameLet', nameLet);

const nameConst = 'Andrew';
console.log('nameConst', nameConst);

// function getPetName() {
//     var petName = 'Hal';
//     return petName;
// }

// getPetName();
// console.log(petName);

// Block scoping

const fullName = 'Frank Donnelly';
let firstName;
if (fullName) {
    firstName = fullName.split(' ')[0];
    console.log(firstName);
}


console.log(firstName);