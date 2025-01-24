import React from 'react'
import ReactDOM from 'react-dom/client'
import Entrypoint from './Entrypoint.tsx';
import '@/globals/css/index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Entrypoint />
  </React.StrictMode>,
)
