
import { calcularIVADos,type Producto } from "./05-desestructuracion-funciones";

const carrito:Producto[] = [
    {
        nombre: 'Iphone 1',
        precio: 15000
    },

    {
        nombre: 'ALCATEL ONE TOUCH',
        precio: 800
    },
    
    {
        nombre: 'Iphone 18',
        precio: 10000
    },

    {
        nombre: 'apple watch',
        precio: 3500
    },
]

const [total, iva] = calcularIVADos(carrito);
console.log(`El total es: ${total}`);
console.log(`El IVA es: ${iva}`);

