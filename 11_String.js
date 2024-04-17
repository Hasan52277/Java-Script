const name = "hasan"
const age = 20


// console.log(name + age ); another syntex

//console.log(`Hello my name is ${name} and my age is ${age} year`);


const gameName = new String('hasan')
// console.log(gameName.length);

console.log(gameName.fontsize());
console.log(gameName.charAt('3'));


const newString = gameName.substring(0,4)
console.log(newString);


const anotherString = gameName.slice(-8,4)  // another method of substring
console.log(anotherString);

const newStringOne = "     Hasan   "     // ham string me extra space hatane ke liya trim() ka use karte hai
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hasan.com/mohd%20hasan"
console.log(url.replace('%20', '-'));      // Ham kesi bhe string ya num ko aapas me replace kar sakte hai

console.log(gameName.split('-'));