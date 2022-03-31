import { StrictMode } from 'react'
import { render } from 'react-dom'
import './styles/index.css'
import { Paths } from './routes'

render(
  <StrictMode>
    <Paths />
  </StrictMode>,
  document.getElementById('root')
)
