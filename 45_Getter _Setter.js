// class User {
//   constructor(email, password) {
//     this.email = email;
//     this.password = password;
//   }

// get email (){
//     return this._email._email.toUpperCase()
// },
// set email (value){
//      this._email = value
// }

//   get password() {
//     // return this._password.toUpperCase();
// return `${this._password}hasan`

//   }
//   set password(value) {
//     this._password = value.toUpperCase();
//   }
// }

// const hasan = new User("hasan@gmail", "123");
// console.log(hasan.password);

// Oldest method of Getter and Setter

// function User (email ,password) {
//     this._email = email
//     this._password = password
//     Object.defineProperty(this,'email',{
//         get:function () {
//             return this._email.toUpperCase()
//         },
//         set:function (value) {
//             this.email =value
//         }
//     })

// }
// const hassan = new User("hasan@gmail", "123");
// console.log(hasan.password);

// Getter Setter method on Object

const User = {
  _email: "h@.com",
  _password: "abc",

  get email() {
    return this._email.toUpperCase();
  },
  set email(value) {
    this._email = value;
  },
};

const tea = Object.create(User);
console.log(tea.email);
