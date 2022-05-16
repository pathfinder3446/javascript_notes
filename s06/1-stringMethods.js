// ?======================================================
// ?                     STRING METOTLARI
// ! KAYNAK: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
// ?======================================================

console.log('******* STRING METHODS ********');

const str1 = `Clarusway`;
const str2 = ` Hello`;
const str3 = ` World`;

console.log(typeof str1);
const str4 = str1 + str2;
console.log(str4);

console.log(str4.concat(str3));

const str5 = new String(`Non-primitive string`);
console.log(str5, typeof str5);

//* Normalde primitive veri tiplerinin property veya metodu olmaz.
//* Ancak,Javascript otomatik olarak primitive String'ler için object wrapper oluşturur.
//* Bu sayede, String nesnelerine ait olan fonksiyonlar veya özellikleri
//* primitive string ile kullanılabilir hale gelir.
//* Sonrasında oluşan bu object bellekten otomatik olarak kaldırılır.

//* ----------------------------------------------------------
//*  concat() - immutable

const s1 = "hello";
const s2 = " world";
const s3 = s1.concat(s2);
console.log(s3);

console.log(s3.concat(` Clarusway`, str2, " Merhaba"))

//* ----------------------------------------------------------
//* charAt()

console.log(s3.charAt()); //! değer yazılmazsa default 0. indexi aldı

console.log(s3.charAt(4));

console.log(s3.charAt(s3.length - 1)); //! stringin son elemanını döndürür.

//* ----------------------------------------------------------
//* includes()

const word = `To be or not to be, that is the question`

console.log(word.includes(`to be`)); //! true
console.log(word.includes(`That`)); //! false (case sensitive olduğu için 
console.log(word.includes(``));
console.log(word.includes(`to be`, 13)); //! true
//! CASE-SENSİTİVE'DİR.
//* ----------------------------------------------------------
//* indexOf() , lastIndexOf()

const tobeIndex = word.indexOf(`or`);
console.log(tobeIndex);

console.log(word.indexOf(`be`));
console.log(word.lastIndexOf(`be`));
console.log(word.lastIndexOf(`BE`)); //! -1 döndürür. yok manasındadır.

//! CASE-SENSİTİVE'DİR.

//* ----------------------------------------------------------
//* startsWidth() , endsWith()

const word2 = `Salına salına sinsice :)`;
console.log(word2.startsWith(`sa`)); //! false döndürür. stringin ilk elemanlarına bakıyor o yüzden false
//! CASE-SENSİTİVE'DİR.

console.log(word2.startsWith(`sa`, 7)); //! true 7. indexten itibaren bak.start noktası 7. index o yüzden true

console.log(word2.endsWith(`)`));

//* ----------------------------------------------------------
//*  replace(searchFor, replaceWith)

const oku = `Oku baban gibi saf olma`;
console.log(oku.replace(`saf olma`, `akıllı ol`));

//* ----------------------------------------------------------
//*  slice(beginIndex[, endIndex])
//*  substring(beginIndex[, endIndex])
//*  substr (depreceated)
//* ---------------------------------------------------
const veysel = `Uzun ince bir yoldayım yürüyorum gündüz gece..`;

const sliced = veysel.slice(33, 39); //! output = gündüz >> başlangıç bitiş indexi verdik o aradaki elementleri sliceladı. tek değer verseydik başlangıç noktası kabul edip en sona kadar giderdi
console.log(sliced); //

console.log(veysel.slice(-10)) //! slice metodunda - index de çalışır.

console.log(veysel.substring(17, 30)); //! output dayım yürüyor.. - index çalışmaz




//* ----------------------------------------------------------
//* split([sep [, limit] ])
//* ---------------------------------------------------

const tarkan = `Gel gündüzle gece olalım`;
const splited = tarkan.split(` `); //! string elemanlarının arasına boşuk ` ` koyarak array'e çevirdi.
console.log(splited); //! ['Gel', 'gündüzle', 'gece', 'olalım']

const gece = splited[2];
console.log(gece);

const char = tarkan.split(``); //! null karakterine göre harfleri ayırarak bir char dizisi oluşturdu.
console.log(char); //! (24) ['G', 'e', 'l', ' ', 'g', 'ü', 'n', 'd', 'ü', 'z', 'l', 'e', ' ', 'g', 'e', 'c', 'e', ' ', 'o', 'l', 'a', 'l', 'ı', 'm']

//* ----------------------------------------------------------
//* trim();
//* ----------------------------------------------------------