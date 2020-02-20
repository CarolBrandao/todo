import React from 'react';
import { ThemeProvider } from 'styled-components'
import theme from './theme'
import Footer from './components/footer'
import AddTodo from './components/add-todo'
import List from './components/list'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AddTodo />
      <List />
      <Footer />
    </ ThemeProvider>
  )
}

export default App