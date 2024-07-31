let arr = [1,2,3,4,5,6,7,8,9];
let arr3 = [1,2,3,4,5,6,7,8,9];
let arr2 = [1,2,3,4,5,6,7,8,9];

// console.log(arr);
// console.log(arr.length);
// arr[0] = 45;
// console.log(arr[0]);
// console.log(arr);

// console.log(arr.toString());
// console.log(arr.join('*'));
// // console.log(arr.pop());
// console.log(arr.push(100));
// console.log(arr.push("rabi"))

// console.log(arr.shift()); // removes first elements
// console.log(arr.unshift(55)); // add new element in beginning
// console.log(delete arr[1])
// console.log(arr.concat(arr1, arr2));
// Sorting
// let arr3 = [1, 9, 4, 5, 6, 3, 10, 15, 2, 22, 11, 43, 55];
// arr3.sort();
// console.log(arr3.sort())
// let arr4=[2, 1, 5]
// console.log(arr4.sort())

// console.log(arr.splice(1, 2))
// console.log(arr.splice(1, 2, 23, 45))

// console.log(arr1.slice(2, 6))
// console.log(arr1.reverse());

// let arr1 = [1, 89, 55, 78, 65]
// looping through arrays
// for (let index = 0; index < arr1.length; index++) {
//     const element = arr1[index];
    
//     console.log(element);
// }
// foreach loops
// arr1.forEach((value, index, arr)=>{
//     console.log(value, index, arr)
// })

let Obj = {
    a:1,
    b:2,
    c:3,
    d:4
}
// forin loops
// for (const key in Obj) {
//     if (Object.prototype.hasOwnProperty.call(Obj, key)) {
//         const element = Obj[key];
//         console.log(key, element)
        
//     }
// }

// forof loop
// for (const iterator of arr1) {
//     console.log(iterator)
// }

// map filter reduce 
let arr1 = [1, 89, 55, 78, 65]
// let newArr = []
// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     newArr.push(element**2)
    
// }
// using maps
// let newArr = arr.map((value, index, array)=>{
//     return value**2;
// })
// console.log(newArr)


// filter
// const greaterthanseven = (e)=>{
//     if(e > 7){
//     return true};
//     return false;
// } 
// console.log(arr.filter(greaterthanseven))

// reduce

let arr5 = [1, 89, 55, 78, 65]

const red = ((a,b)=>{
    return a+b
})
console.log(arr5.reduce(red))


// Arrayfrom
console.log(Array.from("Rabindra"))