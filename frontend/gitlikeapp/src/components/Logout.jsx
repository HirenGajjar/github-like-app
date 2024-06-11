import React from "react";
import { MdLogout } from "react-icons/md";
import { useAuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";

function Logout() {
  const { authUser, setAuthUser } = useAuthContext();
  const handleLogout = async () => {
    try {
      const response = await fetch(`http://localhost:3000/api/auth/logout`, {
        credentials: "include",
      });
      const data = await response.json();
      console.log(data);
      setAuthUser(null);
    } catch (error) {
      toast.error("Something went wrong!");
    }
  };
  return (
    <>
      <img
        src={authUser?.avatarUrl}
        className="w-10 h-10 rounded-full border border-gray-800"
      />

      <div
        className="cursor-pointer flex items-center p-2 rounded-lg  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 hover: bg-gray-600/10 border border-gray-800 text-white mt-auto border border-gray-800"
        onClick={handleLogout}
      >
        <MdLogout size={22} />
      </div>
    </>
  );
}

export default Logout;
