import React from "react";
import useFirebase from "../Hook/UseFirebase/UseFirebase";
export const AuthContext = React.createContext();
const AuthProvider = ({ children }) => {
  const AllContext = useFirebase();
  return (
    <AuthContext.Provider value={AllContext}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
