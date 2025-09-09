interface Alumno{
    nombre:string;
    edad:number;
    curso:string;
    email?:string //propiedad opcional
    
    nota: number |string;//puedes ser nopmbre o string
}

const alumno:Alumno={
    edad: 23,
    nombre: "ASTRID",
    curso:"TypeScript",
    email: "astrid@gmail.com",
    nota: 9.5
}
//interfaces,arreglos,
console.log(`La alumna ${alumno.nombre}
    tiene ${alumno.edad} años y su nota es ${alumno.nota}`);

let mascotas:string[]=['Perro','Gato','Hamster'];
mascotas[1]='Pajaro';
mascotas.push('Tortuga');
console.log(mascotas);

let notas:(number|string)[]=[7,8,9, 'Aprobado'];
notas.push(10);
notas.push('Sobresaliente');
console.log(notas);
