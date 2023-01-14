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

let puntaje: number | string = 98;

puntaje = "hola mundo";

type Animal = {
  id: number;
  estado: string;
};

type User = {
  id: number;
  name: string;
};

let animal: User | Animal = { id: 1, estado: "", name: "" };

function sumaDos(n: number | string): number {
  if (typeof n === "number") {
    return n + 2;
  }
  return parseInt(n) + 2;
}

sumaDos("2");
//union type
type Audit = {
  created_at: string;
  modified_at: string;
};

type Product = {
  name: string;
};

const product: Audit & Product = {
  created_at: "",
  modified_at: "",
  name: "",
};

//type literales
type Fibo = 0 | 1 | 2 | 3 | 5;
const nFeFibo: Fibo = 3;

//nulleable type

function toNumber(s: string | null | undefined) {
  if (!s) return 0;
  return parseInt(s);
}

//const n = toNumber(null)
const n = toNumber(undefined);

//optional chaining

function getUser(id: number) {
  if (id < 0) {
    null;
  }

  return {
    id: 1,
    name: "felipe",
    created_at: new Date(),
  };
}

const user = getUser(-1);

console.log("user", user?.created_at);

//nullish coalescing operator

const difficulty: number | null = 0;

const user2 = {
  username: "felipe",
  difficulty: difficulty ?? 1,
};

console.log(user2);

//type assertion

const elemet: any = null;

const elem1 = elemet as number;

//mejor caso
const input = document.getElementById("username") as HTMLInputElement;
input.value;

const input1 = <HTMLInputElement>document.getElementById("username");
input1.value;

//narrowing type

function lala(x: string | number) {
  if (typeof x === "number") {
    x;
  }

  if (typeof x === "string") {
    x;
  }
}

//unknown type

function procesa(algo: unknown) {
  if (typeof algo === "string") {
    return algo.toLocaleLowerCase();
  }

  if (typeof algo === "number") {
    return algo.toString;
  }
}
