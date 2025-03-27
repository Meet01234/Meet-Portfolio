
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { getThemeCSS } from './lib/theme'

// Apply theme CSS
const style = document.createElement('style');
style.textContent = getThemeCSS();
document.head.appendChild(style);

createRoot(document.getElementById("root")!).render(<App />);
