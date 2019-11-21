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

// let [a] = tuple; // a: number
// let [, b] = tuple; // b: string
// console.log(`a:${a}`);
// console.log(`b:${b}`);

let o = {
    a: "foo",
    b: 12,
    c: "bar"
};
// let { a, b } = o;
// ({ a, b } = { a: "baz", b: 101 });
// console.log(`a:${a}`);
// console.log(`b:${b}`);

// let { a, ...passthrough } = o;
// let total = passthrough.b + passthrough.c.length;
// console.log(`a:${a}`);
// console.log(`total:${total}`);

// Property renaming
// let { a: newName1, b: newName2 } = o;
// console.log(`newName1:${newName1}`);
// console.log(`newName2:${newName2}`);
// newName1 = 'hoge';
// console.log(`o.a:${o.a}`);

// let { a, b }: { a: string, b: number } = o;
// console.log(`a:${a}`);
// console.log(`a:${b}`);

// Default values
function keepWholeObject(wholeObject: { a: string, b?: number }) {
    let { a, b = 1001 } = wholeObject;
    console.log(`a:${a}`);
    console.log(`b:${b}`);
}

// keepWholeObject({a: 'hoge'});
keepWholeObject({a: 'hoge', b: 200});

function ff({ a="", b=0 } = {}): void {
    // ...
    console.log(`a:${a}`);
    console.log(`b:${b}`);
}
// ff();
ff({a: 'hoge', b: 100});

function fff({ a, b = 0 } = { a: "" }): void {
    // ...
}
fff({ a: "yes" }); // ok, default b = 0
fff(); // ok, default to { a: "" }, which then defaults b = 0
// fff({}); // error, 'a' is required if you supply an argument
