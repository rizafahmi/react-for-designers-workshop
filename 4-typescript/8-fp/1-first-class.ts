const add = (num1: number, num2: number): number => num1 + num2;

const substract = (num1: number, num2: number): number => num1 - num2;

const perform_calculation = (num1: number, num2: number, calcFn: (num1: number, num2: number) => number) => {
  return calcFn(num1, num2);
}

console.log(add(1, 2));
console.log(substract(5, 3));
console.log(perform_calculation(5, 5, add));
console.log(perform_calculation(5, 4, substract));
console.log(perform_calculation(5, 5, (num1: number, num2: number) => num1 * num2));