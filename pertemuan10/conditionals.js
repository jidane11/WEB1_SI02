// CONDITIONALS
// 1. If–Else Sederhana
// Buat program yang meminta input nilai ujian (0–100), lalu tampilkan kategori:
// A (≥ 90)
// B (≥ 80)
// C (≥ 70)
// D (≥ 60)
// E (< 60)

let nilai = 85;

if (nilai >= 90) {
    console.log("A");
} else if (nilai >= 80) {
    console.log("B");
} else if (nilai >= 70) {
    console.log("C");
} else if (nilai >= 60) {
    console.log("D");
} else {
    console.log("E");
 }


// **2. Switch Case**

// Buat program yang menerima angka 1–7 dan menampilkan nama hari: 1 → Senin, …, 7 → Minggu

// Selain itu: “Input tidak dikenal

// ```java
// // Switch Case
// ```

let hari = 3;
switch (hari) {
    case 1: console.log("Senin"); break;
    case 2: console.log("Selasa"); break;
    case 3: console.log("Rabu"); break;
    case 4: console.log("Kamis"); break;
    case 5: console.log("Jumat"); break;
    case 6: console.log("Sabtu"); break;
    case 7: console.log("Minggu"); break;
    default: console.log("Input tidak dikenal");
}

// **3. Ternary Operator**

// Gunakan ternary operator untuk menentukan apakah seseorang boleh membuat KTP (usia ≥ 17).

// Ternary Operator
let usia = 17;
let status = usia >= 17 ? "boleh buat ktp" : "belum boleh buat ktp";
console.log(status);