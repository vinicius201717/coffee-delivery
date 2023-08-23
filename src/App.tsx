import { useState } from 'react'

import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'

import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import DataContext, { InterfaceState } from './contexts/AddressContext'

const initialValues: InterfaceState = {
  car: undefined,
  address: {
    cep: '',
    rua: '',
    numero: '',
    complemento: '',
    bairro: '',
    cidade: '',
    uf: '',
    pagamento: '',
  },
}

function App() {
  const [state, setState] = useState(initialValues)

  return (
    <ThemeProvider theme={defaultTheme}>
      <DataContext.Provider value={{ state, setState }}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </DataContext.Provider>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
