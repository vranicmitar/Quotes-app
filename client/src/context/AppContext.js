import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

const AppContext = createContext();

function ContextProvider({ children }) {
  const [token, setToken] = useState(null);
  const accessToken = "yuim98oq-e275-45a2-bc2e-b3098036d655";

  const values = {
    token,
    setToken,
  };

  return (
    <>
      <AppContext.Provider value={values}>{children}</AppContext.Provider>
    </>
  );
}

export { AppContext, ContextProvider };
