const  user  ={
    username:"Hasan",
    price:99,

    welcomemessage:function () {
        console.log(`${this.username} , welcome to websites `);
        console.log(this);
    }
}
// user.welcomemessage()
// user.username = "sam"
// user.welcomemessage()
console.log(this);

// function chai() {
//     let username = "Hasan"
//     console.log(this);
// }
// chai()

const chai = ()=>{
    let username = "Hasan"
       console.log(this.username);
}
chai()

const addtwo =(num1,num2)=>{
    return num1+num2
    

}
console.log(addtwo(3,4));