let isimler = ["basak", "ali", "olcay", "ayten"];
console.log(isimler);
console.log(isimler[1]);

isimler[1] = "selam";
console.log(isimler);

let yaslar = [12, 34, 67];
console.log(yaslar[2]);

let rastgele = ["basak", "acar", 27];
console.log(rastgele.length);

let tireli = isimler.join("-");
console.log(tireli);

let virgullu = isimler.join(",");
console.log(virgullu);

let sira = isimler.indexOf("basak");
console.log(sira);

//Concat methodu birleştirme islemi
let eklenmis = isimler.concat(["elif", "eda"]);
console.log(eklenmis);
console.log(isimler);

isimler.push("Leyla");
console.log(isimler);
isimler.pop();
console.log(isimler);
