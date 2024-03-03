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
function calcAverage(score0, score1, score2) {
  return (score0 + score1 + score2) / 3;
}

const scoreDolphins = calcAverage(85, 54, 41);
const scoreKoalas = calcAverage(23, 24, 27);

function checkWinner(avgDolphins, avgKoalas) {
  if (avgDolphins > avgKoalas) {
    console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    return;
  } else if (avgDolphins < avgKoalas) {
    console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    return;
  } else {
    console.log(`No team wins...`);
    return;
  }
}

checkWinner(scoreDolphins, scoreKoalas);

//
