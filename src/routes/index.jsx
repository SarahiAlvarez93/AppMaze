import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { SearchBar } from '../components/SearchBar'
import { Detalle } from '../components/Detalle'

export const Paths = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SearchBar />} />
        <Route path='/movie/:id' element={<Detalle />} />
      </Routes>
    </BrowserRouter>
  )
}
