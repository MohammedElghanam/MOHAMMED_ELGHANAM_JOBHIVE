import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Login from "./components/forms/login";
import Protected from "./hooks/useProtected";
import Test from "./components/pages/test";
import Register from "./components/forms/register";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={ <Login /> } />
          <Route path="/test" element={ <Test /> } />
          <Route path="/register" element={ <Register /> } />
          <Route path="/dashboard" element={ 
            <Protected >
              <Test />
            </Protected>
          } />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>

      
      
    </div>
  );
}

export default App;