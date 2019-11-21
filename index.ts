let message : string = "ほげ！";
console.log(message);

// Declare a tuple type
let x: [string, number];
// Initialize it
x = ["hello", 10]; // OK
// Initialize it incorrectly
// x = [10, "hello"]; // Error

console.log(x[0].substring(1)); // OK
// console.log(x[1].substring(1)); // Error, 'number' does not have 'substring'

// x[3] = "world"; // Error, Property '3' does not exist on type '[string, number]'.

// console.log(x[5].toString()); // Error, Property '5' does not exist on type '[string, number]'.

function f([first, second]: [number, number]) {
    console.log(first);
    console.log(second);
}
f([1, 2]);
// f([1, 2, 3]);   // Argument of type '[number, number, number]' is not assignable to parameter of type '[number, number]'.

let tuple: [number, string, boolean] = [7, "hello", true];
// let [a, b, c] = tuple; // a: number, b: string, c: boolean
// let [a, b, c, d] = tuple; // Error, no element at index 3

// let [a, ...bc] = tuple; // bc: [string, boolean]
// console.log(`a:${a}`);
// console.log(`bc:${bc}`);

// let [a, b, c, ...d] = tuple; // d: [], the empty tuple
// console.log(`a:${a}`);
// console.log(`b:${b}`);
// console.log(`c:${c}`);
// console.log(`d:${d}`);

let [a] = tuple; // a: number
let [, b] = tuple; // b: string
console.log(`a:${a}`);
console.log(`b:${b}`);
