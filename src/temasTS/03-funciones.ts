function sumar(a: number, b: number): number {
    return a + b;
}
console.log(sumar(10,20));

const sumarFlecha = (a: number, b: number): number => a + b;
console.log(sumarFlecha(15,25));

function saludar(nombre: string, apellido?: string): string{
    if (apellido) {
        return `Hola.${nombre} ${apellido}`;
    } else{
        return `Hola, ${nombre}`;
    }
}

console.log(saludar('Arlet', 'Flores'));
console.log(saludar('Maria'));


interface Mascota {
    nombre: string;
    tipo?: string;
    edad: number;
    mostrarEdad:()=>void;
}


function calcular(mascotas:Mascota,x:number):void{
    mascotas.edad+=x;
    console.log(mascotas);
    console.log(mascotas.mostrarEdad());
}

const nuevaMascota: Mascota = {
    nombre:'LUNA',
    tipo: 'PERRA',
    edad: 2,
    mostrarEdad() {
        console.log(`LA EDAD DE ${this.nombre} ES ${this.edad} AñOS`);
    }

};
calcular(nuevaMascota,2)
