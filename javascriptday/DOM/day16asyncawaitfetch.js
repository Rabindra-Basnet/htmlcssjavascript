// async function getData() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(455);
//     }, 53500);
//   });
// }

// settle means resolve or reject 
// resolve means promise has settled successfully
// reject means promise has not settled successfully.


async function getData() {
 // SIMULATING THE PROCESS OF getting data from web

 let x = await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST', 
    body: JSON.stringify({
        title: 'foo',
        body: 'bar', 
        userId: 1,
    
    }), 
    headers:{
        'Content-type' : 'application/json; charset=UTF-8',
    },

 })
 let data = await x.json()
//  console.log(data)
return data
}



async function main() {
  console.log("Loading modules");

  console.log("Do something else");

  console.log("load data");

  let data = await getData();

  console.log(data);
  console.log("process data");
  console.log("task2");
}
main();

// getData().then((v)=>{
//     console.log(data)
//     console.log('process data');
//     console.log('task2');
// })
