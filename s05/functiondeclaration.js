//! ********FUNCTION DECLARATION*******

function yazdir() {
    console.log(`Merhaba`)
} //!declaration kısmı

yazdir(); //! invoke ya da calling kısmı fonk. çağırma
yazdir();

console.log(typeof yazdir);


//! ***parametreli fonksiyon***

function selamla(name, lastname =`Noname`) {
    console.log(`Merhaba ${name} ${lastname}`)
}

selamla(`Arif`, `Kılınç`)
selamla(`Derya`)
//ikinci parametre çağırma sırasında girilmezse ona default olarak Noname atamış olduk.


//! ****Parametreli ve dönüş değerli fonksiyon****

// example-1

function yasHesapla(year,name) {
//   const mesaj = `${name}'in yaşı ${2022-year}'dir.` ;
const mesaj = `${name}'in yaşı ${new Date().getFullYear()-year}'dir.` ;
return mesaj
}

const mesaj1 = yasHesapla(2001,`Elif`)
console.log(mesaj)

console.log(yasHesapla(2001,`Elif`))

// example-2

function evenOdd(number) {
    
    return number % 2 === 0 ? `${number} is even`: `${number} is odd`;
}

console.log(evenOdd(9));