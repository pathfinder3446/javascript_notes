console.log(`*******LOOPS******`);

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

// let not = prompt(`Lütfen notunuzu giriniz (0-100):`);

// while(not<0 || not>100) {
//     console.log(`Girdiğiniz not 0-100 arasında olmalıdır.`);
//     not = prompt(`Lütfen notunuzu giriniz (0-100):`)
//     }
//      console.log(`Giridiğiniz not:`, not)

//************* do while ***********

// let i = 1;

// do {
//     console.log(`Merhaba-`, i);
//     i++;
// } while (i <= 5);


// let not;

// do {
//     not = prompt(`Lütfen notunuzu giriniz (0-100):`);
//     if (not<0 || not>100) {
//         alert(`Girdiğiniz sayı 0-100 arasında olmalıdır`)
//     }
// } while (not<0 || not>100) ;
 
// console.log(`Giridiğiniz not:`, not)


//?girilen sayının asal sayı olup olmadığını kontrol eden program yazalım.

// let number = Number(prompt(`Enter a number for checking  it is a prime or not: `));
// let count = 0
// for (let i=2; i < number; i++) {
//     if (number % i === 0) {
//       count += 1
// }}

// if (count > 0) {
//   console.log(`${number} is not prime`);
// } else {
//     console.log(`${number} is prime`);
// }


//? JS ÖDEV 1: Klavyeden Q karakteri girilene kadar not girişi yapan bir programı döngü kullanarak yazınız.

// let enterGrade;
// enterGrade = prompt("enter a student grade(0-100) : ");
// while (enterGrade == "Q" || enterGrade == "q" || enterGrade>0 || enterGrade<100) {
//     if(enterGrade<0 || enterGrade>100) {
//         console.log("Girdiğiniz not 0-100 arası olmalıdır");
        
//     }
//     else if(enterGrade == "Q" || enterGrade == "q"){
//         console.log("quiting...");
//         break;
//     } 
//     else {
//         console.log(`Grade-${enterGrade}`);
//     }
//     enterGrade = prompt("enter a student grade(0-100) : ");
// }

