function Setusername(username) {
  // complex DB calls
  this.username = username;
}

function createUser(username, email, pasword) {
  Setusername.call(this,username);

  this.email = email;
  this.pasword = pasword;
}

const  chai  = new createUser("chai","hasan@123","123")
console.log(chai);
