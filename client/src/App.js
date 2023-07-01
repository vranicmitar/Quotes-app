import React, { useContext, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Quotes from "./components/Quotes/Quotes";
import HomePage from "./components/HomePage/HomePage";
import Login from "./pages/Login/Login";
import { AppContext } from "./context/AppContext";

export default function App() {
  const { token, setToken } = useContext(AppContext);
  useEffect(() => {
    const localToken = localStorage.getItem("token");
    setToken(localToken);
  }, []);
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/quotes" element={<Quotes />}></Route>
      </Routes>
    </>
  );
}
