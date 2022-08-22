// my Github:
// https://github.com/Justintimurlake



// =========OBJECTS (Simple examples)==========

// -------------the basic example------------

// ex1


// const car = {type:"Fiat", model:"500", color:"white"};

// console.log("The car type is " + car.type)

// ex2

// const playerOne = {
//   name: "tim",
//   marker: "X"
// }

// const playerTwo = {
//   name: "jenn",
//   marker: "O"
// }

// console.log(playerTwo.name)

// -------------looping example------------


// _____________for in_________________

// ex1

// const cars = {Germany: "BMW", Swiden: "Volvo", China: "Saab", USA: "Ford", Italia: "Fiat", Japan: "Honda"};

// for (let i in cars) {
//   console.log(`${i} cars is ${cars[i]}`);
// }

// ex2

// const user = {
//   Name: 'Timur Adamov',
//   Email: 'adamovtimur98gmail.com',
//   Age: 24,
//   Dob: '08/02/1989',
//   WebDeveloper: true
// };

// for (const i in user) {
//   console.log(`${i} is ${user[i]}`);
// }

// _____________forEach_________________


// // ex1
// const courses = {
//     java: 10,
//     javascript: 55,
//     nodejs: 5,
//     php: 15
// };

// // convert object to key's array
// const keys = Object.keys(courses);
// const keys2 = Object.values(courses);

// // print all keys and values
// console.log(keys);
// console.log(keys2);

// keys.forEach(key => {
//   console.log(`${key}: ${courses[key]}`);
// });


// // ex2

// const animals = {
//   tiger: '🐅',
//   cat: '🐱',
//   monkey: '🐒',
//   elephant: '🐘'
// };

// // iterate over object values
// Object.values(animals).forEach(val => console.log(val));

// _____________Object.entries_________________


// // ex1

// const animals = {
//   tiger: '🐅',
//   cat: '🐱',
//   monkey: '🐒',
//   elephant: '🐘'
// };

// const entries = Object.entries(animals);
// console.log(entries);




// -------------Object.create------------

// // ex1

// const car = {
//   motor: function (sound) {
//     this.sound = sound;
//     return this;
//   },
//   makeSound: function(){
//     console.log(this.sound);
//   }
// }

// const ford = Object.create(car).motor('ratatata')
// ford.makeSound();

// const Supra = Object.create(car).motor('WRATATATA')
// Supra.makeSound();

// const Ferrary = Object.create(car).motor('WRRRRRR');
// Ferrary.makeSound();

// // ex2

// let Student = {
//   name: "Timur",
//   age: 24,
//   marks: 78.9,
//   display() {
//     console.log("Name:", this.name, ",", "Age", this.age);
//   }
// };

// // create object from Student prototype
// let std1 = Object.create(Student);

// std1.name = "Justin";
// std1.age = 25;
// std1.display();

// // ex3

// const person = {
//   isHuman: false,
//   printIntroduction: function() {
//     console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
//   }
// };

// const me = Object.create(person);

// me.name = 'Timur'; 

// me.isHuman = true; 

// me.printIntroduction();

// // ex4

// function Student() {
// }

// Student.prototype.sayName = function() {
//   console.log(this.name),
//   console.log(this.grade)
// }

// function EighthGrader(name) {
//   this.name = name,
//   this.grade = 8
// }

// EighthGrader.prototype = Object.create(Student.prototype)

// const Timur = new EighthGrader("Timur")
// Timur.sayName() 
// Timur.grade


// -------------call apply bind------------

// _____________call_________________

// // ex1


// const person = {
//   fullName: function() {
//     return this.firstName + " " + this.lastName;
//   }
// }
// const person1 = {
//   firstName:"John",
//   lastName: "Doe"
// }
// const person2 = {
//   firstName:"Mary",
//   lastName: "Doe"
// }

// console.log(person.fullName.call(person1))

// _____________apply_________________

// // ex1

// const person = {
//   fullName: function(city, country) {
//     return this.firstName + " " + this.lastName + "," + city + "," + country;
//   }
// }

// const person1 = {
//   firstName:"John",
//   lastName: "Doe"
// }

