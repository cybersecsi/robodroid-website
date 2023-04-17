import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '@robodroid/App';
import '@robodroid/index.css';
import 'animate.css';
import 'tippy.js/dist/tippy.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
