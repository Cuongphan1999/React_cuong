import React from 'react';
import './index.css';
import { createRoot } from 'react-dom/client';
import Home from './components/Home';


const container = document.getElementById('root');
const root = createRoot(container);
root.render(<Home />);
