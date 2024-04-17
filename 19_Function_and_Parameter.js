
function sayMyname() {
    console.log("H");
    console.log("A");
    console.log("S");
    console.log("A");
    console.log("N");


}
// sayMyname()

// function addTwoNumber(number1,number2){   // .... jab ham value ko paas karte hai tab ham use parametras kahte hai
//     console.log(number1+number2);
// }
// addTwoNumber(3,4)      // .. jab ham value ko call karte hai tab ham use arguments kahte hai



function addTwoNumber(number1,number2){

// let result = number1+number2
// return result

return number1+number2

}
const result=addTwoNumber(3,4)
// console.log("Rsult :",result);




function loginUserMessage(username){
    if (username===undefined) {
        console.log("pleace enter user name");
        return
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage("Hasan"))
console.log(loginUserMessage())