//....  Data Types
//                  Two types os data types

//...  1=> Primitive data types
//   7 types=> String , Number , Boolearn , null , undefined ,Symbol ,BigInt

const id = Symbol('123')
const anotherid = Symbol('123')
console.log(id ===anotherid);

const bigNumber = 123456789990n

// ...2=> Reference (Non primitive)

/// types=>Array ,object ,  Function

const friends = ["Hasan","zain","junaid","Hashim"]

let myobj = {
    name:"hasan",
    age: 20
}

const Myfunction(){
    console.log("hello words");
}

// .......********  Memory   *********.................

// two types 

// Stack(Primitive)  , Heap(non-primitive)

let muname = "hasan"