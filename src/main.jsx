import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'
import { UserLoggedContex } from "../src/context/Session/user-logged";
import { UserLoggedState } from '../src/context/Session/user-logged'

ReactDOM.createRoot(document.body.querySelector('#root')).render(
  <React.StrictMode>

      <App /> 
    
  </React.StrictMode>,
)
