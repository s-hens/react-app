import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app.jsx'
import Greeting from './greeting.jsx'
import Pho from './pho.jsx'
import Anime from './anime.jsx'
import Button from './buttons.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Greeting />
    <Pho />
    <Anime />
    <Button />
  </React.StrictMode>,
)
