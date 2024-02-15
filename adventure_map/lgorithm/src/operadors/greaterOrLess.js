// Greater or Less
let birthYear = 2014;
let currentYear = 2024;
let minimumAge = 18;
let userAge = currentYear - birthYear;
let deniedAccess = userAge >= minimumAge;
console.log("Is the user over 18? " + deniedAccess);