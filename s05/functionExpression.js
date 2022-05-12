//! *******FUNCTION EXPRESSION*****

// EXAMPLE-1

// TEK ÇİFT BULAN FONKS.

const evenOdd = function (number) {
    
    return number % 2 === 0 ? `${number} is even`: `${number} is odd`;
}

console.log(evenOdd(9));

// EXAMPLE-2

// 3 SAYININ EN BÜYÜĞÜNÜ BULAN FONKS.

const buyukBul = function(x,y,z){
    let enBuyuk;
    if(x >= y && x >= z){
        enBuyuk = x;
    } else if(y>=x && y>=z) {
        enBuyuk = y;
    } else if(z>=x && z>=y) {
        enBuyuk = z;
    } else {
        enBuyuk = x;
    }
    return enBuyuk;
};

console.log(`En büyük sayı: `, buyukBul(1,5,8))
console.log(`En büyük sayı: `, buyukBul(9,5,8))
console.log(`En büyük sayı: `, buyukBul(7,5,1))
console.log(`En büyük sayı: `, buyukBul(7,5,7))
console.log(`En büyük sayı: `, buyukBul(7,9,9))


//* ORNEK3: Bir fonksiyon içerisinde başka fonksiyonlar çağrılabilir
//*****************************************************/

const hesapla = function (islem, s1, s2) {
    let sonuc;
  
    if (islem == '+') {
      sonuc = topla(s1, s2);
    } else if (islem == '-') {
      sonuc = cikar(s1, s2);
    } else if (islem == '*') {
      sonuc = carp(s1, s2);
    } else if (islem == '/') {
      sonuc = bol(s1, s2);
    }
    return sonuc;
  };
  
  const topla = function (s1, s2) {
    return s1 + s2;
  };
  const cikar = function (s1, s2) {
    return s1 - s2;
  };
  const carp = function (s1, s2) {
    return s1 * s2;
  };
  const bol = function (s1, s2) {
    return s1 / s2;
  };
  
  console.log(hesapla('+', 3, 5));
  console.log(hesapla('-', 3, 5));