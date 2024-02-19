import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { AppProvider } from './Context/Productcontext';
import { FilterProvider } from './Context/FilterProContext';
import { Cartprovider } from './Context/CartContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppProvider>
      <FilterProvider>
        <Cartprovider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </Cartprovider>
      </FilterProvider>
    </AppProvider>
  </React.StrictMode>
);
