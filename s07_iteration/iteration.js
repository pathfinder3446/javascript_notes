//* ======================================================
//*                   FOREACH METHOD
//* ======================================================

console.log('****** ITERATION **********');
//*Dizideki herbir fiyati konsola bastiriniz.

const fiyatlar = [100, 250, 50, 89];

//*dizideki herbir fiyatı konsola bastırırız.

fiyatlar.forEach(yazdir);

function yazdir(value){
    console.log(value)
};


// 2nd version

fiyatlar.forEach((value) => console.log(value));

// fiyatlar dizisindekilerin toplamını alıp yazdıralım
toplam = 0;
fiyatlar.forEach( (fiyat) => toplam += fiyat );
console.log(`Toplam: `, toplam);

// farklı formatla tekrar yapalım

let toplam1 = 0;

fiyatlar.forEach( (value, index, arr) => {
    toplam1 += value
    console.log(`${index}. iterasyon yoplamı: ${toplam1}`);
    arr[index] = value + 10; //tüm parametreleri kullanmış olmak için bu işlemi yaptık normalde gerekli değildi.
});

//*-------------- ÖDEV -------------------
//* fiyatlar dizisinde her bir fiyata %10 zam yapalım.