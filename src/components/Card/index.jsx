
export const Card = ({ nombre, imagen, resumen, id }) => {
  if (imagen == null) {
    imagen = 'https://static.tvmaze.com/uploads/images/medium_portrait/137/344032.jpg'
  }
  return (
    <div className='card'>
      <p>Nombre: {nombre} </p>
      <img src={imagen} alt='' />
      <p>{resumen}</p>
      <p>ID: {id}</p>
    </div>
  )
}
