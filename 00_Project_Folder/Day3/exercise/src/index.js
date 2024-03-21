
/*
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
*/

import React from 'react'
import ReactDOM from 'react-dom'

import image from './images/test.webp'

const root = document.getElementById('root');

const h1 = <h1>This is an h1 element</h1>
const h2 = <h2>This is an h2 element</h2>

const imageElement = <img src={image} alt="test" />

const jsx = (
  <div>
    {h1}
    {h2}
    {imageElement}
  </div>
)

ReactDOM.render(jsx, root);