import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'core-js'

import App from './App'
import {store} from '../src/redux/store'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
)
