import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

const rootElem = document.createElement("div");
document.body.appendChild(rootElem);

const root = ReactDOM.createRoot(rootElem);

const useStrict = true;
const Strict = useStrict ? React.StrictMode : React.Fragment;

root.render(
    <Strict>
        <App />
    </Strict>
);