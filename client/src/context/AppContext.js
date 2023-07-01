import React, { createContext, useState } from "react";

const AppContext = createContext();

function ContextProvider({ children }) {
  const [accessToken, setAccessToken] = useState(null);

  const values = {
    accessToken,
    setAccessToken,
  };

  return (
    <>
      <AppContext.Provider value={values}>{children}</AppContext.Provider>
    </>
  );
}

export { AppContext, ContextProvider };
