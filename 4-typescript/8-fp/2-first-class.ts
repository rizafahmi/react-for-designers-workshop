function greet(salutation: string) {
  return function (name: string) {
    return `${salutation}, ${name}!`;  
  }
  
}

const howdy = greet("Howdy");
const halo = greet("Halo");

console.log(halo("Arif"));
console.log(halo("Siska"));
console.log(howdy("Clark"));

