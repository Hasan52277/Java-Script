const marvelherose = ["thor","Ironman","spiderman"]
const dc = ["superman", "flash" , "batamn"]

marvelherose.push(dc)
console.log(marvelherose);

// const allnewherose = [...marvelherose,...dc]
// console.log(allnewherose);




const another_array = [1,2,3,4,[5,6,7,8,],9,[1,1,1,1,1,[2,2,2,]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);

