// For Each 

// let  mycoding = ["java","python","c++","c"]

// // let name = mycoding.forEach(function (val) {
// //     // console.log(val);
// //     return 
// // })


// mycoding.forEach((item)=>{
// console.log(item);
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
mycoding.forEach(function (item) {
    console.log(item.languagefilename);
})
