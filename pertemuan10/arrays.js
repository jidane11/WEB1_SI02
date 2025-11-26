// ## Arrays

// **1. Membuat Array**

// Buat array?
// buah = ["apel", "mangga", "pisang"]

// Membuat Array
let buah = ["apel", "mangga", "pisang"];
console.log(buah[0]);
console.log(buah.length);

// Tampilkan elemen pertama dan panjang array.


// **2. Menambah Elemen**

// Tambahkan elemen menggunakan:

// - `push()`
// - `buah[buah.length] = ...`

//     ```jsx
// Menambah Element


buah.push("jeruk");
buah[buah.length] = "anggur";


//     **3. Looping Array**

// Tampilkan seluruh elemen array `buah` dengan loop.

// ```jsx
// // Looping Array
for (let i = 0; i < buah.length; i++) {
    console.log(buah[i]);
}


// **4. Array toString**

// Tampilkan array dalam bentuk string.

// ```jsx
// // Array toString
console.log(buah.toString());


// **5. Array Berisi Berbagai Tipe**

// Buat array dengan kombinasi string, angka, boolean, object, dan array.

// ```jsx
// // Array Berisi Berbagai Tipe
let campur = ["teks", 123, true, {nama: "Budi"}, [1,2,3]];
console.log(campur[1]);
console.log(campur[3].nama);
