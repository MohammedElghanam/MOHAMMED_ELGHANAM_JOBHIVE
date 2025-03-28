import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Login from "./components/forms/login";
import Protected from "./hooks/useProtected";
import Register from "./components/forms/register";
import Home from "./components/pages/home";
import Dashboard from "./components/pages/dashboard";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={ <Login /> } />
          <Route path="/register" element={ <Register /> } />
          <Route path="/condidature" element={ <Home /> } />
          <Route path="/recruteur" element={ 
            <Protected >
              <Dashboard />
            </Protected>
          } />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>

      
      
    </div>
  );
}

export default App;