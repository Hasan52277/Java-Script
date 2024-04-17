//


// const tinderUser = new Object()     // ...... singleton object

const tinderUser = {}                   // .....non singleton object

tinderUser.id = "123abc"
tinderUser.name = "Hasan"
tinderUser.islogeedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "hasan@gmail.com",
    fullname:{
        userFullname:{
            Firstname:"Mohd"
            // lasatname:"Hasan"
        }
    }

}
console.log(regularUser.fullname.userFullname);

const obj1 = {1:"a",2:"b"}       // merge two object
const obj2 = {3:"a",4:"b"}
const obj3 = {5:"a",6:"b"}

// const obj3 ={obj1,obj2}
// const obj4 = Object.assign({} , obj1,obj2,obj3)

const obj4 = {...obj1,...obj2}   // ya bala syntex bahut iportant hai addding two object
console.log(obj4);

console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));


//  ******************** JSON API  ***************

const course = {
    coursename:"java Script",
    price:"999",
    courseinstructpr:"hasan",
}

// course.courseinstructpr
const {courseinstructpr:instructor} = course
console.log(instructor);


