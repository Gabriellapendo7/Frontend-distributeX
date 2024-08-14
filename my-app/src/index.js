import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Componets/Homepage';
import About from './Componets/About';
import Orders from './Componets/orders';
import StockSearch from './Componets/stock';



// import Buy from './Componets/Buy';


const items = [
{ name: 'Stainless Steel Lunch Box', stock: 120 },
{ name: 'Plastic Lunch Box', stock: 300 },
{ name: 'Silicone Lunch Box', stock: 150 },
{ name: 'Wheat Straw Lunch Box', stock: 80 },
{ name: 'Cookware Set', stock: 50 },
{ name: 'Water Bottle', stock: 200 },
{ name: 'Cutlery', stock: 400 },
{ name: 'Mug', stock: 250 },
{ name: 'Dinnerware Set', stock: 70 },
{ name: 'Kitchenware', stock: 500 },
{ name: 'Camping Pot', stock: 30 },
{ name: 'Tray', stock: 150 },
{ name: 'Lunch Box Bag', stock: 60 },
];



const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  
  {
    path: '/home',
    element: <Home />,
  }, 
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/orders',
    element: <Orders />,
  },
  {
    path: '/stock',
    element: <StockSearch items = {items}/>,
  },

  
])
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
