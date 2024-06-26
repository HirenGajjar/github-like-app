import React, { createContext, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
const AuthContext = createContext(null);
const useAuthContext = () => {
  return useContext(AuthContext);
};
const AuthContextProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkUserLoggedIn = async () => {
      try {
        setLoading(true);
        const response = await fetch(`http://localhost:3000/api/auth/check/`, {
          credentials: "include",
        });
        const data = await response.json();
        setAuthUser(data.user);
      } catch (err) {
        toast.error("Unauthorized User!");
      } finally {
        setLoading(false);
      }
    };
    checkUserLoggedIn();
  }, []);
  return (
    <AuthContext.Provider value={{ authUser, setAuthUser, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContextProvider, useAuthContext };
