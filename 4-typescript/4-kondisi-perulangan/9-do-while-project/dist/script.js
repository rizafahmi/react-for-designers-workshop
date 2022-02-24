console.log("It worked!");
function randomizeNumber(max) {
    return Math.floor(Math.random() * max);
}
var maxNumber = 10;
var randomNum = randomizeNumber(maxNumber);
prompt("Saya memikirkan sebuah angka antara 0 dan ".concat(maxNumber, ". Bisa tebak?"));
