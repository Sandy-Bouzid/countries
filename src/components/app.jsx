import Header from './header';
import Home from './Page/home';
import Country from './Page/country';
import countryData from '../assets/data.json';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { useEffect, useState } from 'react';



export default function App() {
  const [coutries, setCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all", {
      "method": "GET",
    })
    .then(response => response.json())
    .then(data => setCountries(data))
    .catch(err => {
      console.log(err);
    });
  }, [])
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home data={coutries} />,
    },
    {
      path: "country",
      element: <Country />,
    },
  ]);
  return (
    <div className='container'>
      <Header />
      <RouterProvider router={router} /> 
    </div>
  )
}

