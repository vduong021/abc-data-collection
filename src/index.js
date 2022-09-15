import React from 'react';
// import {render} from 'react-dom'

// import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import {createRoot} from 'react-dom/client';
// import './styles.css'
// const container = document.getElementById('root');
// const root = createRoot(container);
// root.render(<App />);

console.log('i am in index.js');
const root = createRoot(document.getElementById("root"));
root.render(
<App />
)

// render(<App />, document.getElementById('root'));

