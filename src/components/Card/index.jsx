import { Link } from 'react-router-dom'
export const Card = ({ nombre, imagen, resumen, id }) => {
  return (
    <Link to={`/movie/${id}`}>
      <div className='card'>
        <p>Nombre: {nombre} </p>
        {imagen ? <img src={imagen.medium} alt='' /> : <img src='https://static.tvmaze.com/uploads/images/medium_portrait/137/344032.jpg' alt='' />}
        <p>{resumen}</p>
        <p>ID: {id}</p>
      </div>
    </Link>
  )
}
