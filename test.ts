// let age = 19

// if (age > 18){
//     console.log("You can vote");
// } else {
//     console.log("You are too young")
// }


// let num1 = 100
// let num2 = 200;

// function add(num1, num2) {
//     return num1 * num2
// }
// console.log (add(100, 200));

//function declaretion

// function doSomething(number:number, email:string) {
//     return `${number} --> ${email}`;
// }
// doSomething(123, "mean@email.com")
// console.log(doSomething(123, "mean@gmail.com"))
// console.log(doSomething("mean@email.com", 123));

// function doSomething(number: number, email: string){
//     return `${number} --> ${email}`;
// }
// console.log("before: ", three);

// var three = 3
// console.log("After: ", three);

//express function
// const doSomething2 = function(number: number, email:string){
//     return`doSomething2: ${number} --> ${email}`;
// }
// console.log(doSomething2(123, "mean@gmail.com"));
// const doMore = doSomething2

// const doSomething3 = (number: number, email:string) => {
//     return `doSomething2: ${number} --> ${email}`;
// }
// console.log(doSomething3(123, "mean@gmail.com"));

// const doSomething4 = (number: number, email:string) =>
//     `doSomething4: ${number} --> ${email}`;

// console.log(doSomething4(123, "mean@gmail.com"));


// Global-Function-Block Scopes //
let globalVariable = "I am global 🌏";

function myFunction() {
	let functionVariable = "I am in function scope 🏭";

	if (true) {
		let blockVariable = "I am in block scope 📦";
		var blockVariableFunc = "I am block scoped 📦 with var (function scope 🏭)";

		//Logging in Block Scope 📦//
		console.log("blockVariable in if(){}📦:", blockVariable);
		console.log("blockVariableFunc in if(){}📦:", blockVariableFunc);

		console.log("functionVariable in if(){}📦:", functionVariable);

		console.log("globalVariable in if(){}📦:", globalVariable);
	}
	// Logging in Function Scope 🏭//
	console.log("blockVariable in myFunction()🏭:", blockVariable);
	console.log("blockVariableFunc in myFunction()🏭:", blockVariableFunc);

	console.log("functionVariable in myFunction()🏭:", functionVariable);

	console.log("globalVariable in myFunction()🏭:", globalVariable);
}

myFunction();

// Logging in Global Scope 🌏//
console.log("blockVariable in global🌏:", blockVariable);
console.log("blockVariableFunc in global🌏:", blockVariableFunc);

console.log("functionVariable in global🌏:", functionVariable);

console.log("globalVariable in global🌏:", globalVariable);

// Lecical Scope //
console.log(outer);
function outer() {
	let outerVariable = "I am from outer ☔";

	function inner() {
		let outerVariable = "I am from outer ☔ (Nope! I'm from inner 💧)";
		let innerVariable = "I'm from inner 💧";

		console.log(innerVariable);
		console.log(outerVariable);
	}

	inner();
}

outer();