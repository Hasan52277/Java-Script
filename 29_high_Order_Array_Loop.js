// 1....> For of loop  ***********

const arr = [1,2,3,4,5,6]

for (const val of arr) {
   // console.log(val);
}


const greeting = "hello world"
for (const name  of greeting) {
 //   console.log('Each order',name);
    
}

//  Maps



const map = new Map()
map.set('In','india')
map.set('USA','united state of india ')
map.set('fr','franch')

//console.log(map);

for (const [key,value] of map) {
    // console.log(key,':-',value);
    
}

const myobject ={
    game1:'NFS',
    game2:'Spiderman'
}
// for (const [ket,value] of myobject) {
//     console.log(key,':-',value);
    
// }

// 2....> For in loop  ***********

const myObject = {
    js:'javascript',
    cpp:'c++',
    rb:"ruby",
    swift:'Swift by apple'
}

for (const key in myobject) {
   // console.log(`${key} shortcut is for ${myobject[key]}`);
   
}

const progammming = ["js","react","java","python"]
for (const key in progammming) {
// console.log(`${key} shortcut for ${progammming[key]}`);   
}

// const map = new Map()
map.set('In','india')
map.set('USA','united state of india ')
map.set('fr','franch')

for (const key in map) {
  //  console.log(map);
    
}

