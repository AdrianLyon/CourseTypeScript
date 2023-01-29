// function log<T, V>(a: T, b: V):V{
//     console.log(a + " " + b);

//     return b
// }

// log<string,number>('dato',42)
// log<string, string>('data', 'chanchito')
// log(1,2)
// log('holk','hola')

async function fetchData<T>(recurso: string): Promise<T> {
  const respuesta = await fetch(`${recurso}`);
  return respuesta.json();
}

type User = {
  id: string;
  name: string;
};

async function main() {
  const user = await fetchData<User>("/usuarios");
}

type Computador = {
  encender: () => void;
  apagar: () => void;
};

class Programador<T> {
  computador: T;
  constructor(t: T) {
    this.computador = t;
  }
}

const programador = new Programador<Computador>({
  encender: () => {},
  apagar: () => {},
});

type KeyValue<T, V> = {
  key: T;
  value: V;
};

interface Products {
  id: string;
}

function fetchProduct(): KeyValue<string, Products> {
  return {
    key: "id de product",
    value: { id: "id de producto" },
  };
}

function fetchStock(): KeyValue<string, number> {
  return {
    key: "id de product",
    value: 500,
  };
}

//restricciones
// interface Usuario{
//     id: string
//     name: string
// }

class Usuario {
  constructor(public id: string, public name: string) {}
}
function print<T extends Usuario>(t: T): T {
  console.log(t);
  return t;
}

print({ id: "id de producto", name: "felipe de producto" });

//genericos y herencia

class Estado<T> {
  protected data: T[] = [];

  agregar(t: T): void {
    this.data.push(t);
  }

  getEstado(): T[] {
    return this.data;
  }
}

type ObjectId = {
  id: string;
};
class EstadoEliminar<T extends ObjectId> extends Estado<T> {
  eliminar(id: string) {
    this.data = this.data.filter((e) => e.id !== id);
  }
}

class EstadoUsario extends Estado<Usuario> {
  reiniciarContrase() {}
}

const estadoUsuario = new EstadoUsario();

type Calendar = {
  id: number;
  fuente: string;
  dueno: string;
};

const calendar: Calendar = { id: 1, fuente: "Google", dueno: "yo" };

function getProp<T>(objecto: T, property: keyof T): unknown {
  return objecto[property];
}

getProp<Calendar>(calendar, "id");
getProp<Calendar>(calendar, "fuente");
//getProp<Calendar>(calendar, 'propiedad que no extist')

//utility types
type Punto = {
  x: number;
  y: number;
  desc?: string;
};

type PuntoOpcional = Partial<Punto>;
type PuntoRequerido = Required<Punto>;

const keyVal: Record<string, number> = {
  "soy un string": 42,
};

type kv = { [key: string]: number };

const p: Omit<Punto, "desc" | "y"> = {
  x: 1,
};
const p1: Pick<Punto, "x" | "y"> = {
  x: 1,
  y: 2,
};

const readOnlyP: Readonly<Punto> = {
  x: 1,
  y: 2,
  desc: "desc",
};
