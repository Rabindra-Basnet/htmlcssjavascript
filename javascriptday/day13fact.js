// calculate a factorial using reduce and for loops
//  1, 2,3, 4,5,6



let number =(prompt("Enter a number"));
if(number < 0){
    console.log('Error Occured')
}
else if (number === 0){
    console.log("1")
}
else{

    var fact = 1;
    for(let i = 1; i <= number; i++){
        // fact *= i ;
        fact *= i
    
    }
    console.log(fact)
}
