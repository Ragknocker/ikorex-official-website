import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './style.css';
import './styles/motion.css';
import './styles/saas-3d.css';
import './styles/saas-design-system.css';

const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
