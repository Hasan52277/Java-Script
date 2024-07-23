// promise

// const promiseOne = new Promise(function (resolve,reject) {
//     setTimeout(function () {
//         console.log("asyn task is completed");
//         resolve()
//     },1000)
// })
// promiseOne.then(function () {
//     console.log("promise consumed");
// })


// 3.Method of promise

// const  promiseThree = new Promise(function (resolve,reject) {
//     setTimeout(function () {
//         resolve({name:"Hasan",age:"20"})
//     },1000)
// })
// .then(function (user) {
//     console.log(user);
    
// })

// 4.. Method of promise

const promiseFour = new Promise(function (resolve,reject) {
    setTimeout(function () {
        let error = true
        if (!true) {
            resolve({myname:"Hasan",age:18})
            
        }
        else{
            resolve({friendname:"junaid",friendage:18})
        }
    },1000)
}) 
promiseFour.then(function (user) {
    console.log(user);
    return user.myname
    
})
