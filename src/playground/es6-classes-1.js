// Setup constructor to take name and age (default 0)
// getDescription - Frank Donnelly is 38 year(s) old.


class Person {
    constructor(name = 'Anonymous', age = 0){
    this.name = name;
    this.age = age;
    }
    getGreeting() {
        return `Hi. I am ${this.name}!`;
    }
    getDescription() {
        return `${this.name} is ${this.age} year(s) old.`;
    }
   
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }
    hasMajor() {
        return !!this.major;
    }
    getDescription() {
        let description = super.getDescription();

        if (this.hasMajor()) {
            description += ` Their major is ${this.major}.`;
        }

        return description;
    }
}

class Traveler extends Person {
    constructor(name, age, location) {
        super(name, age);
        this.location = location;
    }
    homeLocation(){
        return this.location;
    }
    getGreeting(){ 
        let greeting = super.getGreeting();

        if (this.homeLocation()) {
            greeting += ` Thier home location is ${this.location}.`;
        }
        return greeting;
    }
}

// subclass Traveler -> Person
// ass support for homeLocation
// Override getGreeting
// 1. Hi I am Frank Donnelly. I'm visiting from San Diego
// 2. Hi I am Frank Donnelly.

const me = new Traveler('Frank Donnelly', 38, 'San Diego');
console.log(me.getDescription()); 
console.log(me.getGreeting());
const other = new Student();
console.log(other.getGreeting());
console.log(other.hasMajor());