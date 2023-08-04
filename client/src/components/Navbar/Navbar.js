import React, { useContext, useEffect } from "react";
import Button from "@mui/material/Button";
import { NavLink, useNavigate } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
import Typical from "react-typical";

export default function Navbar() {
  const navigation = useNavigate();
  const { token, setToken } = useContext(AppContext);
  useEffect(() => {}, [token]);
  return (
    <header className="bg-yellow-100 h-20 flex justify-between items-center">
      <NavLink>
        <h1>gg</h1>
        <Typical loop={Infinity} wrapper="b" steps={["wow"]} />
      </NavLink>
      <nav className="w-1/6  flex justify-around  items-center">
        {token && (
          <>
            <Button
              variant="contained"
              style={{ fontSize: "0.75rem" }}
              onClick={() => {
                localStorage.clear("token");
                setToken(null);
                navigation("/");
              }}
            >
              add qoute
            </Button>
            <Button
              variant="contained"
              color="success"
              style={{ fontSize: "0.75rem" }}
              onClick={() => {
                localStorage.clear("token");
                setToken(null);
                navigation("/");
              }}
            >
              Log Out
            </Button>
          </>
        )}
      </nav>
    </header>
  );
}
