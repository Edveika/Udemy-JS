// Enabled strict mode
'use strict';

// let hasDriversLicense = false;
// const passTest = true;

// // If strict mode is enabled, error will be shown in console as hasDriverLicense is not a valid variable name
// // if (passTest) hasDriverLicense = true;
// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log('Can drive');

function logger(text) {
  console.log(text);
}

logger('My name is Edvinas');

// Function expression
const calcAge = function (birthYear) {
  return 2077 - birthYear;
};

const curAge = calcAge(1991);
console.log(curAge);
