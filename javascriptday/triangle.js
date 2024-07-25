
// for (let i = 1; i <= 5; i++){   
//     let b = " ";
//     for (let j = 0; j < i; j++) { 
//         b = b + " * ";

//     }
//     console.log(b);
// }





// /**
//  1
//  12
//  123
//  1234
//  12345
//  */

// for(let row = 5; row >= 1; row--){
//     let space = " ";
//     let number = 1;
//     for (let cols = 0; cols <= 5 - row; cols++){
//         space+= number + " ";
//         number++;
//         // console.log(" ")
//     }
//     console.log(space);
//     console.log(" ")

// }

// /*

// 1 
// 2 2
// 3 3 3
// 4 4 4 4
// 5 5 5 5 5

// */

// for(let row = 1; row <= 5; row++){
//     let space = " ";
//     // let number = 1;
//     for(let cols = 1; cols <= row; cols++){
//         space+=row + " ";
//         // number++;
       
//     }
//     console.log(`${space}`)
//     console.log(' ');
// }


// function sum(a, b){
//     return a  + b;
// }
// sum(12, 12);
// console.log(sum(12, 12))

// const funct1 = (x) =>{
//     console.log(x + x);
// }
// funct1(12);


let character = prompt("Enter your name");

let obj = {
    'name' : 'Rabindra',
    'Role Name' : "Assistant",
    'Address' : "Kathmandu"
}

character = obj[character]
console.log(character)