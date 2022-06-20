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
let toplam = 0;
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

fiyatlar.forEach( (val, ind, ar) => ar[ind] = val + (0.1 * val));

console.log(fiyatlar);


//* ======================================================
//*                   MAP() METHOD
//* ======================================================



const isimler = [
    "ahmet",
    "mehmet",
    "ismet",
    "saffet",
    "ahmet",
    "nur",
    "can",
    "nur",
    "mehmet",
    "cem",
  ];

console.log(isimler.map((isim) => isim.toLocaleUpperCase()));

const kucukIsimler = isimler.map((isim) => isim.toLocaleLowerCase());
console.log(kucukIsimler);


//*-------------- ÖRNEK -------------------

const buyukIsimler = isimler.map((isim, i, dizi) => {
    dizi[i] = isim.toLocaleLowerCase(); //! Orjinal diziyi değiştirdik.
    return isim.toLocaleUpperCase();
  });
  
  console.log(buyukIsimler);
  
  //* ======================================================
  //*                CHAINING (PIPELINE)
  //* ======================================================
  //! Tüm isimleri büyük harfe çevirip konsolda yazdiriniz.
  isimler
    .map((isim) => isim.toLocaleUpperCase())
    .forEach((name) => console.log(name));
  
  // console.log(
  //   isimler
  //     .map((isim) => isim.toLocaleUpperCase())
  //     .forEach((name) => console.log(name))
  // );
  
  //* map() metodundan sonra eğer forEach gibi bir terminal(consumer) işlemi
  //* kullanılırsa yazılan ifade bir dizi döndürmemiş olur.
  
  //* ======================================================
  //*                       FILTER METHOD
  //* ======================================================
  
  //! Ahmet olanları seçip büyük harfe çevirip konsolda yazdiriniz.
  isimler
    .filter((x) => x === 'ahmet')
    .map((x) => x.toLocaleUpperCase())
    .forEach((x) => console.log(x));
  
  //* fiyatlar array'inde fiyatı 250 TL den az olanlari ayri bir diziye saklayalim.
  
  const kucuk250 = fiyatlar.filter((f) => f < 250);
  console.log(kucuk250);
  
  
  //*-------------- ÖDEV -------------------
  //* fiyatlar dizisindeki fiyatı 90'dan büyük olan değerleri
  //* konsola tek tek bastırınız.

  const buyuk90 = fiyatlar
  .filter((f) => f > 90)
  .forEach((f) => console.log(f));
  
  //* fiyatlar dizisindeki fiyatı 110'dan küçük olan değerlere
  //*  %10 artış yapın ve bu değerleri konsola tek tek bastırınız.

  const yuzde10 = fiyatlar
  .filter((f) => f < 110)
  .map((f) => f + (f*0.1))
  .forEach((f) => console.log(f));
  
  
  //* maaslar 4000'den düsük olanlara %50 zam yapmak istiyoruz
  //* ve bunu ayri dizi olarak saklamak istiyoruz.
  const maaslar = [3000, 5000, 4000, 6000, 6500];
  
  //* Maasi 4000 'den büyük olanlara %25 zam yaparak sonuçlari yazdiralim.

  //* ======================================================
//*                       REDUCE METHOD
//* ======================================================

//* maas toplamini bulunuz.
const toplamMaas = maaslar.reduce((t, m) => t + m, 0);
console.log('TOPLAM MAAS:', toplamMaas);
