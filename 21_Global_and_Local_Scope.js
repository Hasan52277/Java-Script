
let a =100
if (true) {    // if ke andar ka block scope or bahar bala global scope
    let a=10
    const b =20
   
}

console.log(a);
// console.log(b);
// console.log(c);


function one() {
    const username = "Hasan"

function two() {
    const  website = "youtube"
    console.log(username);
    
}   

// console.log(website); 


two()


}

// one()

if (true) {
    const username = "Hasan"
    if(username === "Hasan"){
        const website = " youtube "
        // console.log(username + website);
    }
    // console.log(website);
    
}
// console.log(username);



// *************** consepts *********************

function addone(num) {
    return num+1
    
}
addone(5)

const addtwo  =function(num){
    return num+2
}
addtwo(5)