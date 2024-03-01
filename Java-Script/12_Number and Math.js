const score  = 400
console.log(score);



const balance  = new Number(100)
console.log(balance);
//console.log(typeof balance);

console.log(balance.toString().length);  // toStrijng 1 propertise hai jo number ko string me convert kar deti hai
console.log(balance.toFixed(2));        // toFixed 1 propertise hai jo number(100) ke baad likhe jati hai


const otherNumber = 123.4551
console.log(otherNumber.toPrecision(4));

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN')); // toLocaleString ka used ham 10,00,000 me convert karne ke liya karte hi



//  #####################  Maths  #######################
console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));  // top value
console.log(Math.floor(4.9));  //small value
console.log(Math.min(2,2,4,81,5,));
console.log(Math.max(2,2,4,81,5,));


// most important consepts

console.log(Math.random());  // ya hame 0 se 9 se beech me value deta hai .. 0.38928756921042496 yaha par point se peahle hamesa 0 ayega
console.log((Math.random()*10) +1);   // ya hame point se pehle or point ke baad value deta hai ... 5.198937491502736
console.log(Math.floor(Math.random()*10) +1); // ya hame point se pehle or 1 se 9 ke bech me he value deta hai .. 8


const min = 10
const max = 20
console.log(Math.floor(Math.random()*(max -min + 1))+min);