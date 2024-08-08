async function sleep() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(45);
    }, 1000);
  });
}
function sum(a, b, c){
    return a + b + c;
}

(async function main() {
//   let a = await sleep();
//   console.log(a);
  
//   let b = await sleep();
//   console.log(b);
  
//  Destructing  s
// let [x, y, ...rest ] = [1,5, 7, 8, 9, 10]
// console.log(x,y, rest)

// let obj = {
//     a:1,
//     b:2,
//     c:3
// }
// let {a, b} = obj
// console.log(a,b)

// let arr = [1, 2, 3]
// console.log(sum(...arr))


const arr = [1,2,3,4,5,6,78,8,9,9]
const obj = {...arr}
console.log(obj)

})();
//iiie
