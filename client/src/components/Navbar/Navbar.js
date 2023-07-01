import React from "react";
import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="bg-yellow-100 h-20 flex justify-between items-center">
      <NavLink to={"/"}>
        <h1 className="text-3xl ml-6">GoodReads</h1>
      </NavLink>
      <nav className="w-1/6  flex justify-around  mr-6 items-center">
        <NavLink to={"/quotes"}>
          <h1 className="text-red-700 text-lg font-medium">Quotes</h1>
        </NavLink>
        <Button
          variant="contained"
          color="success"
          style={{ fontSize: "0.75rem" }}
        >
          Log Out
        </Button>
      </nav>
    </header>
  );
}