// console.log(person.fullName.apply(person1, ["Oslo", "Norway"]))

// _____________bind_________________

// // ex1

// speak = function(sound) {
//   console.log(this.name, 'is', sound);
// }

// let dog = {
//   name: 'Dog',
  
// }


// let pirrot = {
//   name: 'pirrot',
// }

// bark = speak.bind(dog, "barkkkk");
// chirp = speak.bind(pirrot, "chippppp");

// bark();
// chirp();

// // ex2

// const module = {
//   x: 42,
//   getX: function() {
//     return this.x;
//   }
// };

// const unboundGetX = module.getX;

// const boundGetX = unboundGetX.bind(module);
// console.log(boundGetX());


// -------------__proto__------------

// // ex1

// let animal = {
//   eats: true,
//   walk() {
//     console.log("Animal walk");
//   }
// };

// let rabbit = {
//   jumps: true,
//   __proto__: animal
// };

// let longEar = {
//   earLength: 10,
//   __proto__: rabbit
// };

// longEar.walk(); 
// console.log(longEar.jumps);

// // ex2

// let animal = {
//   eats: true
// };
// let rabbit = {
//   jumps: true
// };

// rabbit.__proto__ = animal; 


// console.log( rabbit.eats ); 
// console.log( rabbit.jumps ); 

// // ex3

// let user = {
//   name: "Timur",
//   surname: "Adamov",

//   set fullName(value) {
//     [this.name, this.surname] = value.split(" ");
//   },

//   get fullName() {
//     return `${this.name} ${this.surname}`;
//   }
// };

// let admin = {
//   __proto__: user,
//   isAdmin: true
// };

// console.log(admin.fullName); 


// admin.fullName = "Justin Timurlake"; 

// console.log(admin.fullName); 
// console.log(user.fullName); 

// // ex4

// function Animal(species) {
//   this.species = species;
//   this.eats = true;
// }

// Animal.prototype.walks = function () {
//   return `A ${this.species} is walking.`;
// };

// const Bear = new Animal('bear');

// console.log(Bear.species);
// console.log(Bear.walks());

// // ---------------------------
// console.log(Bear.__proto__);
// console.log(Bear.__proto__=== Animal.prototype);
// console.log(Animal.prototype);
// console.log(Bear);


// ----------- get-setPrototypeO----------

// // ex1

// const person = {
//   alive: true
// }

// const musician = {
//   plays: true
// }

// Object.setPrototypeOf(musician, person);
// console.log(Object.getPrototypeOf(musician));
// console.log(musician.__proto__);
// console.log(Object.getPrototypeOf(musician) === musician.__proto__);

// // ex2

// const car = {
//   doors: 2,
//   seats: 'vinyl',
//   get seatMaterial() {
//     return this.seats;
//   },
//   set seatMaterial(material) {
//     this.seats = material;
//   }
// }

// const luxuryCar = {};
// Object.setPrototypeOf(luxuryCar, car);
// luxuryCar.seatMaterial = 'leather';
// console.log(luxuryCar);
// console.log(luxuryCar.doors);
// console.log(car);

// console.log(luxuryCar.valueOf());
// console.log(Object.keys(luxuryCar));
// Object.keys(luxuryCar).forEach(key => {
//   console.log(key);
// });

// for (let key in luxuryCar) {
//   console.log(key);
// }


// -----------Object.prototypes----------

// // ex1

// function Student(name, grade) {
//   this.name = name
//   this.grade = grade
// }

// Student.prototype.sayName = function() {
//   console.log(this.name)
// }
// Student.prototype.goToProm = function() {
//   console.log("Eh.. go to prom?")
// }

// // ex2

// function Person(first, last, age, eye) {
//   this.firstName = first;
//   this.lastName = last;
//   this.age = age;
//   this.eyeColor = eye;
// }

// Person.prototype.nationality = "English";

// const myFather = new Person("John", "Doe", 50, "blue");

// console.log("The nationality of my father is " + myFather.nationality );

// -----------Object.values() and JSON----------

// // ex1

// const person = {
//   name: "John",
//   age: 30,
//   city: "New York"
// };

