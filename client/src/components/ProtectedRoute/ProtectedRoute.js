import React from "react";
import { useNavigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  if (token) {
    return <>{children}</>;
  } else {
    return (
      <h1 style={{ textAlign: "center", marginTop: "10%", fontSize: "50px" }}>
        If you want to view our page, you must log in
        <br></br>
        <button
          onClick={() => {
            navigate("/");
          }}
        >
          Click me
        </button>
      </h1>
    );
  }
}
