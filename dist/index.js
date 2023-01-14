"use strict";
let greting = "hello world";
greting = "adrian";
greting = "chao";
console.log(greting);
console.log(typeof []);
let extintionDino = 76000000;
let dinoFavorite = "T-Rex";
let extint = true;
function chanchitoFeliz(config) {
    return config;
}
let animals = ["chanchito", "feliz", "felipe"];
let nums = [1, 2, 3, 4, 5];
let checks = [];
let nums2 = [];
let tuplas = [1, ["cha", "felis"]];
const chica = "s";
const mediana = "m";
const grande = "l";
const extragrande = "xl";
var Talla;
(function (Talla) {
    Talla["Chica"] = "s";
    Talla["Mediana"] = "m";
    Talla["Grande"] = "l";
    Talla["Extragrande"] = "xl";
})(Talla || (Talla = {}));
const tallaGrande = Talla.Grande;
console.log(tallaGrande);
const estado = 2;
const objeto = { id: 1, name: "" };
objeto.name = "adrian";
const objeto1 = { id: 1, name: "adrian", talla: Talla.Chica };
const objeto2 = { id: 1, name: "", talla: Talla.Chica };
const objeto3 = {
    id: 1,
    name: "",
    talla: Talla.Chica,
    address: {
        numberExt: 1,
        street: "CHA",
        pais: "Mexico",
    },
};
const arr = [];
const fn = (edad) => {
    if (edad > 17) {
        return "no puedes ingresas";
    }
    return "no puedes pasar";
};
function validateEdad(edad) {
    if (edad > 17)
        return "puedes ingresar";
    return "no puedes pasar";
}
validateEdad(18, 22);
//# sourceMappingURL=index.js.map