"use strict";
class DatosBasicos {
    constructor(name, desc, created_at, created_by) {
        this.name = name;
        this.desc = desc;
        this.created_at = created_at;
        this.created_by = created_by;
    }
    get fullYear() {
        return this.created_at.getFullYear();
    }
    get fullDesc() {
        return this.name + ' ' + this.desc;
    }
}
class Product extends DatosBasicos {
    constructor(stock, sku, name, desc, created_at, created_by) {
        super(name, desc, created_at, created_by);
        this.stock = stock;
        this.sku = sku;
    }
    get fullDesc() {
        return 'Product: ' + super.fullDesc;
    }
    guardar() {
        console.log('override guardar');
    }
}
class Categoria extends DatosBasicos {
    constructor(name, desc, created_at, created_by) {
        super(name, desc, created_at, created_by);
        this.producto = [];
    }
    agregarProductos(producto) {
        this.producto.push(producto);
    }
    get fullDesc() {
        return 'Product: ' + super.fullDesc;
    }
    guardar() {
        console.log('overg');
    }
}
let product = new Product(100, 1, 'phone', 'este es description', new Date(), 1);
let categoria = new Categoria('Celulares', '', new Date(), 1);
categoria.agregarProductos(product);
console.log(product, categoria);
//# sourceMappingURL=herencia.js.map