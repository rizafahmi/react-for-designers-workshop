console.log("It worked!");

function randomizeNumber(max: number): number  {
    return Math.floor(Math.random() * max);
}

const maxNumber = 10;
const randomNum = randomizeNumber(maxNumber);
const guess: number = parseInt(prompt(`Saya memikirkan sebuah angka antara 0 dan ${maxNumber}. Bisa tebak?`));

do {
  
} while()