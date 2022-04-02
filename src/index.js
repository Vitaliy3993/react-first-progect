import React, {StrictMode} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Header} from './App';

/* const text = 'Hello world!';

const elem = (
  <div>
    <h2>Text: {text}</h2>
    <input type="text" />
    <button>Click</button>
  </div>
); */

ReactDOM.render(
  <StrictMode>
    <App/>
  </StrictMode>,
  
  document.getElementById('root')
);


{/* <React.StrictMode>
    <App />
  </React.StrictMode> */}