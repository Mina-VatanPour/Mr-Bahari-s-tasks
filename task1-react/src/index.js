import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App/>
);
// با برداشتن این تگ از ذوبار رندر شدن جلوگیری میشه
// <React.StrictMode>
//     <App/>
// </React.StrictMode>


