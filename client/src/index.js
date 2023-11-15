import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import  {Provider}  from './context/Product';
import { FilterProvider } from './context/FilterContext';
import { CartProvider } from './context/CartContext';
import { Auth0Provider } from '@auth0/auth0-react';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
    domain="dev-rwgs152i72u3zzv2.us.auth0.com"
    clientId="GYgKa5JWG9DxU0YZdNfH5KhjQyrh6ptv"
    authorizationParams={{redirect_uri: window.location.origin}}>

  <Provider>
    <FilterProvider>
      <CartProvider>
      <App />
      </CartProvider>
    </FilterProvider>
    </Provider>
    
    </Auth0Provider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
