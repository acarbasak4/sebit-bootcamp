function hello() {
  console.log("hello");
}

// hello();
// hello();
// hello();

//Fonksiyonlara parametre gönderme

const bskacr = function (ad = "Başak", soyad = "Acar") {
  console.log(`Ad Soyad ${ad} ${soyad}`);
};

bskacr("Ali", "Acar");
bskacr();

const kareAlani = function (kenar) {
  return kenar * kenar;
};

let sonuc = kareAlani(6);
console.log(sonuc);

//Arrow İlk Versiyon
// const kareAlanim = (kenar) => {
//   return kenar**2;
// }

//Tek Parametreyse
// const kareAlanim = kenar => {
//   return kenar**2;
// }

const kareAlanim = (kenar) => kenar ** 2;
console.log(kareAlanim(7));

// const donus = () => {
//   return "Naber"
// }

const stringDonus = () => "Naber";
console.log(stringDonus());

//Uygulama
//Ürünlerin ham fiyatını verip vergili halinin toplamını bulan bir hesaplama yapın

//Function
const urunSatis = function (urunler, vergi) {
  let toplam = 0;
  for (let i = 0; i < urunler.length; i++) {
    toplam += urunler[i] + urunler[i] * vergi;
  }
  return toplam;
};
console.log(urunSatis([10, 20, 30], 0.25));

//Arrow ile
const urunSatisArrow = (urunler, vergi) => {
  let toplam = 0;
  for (let i = 0; i < urunler.length; i++) {
    toplam += urunler[i] + urunler[i] * vergi;
  }
  return toplam;
};
console.log(urunSatisArrow([10, 20, 30], 0.25));
