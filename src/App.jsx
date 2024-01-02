import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Navbar from './Component/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Donor from './pages/Donor';
import Receiver from './pages/Receiver';
import { Route, Routes } from 'react-router-dom'; 
import './App.css';
import Profile from './pages/Profile/Profile';
import DonorNear from './pages/Profile/DonorNear';
import DonorHistory from './pages/Profile/DonorHistory';
import Language from './pages/Profile/Language';
import Request from './pages/Profile/Request';
import Help from './pages/Profile/Help';

const  App=() => {
  return (
   <>
   { 
     
      <Routes>
 <Route exact path="/navbar" element={<Navbar/>} />
     <Route exact path="/" element={<Home />} />
   <Route exact path="/about" element={<About />} /> 
     <Route exact path="/gallery" element={<Gallery />} />
      <Route exact path="/donor" element={<Donor/>} />
      <Route exact path="/receiver" element={<Receiver />} />
      <Route exact path="/profile" element={<Profile />} />
      <Route exact path="/donornear" element={<DonorNear />} />
      <Route exact path="/request" element={<Request />} />
      <Route exact path="/donorhistory" element={<DonorHistory />} />
      <Route exact path="/language" element={<Language />} />
      <Route exact path="/help" element={<Help />} />
       </Routes> 

       
     
    }
    {/* <About/> */}
     {/* <Navbar/>  */}
     {/* <Profile/>  */}
    {/* <Donor/> */}
    {/* <Home/> */}
    {/* <About/> */}


    {/* <Footer/> */}
   </>
  );
}

export default App;
