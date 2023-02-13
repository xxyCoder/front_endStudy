import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App>
      <h2>Hello,children1</h2>
      {/* <h2>Hello,children2</h2> */}
    </App>
  </React.StrictMode>
);