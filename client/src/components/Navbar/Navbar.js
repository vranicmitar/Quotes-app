import React from "react";

export default function Navbar() {
  return (
    <header className="bg-yellow-100 h-20 flex justify-between items-center">
      <h1 className="text-3xl ml-6">GoodReads</h1>
      <nav className="w-1/5  flex justify-around  mr-6 ">
        <h1 className="text-red-700 text-lg">Quotes</h1>
        <button className="text-red-700 text-lg">LogOut</button>
      </nav>
    </header>
  );
}
