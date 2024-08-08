let a = prompt("Enter first number");

let b = prompt("Enter second number");

if (isNaN(a) || isNaN(b)) {
  // throw SyntaxError('The given input is invalid')
  throw TypeError("Type a number rather than other literal");
}

function main() {
    let  x  = 3;
  try {
    console.log("the sum is ", parseInt(a) + parseInt(b) * x);
    return true
  } catch (error) {
    alert(error.name);
    alert(error.message);
    alert(error.stack);
    return false
  } finally {
    console.log("Files are closed and db connection are being closed"); // it helps to make a finally code to produce output after returning try or catch
  }
}

let abc = main();