// const myArray = Object.values(person);
// console.log( myArray);

// // ex2

// const person = {
//   name: "John",
//   age: 30,
//   city: "New York"
// };

// let myString = JSON.stringify(person);
// console.log(myString);

// ----------- (Getters and Setters)----------

// // ex1

// // Create an object:
// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   language: "en",
//   get lang() {
//     return this.language;
//   }
// };

// console.log( person.lang);

// // ex2

const person = {
  firstName: "John",
  lastName: "Doe",
  language: "",
  set lang(lang) {
    this.language = lang;
  }
};

// // Set an object property using a setter:
// person.lang = "en";

// // Display data from the object:
// console.log(person.language);

// ----------- NEW----------

// // ex1

// // Constructor function for Person objects
// function Person(first, last, age, eye) {
//   this.firstName = first;
//   this.lastName = last;
//   this.age = age;
//   this.eyeColor = eye;
// }

// // Create a Person object
// const myFather = new Person("John", "Doe", 50, "blue");

// // Display age
// console.log("My father is " + myFather.age + "."); 

// ----------- Factory function introduction----------

// // ex1

// a Function 

// const personFactory = (name, age) => {
//     const sayHello = () => console.log('hello!');
//     return { name, age, sayHello };
//   };
  
//   const jeff = personFactory('jeff', 27);
  
//   console.log(jeff.name);
  
//   jeff.sayHello(); 

// a object

// const Person = function(name, age) {
//     this.sayHello = () => console.log('hello!');
//     this.name = name;
//     this.age = age;
//   };
  
//   const jeff = new Person('jeff', 27);
//   console.log(jeff.age);

// =========================END========================

// ++++++ bonus (private and public function!) ++++++++


// _____________private_________________


// (function () {
//     var myFunction = function () {
//       // do some stuff here
//     };
//   })();
  
//   myFunction(); // Uncaught ReferenceError: myFunction is not defined


// _____________public_________________

// // ex1

// // define module
// var Module = (function () {
//     return {
//       myMethod: function () {
  
//       },
//       someOtherMethod: function () {
  
//       }
//     };
//   })();
  
//   // call module + methods
//   Module.myMethod();
//   Module.someOtherMethod();

// // ex2

// var Module = (function () {
//     var myModule = {};
//     var privateMethod = function () {
  
//     };
//     myModule.publicMethod = function () {
//   console.log("it is work:)")
//     };
//     myModule.anotherPublicMethod = function () {
  
//     };
//     return myModule; 
//   })();
  
//   // usage
//   Module.publicMethod();

// // ex3


// var myModule = (function() {
//     'use strict';
  
//     return {
//       publicMethod: function() {
//         console.log('Hello World!');
//       }
//     };
//   })();
  
//   myModule.publicMethod(); // outputs 'Hello World'

// _____________public - private________________

// var Module = (function () {
//     var privateMethod = function () {
  
//     };
//     return {
//       publicMethod: function () {
//         console.log('fff');
//       }
//     };
//   })();

//   Module.publicMethod();


// // _____________Real example________________

// const calculator = (() => {
//     const add = (a, b) => a + b;
//     const sub = (a, b) => a - b;
//     const mul = (a, b) => a * b;
//     const div = (a, b) => a / b;
//     return {
//       add,
//       sub,
//       mul,
//       div,
//     };
//   })();
  
//   console.log(calculator.add(3,5)); // 8
//   console.log(calculator.sub(6,2)); // 4
//   console.log(calculator.mul(14,5534)); // 77476

// // _____________chit in private and public____________

// var myModule = (function() {
//     'use strict';
  
//     var _privateProperty = 'Hello World';
  
//     function _privateMethod() {
//       console.log(_privateProperty);
//     }
  
//     return {
//       publicMethod: function() {
//         _privateMethod();
//       }
//     };
//   })();
  
//   myModule.publicMethod(); // outputs 'Hello World'
//   console.log(myModule._privateProperty); // is undefined protected by the module closure
//   myModule._privateMethod(); // is TypeError protected by the module closure







// // ================================
// // Additional Resources
// https://www.patterns.dev/posts/classic-design-patterns/
// ===================================