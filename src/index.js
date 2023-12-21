import React from 'react';
import ReactDOM from 'react-dom/client';
import "./Styles/Global.css"
import Routers from './Routers';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Routers />
  </React.StrictMode>
);