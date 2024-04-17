const  userEmail = "hasan@52277"

if (userEmail) {
    console.log("got user email");
    
}else{
    console.log("don't have user email");
}

// falsy value ...... important consept 

false , 0 , -0 , BigInt , "" , null , undefined , NaN

// truthy value 

"0" ,'false' , " " , [] , {} , function (){}




// Nullish Coalescing operator (??) : null undefined

let  val1;
// val1 = 5 ?? 10

// val1 = null ?? 10
// val1 = undefined ?? 15 
val1 = null ?? 10 ??20


console.log(val1);




// Terniary operator

// condition ? true :false

const  iceTeaprice = 100
iceTeaprice>=80? console.log("less than 80"): console.log("more than 80");