// console.log("Selam");

// var             //artık kullanılmıyor
// let             //değişebilir
// const           //değiştirilemez

let gun = 09;
let ay = 03;
let yil = 1995;

console.log(gun, ay, yil);
console.log("Başak " + gun + "/" + ay + "/" + yil + " tarihinde doğmuştur.");

const ikinciElAraba = 200000;
// ikinciElAraba = 130000;  //yapılamaz
console.log(ikinciElAraba);

//var
var a = 5;
// var a = 3;
console.log(a);

var c = 5;
console.log("C değeri dışarıda", c);

{
  var c = 66;
  console.log("C değeri içerde", c);
}

console.log("C değeri dışarıda", c);

// let
let d = 9;
console.log("D değeri dışarıda", d);

{
  let d = 11;
  console.log("D değeri içerde", d);
}

console.log("D değeri dışarıda", d);
