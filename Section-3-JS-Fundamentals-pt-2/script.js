// Enabled strict mode
'use strict';

// let hasDriversLicense = false;
// const passTest = true;

// // If strict mode is enabled, error will be shown in console as hasDriverLicense is not a valid variable name
// // if (passTest) hasDriverLicense = true;
// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log('Can drive');

// // Function definition
// function logger(text) {
//   console.log(text);
// }

// logger('My name is Edvinas');

// // Function expression
// const calcAge = function (birthYear) {
//   return 2077 - birthYear;
// };

// const curAge = calcAge(1991);
// console.log(curAge);

// // Arrow function(birth year is a parameter)
// const calcAge1 = (birthYear) => 2077 - birthYear;
// const curAge1 = calcAge1(1991);
// console.log(curAge1);

// const yearsUntilRetire = (birthYear) => {
//   const age = 2077 - birthYear;
//   const retirement = 65 - age;
//   return retirement;
// };

// const retirement = yearsUntilRetire(1991);
// console.log(retirement);

//
// Challange #1
//
// function calcAverage(score0, score1, score2) {
//   return (score0 + score1 + score2) / 3;
// }

// const scoreDolphins = calcAverage(85, 54, 41);
// const scoreKoalas = calcAverage(23, 24, 27);

// function checkWinner(avgDolphins, avgKoalas) {
//   if (avgDolphins > avgKoalas) {
//     console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
//     return;
//   } else if (avgDolphins < avgKoalas) {
//     console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
//     return;
//   } else {
//     console.log(`No team wins...`);
//     return;
//   }
// }

// checkWinner(scoreDolphins, scoreKoalas);

// //

// // Array methods
// const friends = [`Edvinas`, `Deividas`, `Jonas`];

// // Adds a value to the back of array. Returns new array size
// let newSize = friends.push(`Steve`);

// console.log(friends);
// console.log(newSize);

// // Adds new value to the front of array. Returns size
// newSize = friends.unshift(`Jay`);

// console.log(friends);
// console.log(newSize);

// // Removes REMOVED ELEMENT!!!
// const popped = friends.pop();

// console.log(friends);
// console.log(popped);

// // Removes element from the front of the array
// friends.shift();

// console.log(friends);

// // Returns index of the value in the array
// console.log(friends.indexOf(`Edvinas`));

// // Returns true or falsed based on wheter the value exists
// console.log(friends.includes(`Edvinas`));

//
// Challange #2
//
/* Write your code below. Good luck! 🙂 */

// function calcTip(bill) {
//   if (bill >= 50 && bill <= 300) return bill * 0.15;
//   else return bill * 0.2;
// }

// function calcTips(bills) {
//   const tips = [];

//   tips.push(calcTip(bills[0]));
//   tips.push(calcTip(bills[1]));
//   tips.push(calcTip(bills[2]));

//   return tips;
// }

// function calcTotals(bills, tips) {
//   const totals = [];

//   totals.push(bills[0] + tips[0]);
//   totals.push(bills[1] + tips[1]);
//   totals.push(bills[2] + tips[2]);

//   return totals;
// }

// const bills = [125, 555, 44];
// const tips = calcTips(bills);
// const totals = calcTotals(bills, tips);

const human = {
  firstName: `Edvinas`,
  lastName: `Bur`,
  age: 1337,
  job: `Coder`,
  friends: [`Micheal`, `Jake`, `Jonas`],
};

console.log(human.age);
console.log(human[`age`]);

const nameKey = `Name`;

// Expression bracket notation
console.log(human[`first` + nameKey]);

human.gender = `Male`;

human[`Interests`] = `Reverse engineering`;

//
// Little challange
//

console.log(
  `${human.firstName} has ${human.friends.length} friends, and his best friend is called ${human.friends[0]}`
);
