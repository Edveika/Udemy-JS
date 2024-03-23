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

// Window object
console.log(this);

const calcAge = function (birthyear) {
  console.log(2037 - birthyear);
  console.log(this);
};

calcAge(1337);

// Will get this keyword from outer scope
const calcAgeArr = (birthyear) => {
  console.log(2037 - birthyear);
  console.log(this);
};

calcAgeArr(2337);

const player = {
  health: 100,
  getHealth: function () {
    console.log(this.health);
    console.log(this);
  },
};

player.getHealth();

const bot = {
  health: 1337,
};

bot.getHealth = player.getHealth;

bot.getHealth();
