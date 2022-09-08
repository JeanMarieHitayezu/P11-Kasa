import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "@/layouts/Layout";

function App() {
  return (
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
              <Layout>
                <Routes>
                    <Route/>
                </Routes>
              </Layout>
        </BrowserRouter>
    </div>
  );
}

export default App;