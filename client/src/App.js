import React, { useContext, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import { AppContext } from "./context/AppContext";
import Quotes from "./pages/Quotes/Quotes";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import { Toaster } from "react-hot-toast";

export default function App() {
  const { token, setToken } = useContext(AppContext);
  useEffect(() => {
    const localToken = localStorage.getItem("token");
    setToken(localToken);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <Toaster position="bottom-left" reverseOrder={false} />
      <Navbar />
      <Routes>
        <Route path="/" element={token ? <Quotes /> : <Login />}></Route>
        <Route
          path="/quotes"
          element={
            <ProtectedRoute>
              <Quotes />
            </ProtectedRoute>
          }
        ></Route>
      </Routes>
    </>
  );
}
