import { useState, useEffect } from 'react'
import { fetchEpisodes } from '../../utils/fetchEpisodes'
import { useParams } from 'react-router-dom'
import './detalle.scss'

import { fetchInfo } from '../../utils/fetchInfo'

export const Detalle = () => {
  const { id } = useParams()
  const [episodios, setEpisodios] = useState([])
  const [info, setInfo] = useState('')

  useEffect(() => {
    const getData = async () => {
      const response = await fetchEpisodes(id)
      const datos = await fetchInfo(id)
      setEpisodios(response)
      setInfo(datos)
    }
    getData()
  }, [id])
  console.log(episodios)
  console.log(info)
  console.log(info.name)
  /* console.log(info.image.medium) */

  return (
    <>
      <h4>{info.name}</h4>
      {/* <img src={info.image.medium} alt='' /> */}
      <p>{info.summary}</p>
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
    </>
  )
}
