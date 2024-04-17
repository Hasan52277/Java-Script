const accountId = 17383
let accountEmail = "Hasan@gmail.com"
var accountCity = "bareilly"

// accountId =2 //not allowed

//accountId = 17383
accountEmail = "mohd@gmail.com"
accountCity= "bareilly"


/*
prefer not use var......var is a variable
becouse of issue in block scope and functional scope
*/
console.log(accountId);

console.table([accountId,accountEmail,accountCity]);