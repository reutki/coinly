import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import store from './app/store'
import { QueryClientProvider } from 'react-query';
import { queryClient } from './app/queryClient'
import { NextUIProvider } from '@nextui-org/react';


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Provider store={store}>
      <NextUIProvider>
        <App />
      </NextUIProvider>
    </Provider>
  </BrowserRouter>
)
