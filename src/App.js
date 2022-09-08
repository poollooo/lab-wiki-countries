import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import React from 'react';
import Layout from './components/Layout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <React.StrictMode>

      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="/:cca3" element={<CountriesList />} />
              <Route path="/:cca3" element={<CountryDetails />} />
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </React.StrictMode>

  );
}

export default App;
