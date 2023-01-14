let greting = "hello world";

greting = "adrian";

greting = "chao";
console.log(greting);
console.log(typeof []);

let extintionDino: number = 76_000_000;
let dinoFavorite: string = "T-Rex";
let extint = true;

function chanchitoFeliz(config: any) {
  return config;
}

let animals: string[] = ["chanchito", "feliz", "felipe"];
let nums: number[] = [1, 2, 3, 4, 5];
let checks: boolean[] = [];
let nums2: Array<number> = [];

//nums.map(x => x.) //autocompletado de metodos

let tuplas: [number, string[]] = [1, ["cha", "felis"]];

const chica = "s";
const mediana = "m";
const grande = "l";
const extragrande = "xl";

enum Talla {
  Chica = "s",
  Mediana = "m",
  Grande = "l",
  Extragrande = "xl",
}
const tallaGrande = Talla.Grande;
console.log(tallaGrande);

const enum LoadingState {
  Idle,
  Loading,
  Success,
  Error,
}

const estado = LoadingState.Success;

//inferido
const objeto = { id: 1, name: "" };
objeto.name = "adrian";

//tipado explicito

const objeto1: {
  readonly id: number;
  name: string;
  talla: Talla;
} = { id: 1, name: "adrian", talla: Talla.Chica }; // or

const objeto2: {
  readonly id: number;
  name?: string;
  talla: Talla;
} = { id: 1, name: "", talla: Talla.Chica };

type Address = {
  numberExt: number;
  street: string;
  pais: string;
};

type Person = {
  readonly id: number;
  name?: string;
  talla: Talla;
  address: Address;
};

const objeto3: Person = {
  id: 1,
  name: "",
  talla: Talla.Chica,
  address: {
    numberExt: 1,
    street: "CHA",
    pais: "Mexico",
  },
};

const arr: Person[] = [];

const fn: (edad: number) => string = (edad: number) => {
  if (edad > 17) {
    return "no puedes ingresas";
  }
  return "no puedes pasar";
};

function validateEdad(edad: number, msg: string = "chanchito feliz"): string {
  if (edad > 17) return `puedes ingresar ${msg}`;
  return "no puedes pasar";
}

validateEdad(18, "chanchito mega feliz");

function ErrorUsario(): never {
  throw new Error("error de usuario");
}
