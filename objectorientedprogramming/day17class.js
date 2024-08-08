// let obj = {
//     a:1,
//     b:"Harry"
// }

// console.log(obj);

// let animal = {
//     eats:true,
// };
// let rabbit = {
//     jumps:true,
// };

// rabbit._proto_ = animal; //  sets rabbit.[[Prototype]] = animal


// class Animal{
//     constructor(name){
//         this.name = name
//         console.log('objected is created');   
//     }
//     eats(){
//         console.log('eating food');    
//     }
//     jumps(){
//         console.log("jumpins");
// }

// }

// class lion extends Animal{
// constructor(name){
//     super(); // this helps to call the parent class
//     this.name = name;
//     console.log('the lion class is created with its name');
    
// }
// eats(){
//     console.log('Eating meat by lion');
    
// }
// }
// let a = new Animal("bunny");
// console.log(a);

// let b = new lion('shera')
// console.log(b);

// setInterval(() => {
    
//     let random = Math.ceil(Math.random()*100)
//     console.log(random);
// }, 1000);

class User {
    constructor(name){
        this.name = name;
    }

    get name(){
        return this._name;
    }
    set name(value){
        if(value.length < 4){
            alert("Name is too short.");
            return;
        }
        this._name = value;
    }
}

let user = new User("John")
console.log(user.name);

// user = new Userser('')

user.name = "Harry"
console.log(user.name)