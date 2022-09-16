import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "@/layouts/Layout";
import Error404 from "@/pages/404/404";
import Home from "@/pages/Home/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="*" element={<Error404 />}/>

            
          </Routes>
        </Layout>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
