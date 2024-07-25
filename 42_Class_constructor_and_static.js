

// class user {
// constructor(username, email,paswords){
//     this.useranme = username
//     this.email = email
//     this.paswords = paswords
// }
// encryptpaswords(){
//     return `${this.paswords} abc`
// }
//  chhangeuseranme(){
//     return `${this.useranme.toUpperCase()}`
//  }
// }

// const chai = new user ("cahi","cahi@123","1234")
// console.log(chai.encryptpaswords());
// console.log(chai.chhangeuseranme());


// behind tha scene

// function users (username ,email,paswords) {
//     this.username = username
//     this.email = email
//     this.paswords = paswords
    
// }
// user.prototype.encryptpaswords = function () {
//     return `${this.paswords}abc`
    
// } 
// user.prototype.encryptusername = function () {
//     return `${this.username}abc`
    
// }
// chhangeuseranme(){
//     return `${this.useranme.toUpperCase()}`
//  }

 

//  const code = new users ("code","cahi@123","1234")
// console.log(code.encryptpaswords());
// console.log(code.chhangeuseranme());



// inheritance

// class user { 
//     constructor(useranme){
//         this.username = username

//     }
//     logMe(){
//         console.log(`USERNAME is ${this.username}`);
//     }
// }
// class Teacher extends user {
//     constructor(username,email,paswords){
//         super(useranme)
//         this.email = email
//         this.paswords = paswords
//     }
// addCourse(){
//     console.log(`A new Course added by ${this.username}`);
// }

// }

// const chai = new Teacher("chai","chai@gamil.com","123")

// chai.addCourse()

// const masalaChai = new user ("masalchai")



class user {
    constructor(username){
        this.username = username
    }
    logme(){
        console.log(`Userename : ${this.username}`);
    }
    createId(){
        return `123`
    }

}

const hasan = new user("hasan")
console.log(hasan.createId())

 class Teacher extends user {
    constructor(email,username){
        super(username)
        this.email =email

    }
 }

 const iphone = new Teacher("iphone", "i@phone.com")
console.log(iphone.createId());