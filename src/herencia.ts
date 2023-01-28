abstract class DatosBasicos{
    constructor(
        public name:string,
        public desc: string,
        protected created_at: Date,
        protected created_by: number,
    ){}

    get fullYear(){
        return this.created_at.getFullYear()
    }

    get fullDesc(){
        return this.name + ' ' + this.desc
    }

    abstract guardar():void;
}

class Product extends DatosBasicos{
    constructor(
        public stock:number,
        public sku: number,
        name: string,
        desc:string,
        created_at: Date,
        created_by: number
    ){
        super(name, desc, created_at, created_by)
    }

    override get fullDesc(){
        return 'Product: ' + super.fullDesc
    }

    guardar(): void {
        console.log('override guardar')
    }
}

class Categoria extends DatosBasicos{
    public producto: Product[]=[]
    constructor(
        name: string,
        desc:string,
        created_at: Date,
        created_by: number
    ){
        super(name, desc, created_at, created_by)
    }

    agregarProductos(producto: Product){
        this.producto.push(producto)
    }

    override get fullDesc(){
        return 'Product: ' + super.fullDesc
    }

    guardar(): void {
        console.log('overg')
    }
}

let product = new Product(
    100,
    1,
    'phone',
    'este es description',
    new Date(),
    1
)


let categoria = new Categoria(
    'Celulares',
    '',
    new Date(),
    1
)
categoria.agregarProductos(product)
console.log(product, categoria)