import { StrictMode } from 'react'
import { render } from 'react-dom'
import './styles/index.css'
import App from './components/App/App'
import { SearchBar } from './components/SearchBar'

render(
  <StrictMode>
    <SearchBar />
    <App />
  </StrictMode>,
  document.getElementById('root')
)
