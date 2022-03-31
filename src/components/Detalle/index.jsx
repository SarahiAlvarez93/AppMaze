import { useState, useEffect } from 'react'
import { fetchEpisodes } from '../../utils/fetchEpisodes'
import { Link, useParams } from 'react-router-dom'
import './detalle.scss'

export const Detalle = () => {
  const { id, nombre } = useParams()
  const [episodios, setEpisodios] = useState([])

  useEffect(() => {
    const getData = async () => {
      const response = await fetchEpisodes(id)
      setEpisodios(response)
    }
    getData()
  }, [id])
  console.log(episodios)

  return (
    <table>
      <tr>
        <th>Temporada</th>
        <th>Episodio</th>
        <th>Titulo</th>
        <th>Descripcion</th>
      </tr>
      {episodios.map((epi, index) =>

        <tr key={index}>
          <td>{epi.season}</td>
          <td>{epi.number}</td>
          <td>{epi.name}</td>
          <td>{epi.summary}</td>
        </tr>
      )}

    </table>

  )
}
