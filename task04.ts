// TODO-04: Write if/else if to check and print:
// Divisible by both 3 and 5 → "FizzBuzz"
// Divisible by only 3 → "Fizz"
// Divisible by only 5 → "Buzz"
// Otherwise → "Not divisible by 3 or 5"

// TODO BONUS: Rewrite with if

const num = 15;

// if (num % 3 === 0 && num % 5 === 0){
//     console.log("FizzBuzz");
// }
// else if (num % 3 === 0){
//     console.log("Fizz");
// }
// else if (num % 5 === 0){
//     console.log("Buzz");
// }
// else{
//     console.log("Not divisible by 3 or 5")
// }

const fizzBuzz = (number: number) => {
    if (number % 3 === 0 && number % 5 === 0) {
      console.log("FizzBuzz");
    } else if (number % 3 === 0) {
      console.log("Fizz");
    } else if (number % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log("Not divisible by 3 or 5");
    }
};

fizzBuzz(15)

const fizzBuzz2 = fizzBuzz
fizzBuzz2(10)

const fizzBuzz3 = fizzBuzz
fizzBuzz(10)



