class compra {
    constructor(carroDeCompra) {
        this.carro = carroDeCompra
    }
    obtenerSubtotal() {
        if (this.carro.length > 0) {
            return this.carro.reduce((acumulador, productos)=> acumulador + (productos.precio * iva), 0 )
            this
        }
    }
}