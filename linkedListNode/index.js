console.log("--------------------------------");

console.log("1" == 1);
console.log("1" === 1);

let a = { name: "Thando" };
let b = { name: "Thando" };
let c = a;

console.log("a === b", a === b);
console.log("a === c", a === c);
console.log("a == b", a == b);
console.log("Object.is(a, b)", Object.is(a, b));
console.log("Object.is(a, c)", Object.is(a, c));

console.log("--------------------------------");

const numbers = [1, 2, 3, 4, 5];

const reducerFn = function (accumulator, currentValue) {
    console.log("--- Iteration ---");
    console.log("Accumulator " + accumulator);
    console.log("Current Value " + currentValue);
    
    const nextAccumulator = accumulator + " " + currentValue;
    console.log("Next Accumulator " + nextAccumulator);

    return nextAccumulator;
}


const initialValue = 0;
const sum = numbers.reduce(reducerFn, initialValue);

console.log(sum);