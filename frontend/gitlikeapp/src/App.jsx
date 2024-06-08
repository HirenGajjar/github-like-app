import React from "react";
import Home from "./components/Pages/Home";
import Login from "./components/Pages/Login";
import Signup from "./components/Pages/Signup";
import Explore from "./components/Pages/Explore";
import Likes from "./components/Pages/Likes";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <div className="flex">
        <div>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/signup" element={<Signup />}></Route>
            <Route path="/explore" element={<Explore />}></Route>
            <Route path="/likes" element={<Likes />}></Route>
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
