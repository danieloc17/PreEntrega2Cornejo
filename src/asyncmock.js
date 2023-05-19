const productos = [
    { nombre: "Aceite", precio: 700, id: "1", img: "../img/aceite.jpg", idCat: "2" },
    { nombre: "Fideos", precio: 200, id: "2", img: "../img/fideos.jpg", idCat: "2" },
    { nombre: "Manteca", precio: 400, id: "3", img: "../img/manteca.jpg", idCat: "3" },
    { nombre: "Yogur", precio: 900, id: "4", img: "../img/yogur.jpg", idCat: "3" }
]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos);
        }, 2000)
    })
}

export const getProductoPorId = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const producto = productos.find(prod => prod.id === id);
            resolve(producto);
        }, 2000)
    })
}

export const getProductosPorCategoria = (idCategoria) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const producto = productos.filter(prod => prod.idCat === idCategoria);
            resolve(producto);
        }, 2000)
    })
}