import React from "react";
import Home from "./components/Pages/Home";
import Login from "./components/Pages/Login";
import Signup from "./components/Pages/Signup";
import Explore from "./components/Pages/Explore";
import Likes from "./components/Pages/Likes";
import Sidebar from "./components/Sidebar";
import { Navigate, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useAuthContext } from "./context/AuthContext";

function App() {
  const { authUser, loading } = useAuthContext();

  if (loading) return null;
  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="max-w-5xl my-5 text-white mx-auto transition-all duration-300 flex-1">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route
              path="/login"
              element={!authUser ? <Login /> : <Navigate to={"/"} />}
            ></Route>
            <Route
              path="/signup"
              element={!authUser ? <Signup /> : <Navigate to={"/"} />}
            ></Route>
            <Route
              path="/explore"
              element={authUser ? <Explore /> : <Navigate to={"/login"} />}
            ></Route>
            <Route
              path="/likes"
              element={authUser ? <Likes /> : <Navigate to={"/login"} />}
            ></Route>
          </Routes>
          <Toaster />
        </div>
      </div>
    </>
  );
}

export default App;
