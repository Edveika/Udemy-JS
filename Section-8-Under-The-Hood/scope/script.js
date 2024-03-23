"use strict";

function calcAge(birthYear) {
  const age = 2037 - birthYear;

  // Visisble to all parents
  function printAge() {
    const output = `Your are ${age}, born in ${birthYear}`;

    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      // var is function scoped
      var millenial = true;
      // Variable lookup will stop here
      const firstName = "David";
      const str = `You are also a millenial, ${firstName}`;

      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    // FUNCTIONS BLOCK SCOPED IN sctrict mode!!!
    // add(1, 1);
    console.log(millenial);
  }

  printAge();

  return age;
}

const firstName = "Edvinas";

calcAge(1991);
