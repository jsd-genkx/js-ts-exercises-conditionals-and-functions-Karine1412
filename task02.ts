// TODO-02: Use if/else to check if it's a number
// (hint: typeof or isNaN)

const userInput = 42;
// Try changing to "hello", 10, null, NaN
let isNumber = typeof userInput;

if (isNumber === "number")
{
    console.log(`T :${userInput} "This is Number"`);
} 
else {
    console.log(`F :${userInput} "This is not a Number"`);
}
