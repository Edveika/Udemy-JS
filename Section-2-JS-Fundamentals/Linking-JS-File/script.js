// let js = 'amazing';
// if (js == 'amazing') alert('javascript is amazing');
// else alert('javascript is not amazing');

// console.log(2 + 2);

// // Variable holds boolean value
// let jsIsFun = false;

// // Type is going to be a boolean
// console.log(typeof jsIsFun);

// // Changes variable value and type to string
// jsIsFun = 'actually, it is quite fun!';

// // Type is now going to be a string
// console.log(typeof jsIsFun);

//
// Homework - data types
//

// let country = 'Lithuania';
// let continent = 'Europe';
// let population = 3;
// let isIsland = false;
// let language;

// console.log(typeof country);
// console.log(typeof continent);
// console.log(typeof population);
// console.log(typeof isIsland);
// console.log(typeof language);

//

// // Age can change
// let age = 30;
// ++age;

// // Birth cannot, hence why its a const
// const birth = 1991;

// // var is function scoped
// // let is block scoped\
// // no variable type is global scoped
// var job = 'biologist';
// job = 'chemist';

//
// Homework - let, const, var
//

// const country = 'Lithuania';
// const continent = 'Europe';
// let population = 3;
// const isIsland = false;
// const language = 'Lithuanian';

// Exponential
// console.log(2 ** 3);

// const now = 2037;
// const ageEd = now - 2005;
// const ageDD = now - 2008;

// console.log(now - 1991 > now - 2018);

//
// # Challange
//

/* Write your code below. Good luck! 🙂 */
// let massMark = 78;
// let heightMark = 1.69;
// const BMIMark = massMark / (heightMark * heightMark);
// let markHigherBMI = false;

// let massJohn = 92;
// let heightJohn = 1.95;
// const BMIJohn = massJohn / (heightJohn * heightJohn);

// console.log(BMIMark, BMIJohn);

// if (BMIMark > BMIJohn) markHigherBMI = true;

// console.log(markHigherBMI);

// let name = 'Edvinas';
// let job = 'Programmer';
// let age = 1337;

// // Template string
// const edvinas = `My name is ${name}, I am a ${job} and I am ${age} years old`;

// console.log(edvinas);

//
// # Challange: BMI #2
//

// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// const BMIMark = massMark / (heightMark * heightMark);
// const BMIJohn = massJohn / (heightJohn * heightJohn);
// console.log(BMIMark, BMIJohn);

// /* Write your code below. Good luck! 🙂 */

// if (BMIMark > BMIJohn) {
//   console.log("Mark's BMI is higher than John's!");
// } else if (BMIMark < BMIJohn) {
//   console.log("John's BMI is higher than Mark's!");
// } else {
//   console.log('equal');
// }

// const year = '1999';

// // Type conversion from str to number
// let number = Number(year);

// // Strings get converted into numbers
// console.log('10' - '5' - 3);

// // Numbers get converted into strings
// console.log('10' + '5' + 3);

// JS false values: 0, "", NaN, NULL, undefined
// Everything else: TRUE
console.log(Boolean(false));
console.log(Boolean(0));
console.log(Boolean(NaN));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(''));
