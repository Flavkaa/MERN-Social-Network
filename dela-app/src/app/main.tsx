import ReactDOM from 'react-dom/client';

import App from './App.tsx';
import './styles/globals.scss';
import '@fontsource/poppins';
import { initializeApp } from './model/index.ts';

initializeApp();

ReactDOM.createRoot(document.getElementById('root')!).render(<App />);
