import ReactDOM from 'react-dom/client'
import './app/styles/index.scss'
import App from './app/App'
import { BrowserRouter } from 'react-router-dom'

import { StoreProvider, ThemeProvider } from './app/providers'
import './shared/config/i18n'


ReactDOM.createRoot(document.getElementById('root')).render(
  <StoreProvider>
    <ThemeProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </StoreProvider>
)
