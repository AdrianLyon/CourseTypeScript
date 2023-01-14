let greting = "hello world";

greting = "adrian";

greting = "chao";
console.log(greting);
console.log(typeof []);

let extintionDino: number = 76_000_000;
let dinoFavorite: string = "T-Rex";
let extint = true;

function chanchitoFeliz(config:any) {
    return config
}

let animals:string[] = ['chanchito', 'feliz','felipe']
let nums: number[] = [1,2,3,4,5]
let checks: boolean[] = []
let nums2: Array<number> =[]

//nums.map(x => x.) //autocompletado de metodos

let tuplas:[number, string[]] = [1,['cha','felis']]

const chica = 's'
const mediana = 'm'
const grande = 'l'
const extragrande = 'xl'

enum Talla {Chica= 's', Mediana = 'm', Grande = 'l', Extragrande='xl'}
const tallaGrande = Talla.Grande
console.log(tallaGrande)

const enum LoadingState {Idle, Loading, Success, Error}

const estado = LoadingState.Success