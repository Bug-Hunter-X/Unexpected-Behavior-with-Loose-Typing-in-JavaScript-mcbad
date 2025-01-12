function foo(a,b){if(typeof a !== 'number' || typeof b !== 'number'){return "Invalid input.  Numbers only.";}
return a+b;}
console.log(foo(2,3)); //outputs 5
console.log(foo(2)); //outputs Invalid input. Numbers only.
console.log(foo(2,"hello")); //outputs Invalid input. Numbers only.