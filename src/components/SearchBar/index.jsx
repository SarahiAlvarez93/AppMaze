import { useState, useEffect } from 'react'
import { fetchResult } from '../../utils/fetchResult'
import { Card } from '../Card'
import './searchbar.scss'

export const SearchBar = () => {
  const [datos, setDatos] = useState({})
  const [error, setError] = useState('')
  const [busqueda, setBusqueda] = useState('transformer')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const data = async () => {
      try {
        const res = await fetchResult(busqueda)
        setDatos(res)
        setLoading(false)
      } catch (error) {
        setError(error)
      }
    }
    data()
  }, [busqueda])
  console.log(datos)

  const search = (e) => {
    e.preventDefault()
    console.log(e.target[0].value)
    setBusqueda(e.target[0].value)
  }
  console.log(busqueda)
  // console.log(datos[0].show.summary)
  return (
    <>
      <div className='BarraNav'>
        <nav>
          <h2>De<span>Película</span></h2>
        </nav>
        <div>
          <a href='/'>Inicio</a>
          <a href='/'>Series</a>
          <a href='/'>Películas</a>
          <form onSubmit={(e) => search(e)}>
            <input type='text' placeholder='Introduce tu serie o pelicula' />
          </form>
        </div>
      </div>
      {!loading &&
        datos.map((peli, index) => <Card nombre={peli.show.name} imagen={peli.show.image.medium} resumen={peli.show.summary} id={peli.show.id} key={index} />)}

    </>
  )
}
