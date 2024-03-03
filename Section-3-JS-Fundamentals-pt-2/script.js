'use strict';

let hasDriversLicense = false;
const passTest = true;

// If strict mode is enabled, error will be shown in console as hasDriverLicense is not a valid variable name
// if (passTest) hasDriverLicense = true;
if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('Can drive');
