"use strict";
class Personaje {
    constructor(id, name, nivel, _hp) {
        this.id = id;
        this.name = name;
        this.nivel = nivel;
        this._hp = _hp;
    }
    subirNivel() {
        this.nivel = this.nivel + 1;
        return this.nivel;
    }
    cambiarHp(cantidad) {
        this._hp = this._hp + cantidad;
        return this._hp;
    }
    get hp() {
        return this._hp;
    }
    static agregarPersonaje() {
        Personaje.equipo++;
    }
    static getEquipo() {
        return Personaje.equipo;
    }
}
Personaje.equipo = 0;
const personaje = new Personaje(1, "adrian", 1, 100);
personaje.cambiarHp(-10);
const personaje1 = new Personaje(2, "bob", 1, 120);
Personaje.agregarPersonaje();
console.log(personaje, personaje1);
//# sourceMappingURL=index.js.map