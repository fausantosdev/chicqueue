import { BrowserRouter } from 'react-router-dom'

import AppProvider from './contexts'
import RouteApp from './routes'

function App() {

  return (
    <BrowserRouter>
      <AppProvider>
        <RouteApp/>
      </AppProvider>
    </BrowserRouter>
  )
}

export default App
