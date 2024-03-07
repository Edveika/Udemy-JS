// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// const measureKelvin = function () {
//   let measurement = {
//     type: 'temp',
//     unit: 'celsius',
//     // Error fixed
//     value: Number(prompt('Degrees celsius')),
//   };

//   console.log(measurement);
//   // console.warn();
//   // console.error();

//   return measurement.value + 273;
// };

// // Problem identified
// console.log(measureKelvin());

const calcTempAmplitudeBug = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  // Bug found: Woopsies, if min value is 0, there might not be any smaller values. Set it to first array element
  // let max = 0;
  // let min = 0;

  // Fix the problem
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

const buggy = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);

// Identify
console.log(buggy);
