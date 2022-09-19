import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "@/layouts/Layout";
import Error404 from "@/pages/404/404";
import Home from "@/pages/Home/Home";
import About from "@/pages/About/About";
import Card from '@/pages/Lodging/Card';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="*" element={<Error404 />}/>
            <Route path="/a-propos" element={<About />}/>
            <Route path="/logement/:id" element={<Card />}/>

            
          </Routes>
        </Layout>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
