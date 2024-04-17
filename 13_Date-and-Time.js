// date

/*le.log(myDate.toLocaleDateString());
console.log(typeof myDate);
let myDate = new Date()
console.log(myDate.toString());*/


// let myCreatedDate = new Date(2003,0,23)
//let myCreatedDate = new Date(2003,0,23,4,2)
let myCreatedDate = new Date("01-14-2003")


console.log(myCreatedDate.toDateString());

let myTimespands = Date.now()

console.log(myTimespands);
console.log(myCreatedDate.getTime());


let newDate = new Date()
console.log(newDate.getDate());
console.log(newDate.getMonth());

newDate.toLocaleString(`default`,{
    weekday:"long"
})