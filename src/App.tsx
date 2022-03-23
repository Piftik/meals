import React from "react";
import LoginPage from "./pages/LoginPage/login";
import RegisterPage from "./pages/RegisterPage/register";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import StartPage from './pages/startPage/start'

const App = () => {
  console.log("goood");
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<StartPage />} path="/"></Route>
        <Route element={<LoginPage />} path="/login"></Route>
        <Route element={<RegisterPage />} path="/register"></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
