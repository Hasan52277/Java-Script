// function multipleby5(num) {
//   return num * 5;
// }
// multipleby5.power = 2;

// console.log(multipleby5(2));
// console.log(multipleby5.power);
// console.log(multipleby5.prototype);

// function createUser(username, score) {
//   this.useranem = username;
//   this.score = score;
// }

// createUser.prototype.increment = function () {
//    this.score++
    
// }

// const chai = createUser("chai",25)
// const tea = createUser("chai",250)


let myname  = "Hasan  "

// console.log(myname.trueLenght);


let myHeros = ["thor", "spiderman"]
let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`); // this ka matrlab ise ka 
    }
}

Object.prototype.hitesh = function(){
    console.log(`hitesh is present in all objects`);
}

Array.prototype.heyHitesh = function(){
    console.log(`Hitesh says hello`);
}

// heroPower.hitesh()
// myHeros.hitesh()
// myHeros.heyHitesh()
// heroPower.heyHitesh()

// inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"hitesh".trueLength()
"iceTea".trueLength()
