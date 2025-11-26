

// ## **Functions**

// **1. Function Declaration**

// Buat fungsi `luasPersegi(sisi)` yang mengembalikan luas persegi.

// ```jsx
// // Function Declaration 
function luasPersegi(sisi) {
    return sisi * sisi;
}
console.log(luasPersegi(4));



// **2. Function Expression**

// Buat function expression bernama `greet` untuk menyapa nama pengguna.

// ```jsx
// // Function Expression
const greet = function(nama) {
    console.log("Halo, " + nama + "!");
}
greet("Budi");



// **3. Arrow Function**

// Buat arrow function bernama `jumlah(a, b)`.

// ```jsx
// // Arrow Function
const jumlah = (a, b) => a + b;
console.log(jumlah(5, 7));


// **4. Default Parameter & Rest Parameter**

// 1. `salam(nama = "Mahasiswa")`
// 2. `jumlahSemua(...nums)` untuk menjumlahkan semua angka.


// Default Parameter & Rest Parameter
function salam(nama = "Mahasiswa") {
    console.log("Halo " + nama);
}

function jumlahSemua(...nums) {
    return nums.reduce((total, n) => total + n, 0);
}

salam();
console.log(jumlahSemua(1, 2, 3, 4, 5));