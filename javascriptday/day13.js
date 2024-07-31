// create a business name generator by combining the list of adjectives and shop name and word

/* Adjactives 
 Crazy
 fire 
 amazing

 shop name: 
 Engine
 Garments
 Foods

Another word:
Bros
Limited 
hub
*/

// let titles ={
//     1:"Crazy",
//     2:"Amazing",
//     3:"Fire"
// };

// let shopName ={
//     1:"Engine",
//     2:"Garments",
//     3:"Foods"
// };
// let anotherWord = {
//     1:'Bros',
//     2:"Limited",
//     3:'Hub'
// };

// function BusinessNameGenerator(){
//     let random = Math.floor(Math.random() * 3) + Math.floor(Math.random()* 2 + 1);
//     console.log(`${titles[random]} ${shopName[random]} ${anotherWord[random]}`);
//     console.log(random);

// }
// BusinessNameGenerator();

let rand = Math.random()
let first, second, third;
// first part
if(rand < 0.33){
    first = "Crazy"
}
else if(rand <0.66 && rand >=0.33){
    first = "Amazing"
}
else{
    first ='Fire'
}
//second part
rand = Math.random()
if(rand < 0.33){
    second = "Engine"
}
else if(rand <0.66 && rand >=0.33){
    second = "Garments"
}
else{
    second ='Food'
}
//third part
rand = Math.random()
if(rand < 0.33){
    third = "Bros"
}
else if(rand <0.66 && rand >=0.33){
    third = "Limited"
}
else{
    third ='Hub'
}

console.log(`${first} ${second} ${third}`)
