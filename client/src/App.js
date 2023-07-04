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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={token ? <HomePage /> : <Login />}></Route>

        {/* {token ? (
          <Route path="/homepage" element={<HomePage />}></Route>
        ) : (
          <Route path="/" element={<Login />}></Route>
        )} */}
        <Route path="/quotes" element={<Quotes />}></Route>
      </Routes>
    </>
  );
}
