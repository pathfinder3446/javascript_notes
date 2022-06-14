//*=================================================================
//*              1- Senkron-Asenkron Programlama
//* ================================================================

//! Javascript, bir single-threaded ve Asenkron Programlama dilidir.

//? Asenkron Programlama
//? ---------------------------------------------------------------
//? Asenkron Programlama, bir alt gorevin uygulamanin asil thread'inden
//? bagimsiz olarak arka planda calistirilmasina izin veren paralel programlama
//? teknigidir. Bu alt gorev tamamlandiginda (basriyla veya basarisizlikla)
//? asil thread bu konuda bilgilendirilir. Asenkron programlama, uygulamalarin
//? performansininin artirilmasina ve daha iyi kullanici deneyimine katki saglamaktadir.

//? Ozellikle bir API'den veya Veritabanindan veri cekme, Giris/Cikis islemleri,
//? Dosya Okuma/Yazma islemleri gibi zaman tuketen kodlarda Asyn Programlama
//? kullanilmasi cok onemlidir.

//* Senkron
//* ---------------------------------------------------------------
// const bekle = (ms) => {
//     const start = new Date().getTime();
//     2000;
//     while (new Date().getTime() < start + ms){}
// };



// console.log('HELLO');
// // alert(`ITF`) //! blocking code
// bekle(3000);
// console.log('FS11');


//* Asenkron (setTimeout)
//*-----------------------------------------

// setTimeout(() => {
//     console.log(`hello`);
// }, 1000);

// console.log(`world`);

// setTimeout(() => {
//     console.log(`what's up bro?`);
// }, 500);


//* Asenkron (setInterval, clearInterval)
//*-----------------------------------------

let counter = 0;
const sec1 = setInterval(() => {
    ++counter;
    if(counter > 9){
        clearInterval(sec1);
    }
    console.log(counter);
}, 1000);
