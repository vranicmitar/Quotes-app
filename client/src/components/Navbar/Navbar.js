import React, { useContext, useEffect } from "react";
import Button from "@mui/material/Button";
import { NavLink, useNavigate } from "react-router-dom";
import { AppContext } from "../../context/AppContext";

export default function Navbar() {
  const navigation = useNavigate();
  const { token, setToken } = useContext(AppContext);
  useEffect(() => {}, [token]);
  return (
    <header className="bg-yellow-100 h-20 flex justify-between items-center">
      <NavLink to={"/"}>
        <h1 className="text-3xl ml-6">GoodReads</h1>
      </NavLink>
      <nav className="w-1/6  flex justify-around  mr-6 items-center">
        <NavLink to={"/quotes"}>
          <h1 className="text-red-700 text-lg font-medium">Quotes</h1>
        </NavLink>
        <NavLink to={"/"}>
          <h1 className="text-red-700 text-lg font-medium">Login</h1>
        </NavLink>
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
      </nav>
    </header>
  );
}
