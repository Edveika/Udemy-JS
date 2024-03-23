"use strict";

// // Vars
// console.log(me);
// // console.log(job);
// // console.log(year);

// var me = "Edvis";
// let job = "coder";
// const year = 2005;

// // Functions
// console.log(add(1, 2));
// console.log(addExpr(1, 2));
// console.log(addArw(1, 2));

// function add(a, b) {
//   return a + b;
// }

// // Will become undefined
// var addExpr = function (a, b) {
//   return a + b;
// };

// const addArw = (a, b) => a + b;

// // A very common bug caused by var/hoisting

// // products is set to undefined, all items get deleted unintentionally
// if (!products) deleteCart();

// var products = "Food";

// function deleteCart() {
//   console.log("Deleted");
// }

// // Window object
// console.log(this);

// const calcAge = function (birthyear) {
//   console.log(2037 - birthyear);
//   console.log(this);
// };

// calcAge(1337);

// // Will get this keyword from outer scope
// const calcAgeArr = (birthyear) => {
//   console.log(2037 - birthyear);
//   console.log(this);
// };

// calcAgeArr(2337);

// const player = {
//   health: 100,
//   getHealth: function () {
//     console.log(this.health);
//     console.log(this);
//   },
// };

// player.getHealth();

// const bot = {
//   health: 1337,
// };

// bot.getHealth = player.getHealth;

// bot.getHealth();

// const player = {
//   nickname: "KIllah1337",
//   health: 96,
//   getHealth: function () {
//     console.log(this.health);
//     console.log(this);

//     //
//     // Argument solution
//     //
//     // const isHealthy = function (health) {
//     //   if (health === 100) console.log("healthy");
//     //   else console.log("not healthy");
//     // };
//     // isHealthy(this.health);

//     //
//     // Going up the variable chain solution
//     //
//     // const self = this;
//     // const isHealthy = function () {
//     //   if (self.health === 100) console.log("healthy");
//     //   else console.log("not healthy");
//     // };
//     // isHealthy();

//     //
//     // Arrow fn solution
//     //
//     const isHealthy = () => {
//       if (this.health === 100) console.log("healthy");
//       else console.log("not healthy");
//     };
//     isHealthy(this.health);
//   },

//   greet: () => console.log(`hey ${this.nickname}`),
// };

// player.getHealth();

// //
// // Args keyword
// //
// const addExpr = function (a, b) {
//   console.log(arguments);
//   let sum = 0;
//   for (let i = 0; i < arguments.length; ++i) {
//     sum += arguments[i];
//   }
//   return sum;
// };

// console.log(addExpr(2, 5, 5));

// const addArrw = () => {
//   console.log(arguments);
// };

// addArrw(1, 2, 3, 4, 5);

// //
// // Primitives(stack)
// //
// let age = 30;
// let oldAge = age;
// age = 31;
// console.log(age);
// console.log(oldAge);

// //
// // Objects(heap)
// //
// const me = {
//   name: "Jonas",
//   age: 30,
// };

// const friend = me;
// friend.name = "Dave";
// friend.age = 24;

// console.log("me: ", me);
// console.log("friend: ", friend);

// // Primitive types
// let lastName = "William";
// let oldLastName = lastName;
// lastName = "Davis";
// console.log(oldLastName, lastName);

// // Reference types
// const jessica = {
//   firstName: "Jessica",
//   lastName: "Williams",
//   age: 27,
// };

// const marriedJessica = jessica;
// marriedJessica.lastName = "Davis";

// console.log("Before: ", jessica);
// console.log("After: ", marriedJessica);

const jessica2 = {
  firstName: "Jessica",
  lastName: "Williams",
  age: 27,
  family: ["David", "Goggins"],
};

// Returns new object that merges two objects(SHallow copy)
const jessicaCpy = Object.assign({}, jessica2);
jessicaCpy.lastName = "Davis";
jessicaCpy.family.push("Phill");
jessicaCpy.family.push("Steve");
console.log("Before: ", jessica2);
console.log("After: ", jessicaCpy);
