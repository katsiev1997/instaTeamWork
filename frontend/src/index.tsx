import ReactDOM from 'react-dom/client'
import './app/styles/index.scss'
import App from './app/App'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from './app/providers'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ThemeProvider>
)
