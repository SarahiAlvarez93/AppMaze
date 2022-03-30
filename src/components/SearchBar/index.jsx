import { useState, useEffect } from 'react'
import { fetchResult } from '../../utils/fetchResult'
import './searchbar.scss'

export const SearchBar = () => {
  const [datos, setDatos] = useState({})
  const [error, setError] = useState('')
  const [busqueda, setBusqueda] = useState('boys')

  useEffect(() => {
    const data = async () => {
      try {
        const res = await fetchResult(busqueda)
        setDatos(res)
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
  return (
    <>
      <form onSubmit={(e) => search(e)}>
        <input type='text' />

      </form>
      <div className='card'>
        <p>El nombre de la peli es: {datos[0].show.name} </p>
      </div>
    </>
  )
}
