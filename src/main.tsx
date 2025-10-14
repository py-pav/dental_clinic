import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AccessibilityProvider } from './components/AccessibilityContext';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AccessibilityProvider>
      <App />
    </AccessibilityProvider>
  </React.StrictMode>,
);