// console.log(`*******LOOPS******`);

// for(let i=1 ; i<=10 ; i++){
//     const randomsayi = Math.floor(Math.random() *100 + 1) ;
//     console.log(randomsayi)
// }

// Math.random() 0 ile 1 arasında rastgele sayı üretir
// Math.floor() sayıyı tabana yuvarlar
// Math.ceil yukarı yuvarlar
// Math.round() değerine göre yuvarlar

// console.log(`Program Bitti`);

// // örnek: 1 den n'e kadar sayıları tplayalım.

// const n = prompt(`n sayısını giriniz:`);
// let toplam = 0;
// for (let i = 1; i <= n; i++) {  
//     toplam += i;
// }

// console.log(`Toplam:`, toplam);

//******************** WHILE ************

// let i = 1;
// while(i<=5) {
//     console.log(`Merhaba-`, i);
//     i++;
// }

// console.log(`Bitti`)

// örnek

const not = prompt(`Lütfen notunuzu giriniz (0-100):`);

//************* do while ***********

let i = 1;

do {
    console.log(`Merhaba-`, i);
    i++;
} while (i <= 5);
