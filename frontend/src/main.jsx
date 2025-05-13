import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { Provider, useDispatch, useSelector } from 'react-redux';
import store from './redux/reducer.js'
createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
);
