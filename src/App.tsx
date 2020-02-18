import React from 'react';
import { ThemeProvider } from 'styled-components'
import theme from './theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
         This is a todo list using typescript
      </div>
    </ ThemeProvider>
  )
}

export default App
