import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Quotes from "./components/Quotes/Quotes";
import HomePage from "./components/HomePage/HomePage";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/quotes" element={<Quotes />}></Route>
      </Routes>
    </>
  );
}
