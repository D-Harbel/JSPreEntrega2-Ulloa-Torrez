const iva = 1.19
const carro = []

const productos = [{id: 1, nombre: 'masa madre', precio: 400, gluten: 'poco'},
{ id: 2, nombre: 'Pan molde', precio: 500, gluten: 'poco'},
{ id: 3, nombre: 'pan artesanal', precio: 250, gluten: 'alto'},
{ id: 4, nombre: 'pan baguette', precio: 300, gluten: 'medio'},
{ id: 5, nombre: 'pan ciabatta', precio: 230, gluten: 'alto'},
{ id: 6, nombre: 'Pan De Chocolate', precio: 210, gluten: 'alto'},
{ id: 7, nombre: 'Pan gallego', precio: 320, gluten: 'medio'}]


function buscarproducto(codigo) {
    let resultado = productos.find((productos) => productos.id === parseInt(codigo))
    return resultado
}

function busquedaSaludable() {
    let gluten = prompt('ingresa el nivel de gluten a buscar: alto - medio - poco')

    let resultado = productos.filter((producto)=> producto.gluten.toUpperCase().includes(gluten.toUpperCase()))
        if (resultado.length === 0) {
            console.warn('No se encontraron productos con dicho nombre:', gluten)
        } else {
            console.table(resultado)
        }
}

function comprar() {
    let codigo = prompt('ingresar codigo del producto:')
    let productoseleccionado = buscarproducto(codigo)
    console.table(productoseleccionado)
    console.log(productoseleccionado)
    if (productoseleccionado !== undefined) {
        carro.push(productoseleccionado)
        alert(productoseleccionado.nombre + ' agregado al carrito.')
        let respuesta = confirm('¿Desea continuar sus compras?')
        if (respuesta === true) {
            comprar()
        } else {
            console.clear()
            console.table(carro)
            FinCompra()
        }
    } else {
        alert('Error en el codigo seleccionado, Refresca para intentar nuevamente')
    }
}

function FinCompra() {
    const shopping = new compra(carro)
    console.log(`Costo total de su compra es de $ ${shopping.obtenerSubtotal()}. Muchas gracias por su compra`)
}

function quitarDelCarro() {
    carro.pop(compra)
    alert('se quitado un producto del carrito')
    console.table(carro)
    const shopping = new compra(carro)
    console.log(`Costo total de su compra es de $ ${shopping.obtenerSubtotal()}. Muchas gracias por su compra`)
}