interface Producto{
    nombre: string;
    precio: number;
}
const telefono:Producto={
    nombre: 'ALCATEL ONE TOUCH',
    precio: 1500,
};

const tablet:Producto={
    nombre: 'Tablet de la mac',
    precio: 4000
};

function calcularIVA(productos:Producto[]):number{
    let total=0;
    for(let producto of productos){
        total+=producto.precio;
    }
    return total*0.21
}

const articulos=[telefono,tablet];
const iva=calcularIVA(articulos);
console.log(`EL IVA ES: ${iva}`);

//para que sirve desestructura?
//para permitir que pueda obtener mas de un resultado

//desestructuracion de una funcion
function calcularIVADos(productos:Producto[]):[number,number]{
    let total=0;
    for(let producto of productos){
        total+=producto.precio;
    }
    return [total, total*0.21];

}
 const [total, ivaDos]=calcularIVADos(articulos);
 console.log(`El total es: ${total}`);
 console.log(`El IVA es: ${ivaDos}`);