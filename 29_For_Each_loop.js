
// 3....>  For each loop

const coding  = ['java','python','c++','cpp']

// coding.forEach(function (val) {
//     console.log(val);
// })

// ***********another method

// coding.forEach((item) => {
//     console.log(item);
// })


// ***********another method

// function printme(item) {
//     console.log(item);
    
// }
// coding.forEach(printme)
    

// coding.forEach((item,index,arr)=>{

//     console.log(item,index,arr);
// })

const mycoding = [
    {
        languagename :"javascript",
        languagefilename:"js"
    },
    {
        languagename :"java",
        languagefilename:"java"
    },
    {
        languagename :"python",
        languagefilename:"Python",
    },
    {
        languagename :"c+",
        languagefilename:"c+"
    }
]
mycoding.forEach((item)=>{
    console.log(item.languagename);
})