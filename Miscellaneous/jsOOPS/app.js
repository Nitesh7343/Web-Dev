// -------------------------------------------------------------------------------------------
// Factory function

// function personMaker(name,age) {
//     const person = {
//         name:name,
//         age:age,
//         talk() {
//             console.log(`Hello my name is ${this.name}`);
//         }
//     }
//     return person;
// }

// const p1 = personMaker('John', 30);
// const p2 = personMaker('Jane', 25);

// -------------------------------------------------------------------------------------------
//Constructor function

// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }

// Person.prototype.talk = function() {
//     console.log(`Hello my name is ${this.name}`);
// }

// const p1 = new Person('John', 30);
// const p2 = new Person('Jane', 25);

// -------------------------------------------------------------------------------------------
// Classes

// class Person {
//     constructor(name,age) {
//         this.name = name;
//         this.age = age;
//     }

//     talk() {
//         console.log(`Hello my name is ${this.name}`);
//     }
// }

// -------------------------------------------------------------------------------------------
// Inheritance

// class Student {
//     constructor(name,age,marks) {
//         this.name = name;
//         this.age = age;
//         this.marks = marks;
//     }

//     talk() {
//         console.log(`Hello my name is ${this.name}`);
//     }
// }

// let st1 = new Student("Alice",22,95);
// let st2 = new Student("Bob",19,75);

// class Teacher {
//     constructor(name,age,subject) {
//         this.name = name;
//         this.age = age;
//         this.subject = subject;
//     }

//     talk() {
//         console.log(`Hello my name is ${this.name}`);
//     }
// }

// let t1 = new Teacher("Mr. Smith",40,"Math");
// let t2 = new Teacher("Ms. Johnson",35,"English");


// here we can see that there are some common properties and methods in both Student and Teacher classes like name, age and talk() method.
// so we can create a base class Person and let both Student and Teacher classes inherit from it.

// class Person {
//     constructor(name,age) {
//         this.name = name;
//         this.age = age;
//     }

//     talk() {
//         console.log(`Hello my name is ${this.name}`);
//     }
// }

// class Student extends Person {
//     constructor(name,age,marks) {
//         super(name,age);
//         this.marks = marks;
//     }
// }

// let st1 = new Student("Alice",22,95);
// let st2 = new Student("Bob",19,75);

// class Teacher extends Person {
//     constructor(name,age,subject) {
//         super(name,age);
//         this.subject = subject;
//     }
// }

// let t1 = new Teacher("Mr. Smith",40,"Math");
// let t2 = new Teacher("Ms. Johnson",35,"English");

// -------------------------------------------------------------------------------------------
// Mammles - Dog Car Example

class Mammal {
    constructor(name) {
        this.name = name;
        this.type = "warm-blooded";
    }

    eat() {
        console.log(`${this.name} is eating.`);
    }
}

class Dog extends Mammal {
    constructor(name){
        super(name);
    }

    bark() {
        console.log(`Woof! Woof!`);
    }
}

class Cat extends Mammal {
    constructor(name){
        super(name);
    }

    meow() {
        console.log(`Meow! Meow!`);
    }
}