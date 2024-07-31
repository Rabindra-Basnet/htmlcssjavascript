// Global context
console.log(this); // window (in browsers)

// Regular function
function regularFunction() {
    console.log(this); // window (non-strict mode) or undefined (strict mode)
}
regularFunction();

// Object method
const obj = {
    method: function() {
        console.log(this); // obj
    }
};
obj.method();

// Constructor function
function Person(name) {
    this.name = name;
}
const person = new Person('Alice');
console.log(person.name); // Alice

// Arrow function
const obj2 = {
    value: 42,
    arrowFunction: () => {
        console.log(this); // this from the surrounding lexical scope
    }
};
obj2.arrowFunction();

// Event handler
document.querySelector('button').addEventListener('click', function() {
    console.log(this); // the button element
});
