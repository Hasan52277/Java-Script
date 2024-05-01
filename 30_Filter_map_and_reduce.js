// const coding  = ["Java","python","c++","ruby"]

// const value =coding.forEach((item) =>{
//     // console.log(item);
//     return item
// })
// console.log(value);


// *******   Filter Method

const mynum = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// let newnum = mynum.filter((num)=>{
//    return num>4
// })




// const newNum = []
// mynum.forEach((num) => {
//     if (num > 4) {
//         newNum.push(num)
//         // console.log(mynum);

//     }
// })

// console.log(newNum);



// *****  Map Method


const myNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const newNum=myNumber.map((num)=> num+10)

const newNum = myNumber.map((num) => num * 10)
    .map((num) => num+1)
    .filter((num) => num>=40)
        
    



// console.log(newNum);



// *****   reduce Method


const myNums = [1,2,3,4]

// const mytotal = myNums.reduce(function(acc,currval){

//     console.log(`acc:${acc} andcurrval :${currval}`);
//     return acc+currval
// },0)


const mytotal = myNums.reduce((acc,curr)=>(acc+curr),0)

console.log(mytotal);

const ShoppingCards = {

    item:"js course",
    price: 2999
}