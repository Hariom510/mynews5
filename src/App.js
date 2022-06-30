import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { Link } from 'react-router-dom';


import "./styles.css";
import Navbar from './components/Navbar';
import Sports from './components/Sports';
import Home from './components/Home';
import Header from './components/Header';
import Science from './components/Science';
import Business from './components/Business';
import Technology from './components/Technology';
import { dividerClasses } from '@mui/material';
import Entertainment from './components/Entertainment';

export default function App() {
  //  const [comp, setComp] = useState("");

  return (
    <>
    <Router>
       <Header />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/mynews" element={<Home />}></Route>
        <Route path="/sports" element={<Sports />}></Route>
        <Route path="/entertainment" element={<Entertainment />}></Route>
        <Route path="/science" element={<Science/>}></Route>
        <Route path="/business" element={<Business/>}></Route>
        <Route path="/technology" element={<Technology/>}></Route>
      </Routes>
    </Router>
    

    {/* <button type="button" class="btn btn-primary" onClick={()=> setComp("sports")}>Sports News</button>
    <button type="button" class="btn btn-secondary" onClick={()=> setComp("health")}>Health News</button> */}

    {/* <div>
      {comp==="" && <Home />}
      {comp==="sports" && <Sports />}
      {comp==="health" && <Health />}
    </div> */}
    
    <footer><h6>Copyright 2022 Hariom Kumar</h6></footer>
    </>
  );
 }
