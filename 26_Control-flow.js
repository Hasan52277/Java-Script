// if Statements

// const isuserloggedin = true
// const temperature = 41

// if (temperature<50) {
//     console.log("less than 50");
    
// }
// else{
//     console.log("greater than 50");  
// }
// console.log("greater than 50");

//  < , > ,<=, >=,==, != , === , !==



// const score = 200
// if (score>100) {
//     const power = "fly"
//     console.log(`user power : ${power}`);
    
// }
// console.log(`user power : ${power}`);



// const balance = 1000

// // if (balance>500) console.log("text");

// if (balance<500) {
//     console.log("less than 500");
    
// }
// else if (balance<700) {
//     console.log("less than 700");
// } 
// else if(balance<900){
// console.log("less than 900");
// }
// else{
//     console.log("less than 9");
// }




const userLoggedIn =true
const debitcards =true
const LoggedInfromgoogle = false
const LoggedInfromgmail = true

if (userLoggedIn && debitcards) {        //  AND
    console.log("allow to buy course");
    
}

if (LoggedInfromgoogle || LoggedInfromgmail) {    // OR
    console.log("user loggedin");
    
}




// ******************* Switch ****************

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }


const month = "march"
switch (month) {
    case "january":
        console.log("january");
        break;
    case "feb":
        console.log("feb");
        break;

    case "march":
        console.log("march");
        break;
    case "april":
        console.log("april");
        break;

    default:
        break;
}