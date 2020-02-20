import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './app'
import rootReducer from './reducers'

declare global {
  interface Window { __REDUX_DEVTOOLS_EXTENSION__: any }
}

export type AppState = ReturnType<typeof rootReducer>

const store = createStore(rootReducer, undefined, window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)