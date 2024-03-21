import React from 'react';
import { createRoot } from 'react-dom/client';

// import style
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/style.css';
import App from './components/App';

const root = createRoot(document.getElementById('root'));
root.render(<App />);