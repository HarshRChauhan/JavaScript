console.log("hello");

const arr=[1,2,3,4,5];


//   --------------------------------------------  map function  --------------------------------------------
const square=arr.map((i)=>{
    return i*i
})
console.log(square);
console.log(arr);


//   --------------------------------------------  forEach function  --------------------------------------------
let sum=0
arr.forEach(num => {
    sum += num
})
console.log(sum);

