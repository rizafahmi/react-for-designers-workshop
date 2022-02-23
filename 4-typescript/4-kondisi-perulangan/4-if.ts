let uang = 100_000;
let hargaBuku = 200_000;
let hargaKomik = 150_000;

if (uang >= hargaBuku) {
  console.log("Sukses membeli buku");
} else if (uang < hargaBuku && uang >= hargaKomik) {
  console.log("Tidak bisa membeli buku, beli komik saja");
} else {
  console.log("Uang tidak cukup untuk membeli buku ataupun komik.");
}