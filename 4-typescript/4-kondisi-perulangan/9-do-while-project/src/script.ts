console.log("It worked!");

function randomizeNumber(max: number): number  {
    return Math.floor(Math.random() * max);
}

const maxNumber = 10;
const randomNum = randomizeNumber(maxNumber);
let guess: number = 0;
let count: number = 0;

do {
  guess = parseInt(prompt(`Saya memikirkan sebuah angka antara 0 dan ${maxNumber}. Bisa tebak?`));
  count += 1;
} while(guess != randomNum)

alert(`Selamat! Kamu berhasil menebak angka ${randomNum} setelah mencoba sebanyak ${count} kali!`)