import React, { useState } from "react";
import Mycontext from "./Mycontext";

const ContextStore = ({ children }) => {
  const [open, setopen] = useState(false);
  const [wconnected, setwconnected] = useState(false);

  const walletmodel = (value) => {
    setopen(value);
  };
  const handlewallet = (value) => {
    setwconnected(value);
  };

  return (
    <Mycontext.Provider
      value={{
        open,
        walletmodel,
        wconnected,
        handlewallet,
      }}
    >
      {children}
    </Mycontext.Provider>
  );
};

export default ContextStore;
