import React from "react";
import Home from "./components/Pages/Home";
import Login from "./components/Pages/Login";
import Signup from "./components/Pages/Signup";
import Explore from "./components/Pages/Explore";
import Likes from "./components/Pages/Likes";
import Sidebar from "./components/Sidebar";
import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="max-w-5xl my-5 text-white mx-auto transition-all duration-300 flex-1">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/signup" element={<Signup />}></Route>
            <Route path="/explore" element={<Explore />}></Route>
            <Route path="/likes" element={<Likes />}></Route>
          </Routes>
          <Toaster />
        </div>
      </div>
    </>
  );
}

export default App;
