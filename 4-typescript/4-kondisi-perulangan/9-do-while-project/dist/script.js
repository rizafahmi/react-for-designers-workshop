console.log("It worked!");
function randomizeNumber(max) {
    return Math.floor(Math.random() * max);
}
var maxNumber = 10;
var randomNum = randomizeNumber(maxNumber);
var guess = 0;
var count = 0;
do {
    guess = parseInt(prompt("Saya memikirkan sebuah angka antara 0 dan " + maxNumber + ". Bisa tebak?"));
    count += 1;
} while (guess != randomNum);
alert("Selamat! Kamu berhasil menebak angka " + randomNum + " setelah mencoba sebanyak " + count + " kali!");
