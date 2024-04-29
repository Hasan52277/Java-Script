

// ****** Array

// let fruit =["mango","banana","apple","oranges"]
// let mixture = [2,3,4,5,5,"num",true,"hasan"]
// let num = [1,2,,3,4,5,6]
// console.log(fruit[1]);
// console.log(mixture);

// console.log(num);

// let fruit =["mango","banana","apple","oranges"]

// let obj = {}
// fruit.push("payanapple")
// console.log(fruit);
// fruit[1]="pineapple"             // ham array 1 index ke jagha pineapple ko push kar sakte hai
// console.log(fruit);

// console.log(typeof fruit);
// console.log(typeof obj);
// console.log(Array.isArray(fruit))    //  Array find karne ka method
// console.log(Array.isArray(obj))    //  Array find karne ka method



// ***************  push, pop and Shift , unshift  *******************

let fruit =["mango","banana","apple","oranges"]
console.log(fruit);

//push
// fruit.push("papaya")      // ya last me push karta hai
// console.log(fruit);

//pop
// let poppedfruit =fruit.pop()     // ya last me pop karta hai
// console.log(fruit);
// console.log(poppedfruit);

//Unshifte data types 
let num1 = 6
// fruit.unshift("papaya")      // ya hamara start me add kar deta hai
// fruit.unshift("myfruit")
// console.log(fruit);

//shift
// fruit.shift("papaya")           // ya start elements removed kar deta hai
// console.log(fruit);



// ******** Primitive Vs Referenc
// let num2  = num1

// console.log("value is num1", num1);
// console.log("value is num2", num2);
// num1++;
// console.log("afther increment num1");
// console.log("value is num1", num1);
// console.log("value is num2", num2);


// Reference types
// array

let  array1 =["item1","item2"]
let array2 = array1;
console.log("array1",array1);
console.log("array2",array2);
array1.push("item3");
console.log("afther push item3");
console.log("array1",array1);
console.log("array2",array2);
