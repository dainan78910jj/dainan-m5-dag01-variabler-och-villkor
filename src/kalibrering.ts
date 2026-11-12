console.log("A Rainy Day");

// step 1
const firstName: string = "Dainan";
console.log("My name is " + firstName);

// step 2
const numberOne: number = 189.5;
const numberTwo: number = 256;

console.log(`${numberOne} plus ${numberTwo} equals ${numberOne + numberTwo}`);

// step 3
const selectedNumber: number = 3;
if (selectedNumber > 10) {
  console.log("Stort");
} else {
  console.log("Litet");
}

// step 4
for (let i = 1; i <= 5; i++) {
  console.log(`Current number: ${i}`);
}

// step 5
const double = (input: number) => {
  return input * 2;
};

let input = 58;
console.log(double(input));

input = -9;
console.log(double(input));

input = 0.25;
console.log(double(input));
