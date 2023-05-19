import './ItemDetail.css';

const ItemDetail = ({ id, nombre, precio, img }) => {
  return (
    <div className='contenedorItem'>
      <h2> Nombre: {nombre} </h2>
      <h3> Precio: {precio}</h3>
      <h3> ID: {id} </h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam sed error architecto facilis sapiente inventore ducimus qui voluptatem iure necessitatibus modi deserunt aut, dignissimos culpa sint quaerat animi molestias recusandae.</p>
      <img src={img} alt={nombre} />
    </div>
  )
}

export default ItemDetail