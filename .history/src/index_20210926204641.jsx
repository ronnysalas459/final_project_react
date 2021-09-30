import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import App from './routes/App';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

