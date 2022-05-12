//! ***********ARROW FUNCTION ***********

// //!  1.YÖNTEM:
// function topla(a, b) {
//     return a + b;
//   }
  
//   //!  2.YÖNTEM:
//   const topla = function (a, b) {
//     return a + b;
//   };
  
//   //!  3.YÖNTEM:
//   const topla = (a, b) => a + b;


  //*ÖRNEK

  const usAl = (t,u) => t**u;
  console.log(`Sonuc = `, usAl(4,3));

  // Bu yöntemde tek bir ifade varsa süslü parantez kullanmaya gerek yok, eğer birden fazla ifade varsa süslü kullanmamız gerekir bu durumda da return de kullanmak gerekir.

  //*örnek-2

//   const menu = () => {
//       console.log(`=============================`);
//       console.log(`javaScript çok kolaymış`);
//       console.log(`=============================`);

//     }

//     menu()

      // Bu yöntemde tek bir ifade varsa süslü parantez kullanmaya gerek yok, eğer birden fazla ifade varsa süslü kullanmamız gerekir bu durumda da return de kullanmak gerekir.

    const menu = (times) => {
        console.log(`=============================`);
        console.log(`javaScript çok kolaymış`);
        console.log(`=============================`);
        return times * 3;
      }
  
      console.log(menu(2));

      //*örnek-3

      const tekMi = (n) => n % 2 ? `Tektir.`: `Çifttir.` ;

      console.log(tekMi(7));


      //* örnek-4

      const r = prompt(`yarıçap giriniz:`)
      const h = prompt(`yükseklik girin:`)
      
      const hacim = (r,h) => Math.PI * r * r * h;

      console.log(`Hacim = `, hacim(r,h));
      console.log(`Hacim = `, Math.trunc(hacim(r,h))); //küsüratı almadık
      console.log(`Hacim = `, hacim(r,h).toFixed(2)); // virgülden sonra 2 basamak aldık
      