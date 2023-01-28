interface Animal {
  name: string;
  caminar(): void;
  onomatopeya(): string;
}

class Perro implements Animal {
    name: string = "perro";
    caminar(): void {
        console.log('Perro caminando')
    }
    onomatopeya(): string {
        return 'guau'
    }
}

class DiccionarioUsuarios {
    [id: string]:string
}

let diccioanrioUsuario = new DiccionarioUsuarios();
diccioanrioUsuario['1a'] = 'usuario 1'
