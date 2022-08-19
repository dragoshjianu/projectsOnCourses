import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

const container = document.getElementById('app');

// create a root
const root = ReactDOM.createRoot(container);

//render app to root
root.render(<App />);
