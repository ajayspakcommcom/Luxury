import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './components/Layout';
import Home from './pages/Home/Home';
import AboutUs from './pages/About/AboutUs';
import Menu from "./pages/Menu/Menu";
import Booking from "./pages/Booking/Booking";
import ContactUs from './pages/Contact/ContactUs';
import Test from './pages/Test/Test';
import NoPage from './pages/NoPage/NoPage';
import './App.css';


function App() {



  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/menu" element={<Menu />} />
            {/* <Route path="/booking" element={<Booking />} /> */}
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/test" element={<Test />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
