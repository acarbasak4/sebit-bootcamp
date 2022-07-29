let email = "acarbasak4@gmail.com";
console.log(email);

//Birleştirme
let ad = "Başak";
let soyad = "Acar";
let adSoyad = ad + " " + soyad;

console.log(adSoyad);
console.log(adSoyad[3]);

//Kaç Karakter
console.log(adSoyad.length);

//String Metodlar
console.log(adSoyad.toUpperCase());
let kucukAdSoyad = adSoyad.toLowerCase();
console.log(kucukAdSoyad);

//İndex
let index = adSoyad.indexOf("a");
let indexLast = adSoyad.lastIndexOf("a");
console.log(index);
console.log(indexLast);

//Slice
let ilkIsim = adSoyad.slice(0, 5);
console.log(ilkIsim);

//Replace
let yerDegistir = adSoyad.replace(" ", "");
console.log(yerDegistir);

//ReplaceAll
let yerDegistirAll = adSoyad.replaceAll(" ", "");
console.log(yerDegistirAll);
