import React from "react";
import { FaHeart } from "react-icons/fa6";
import { toast } from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";
function LikeProfile({ userProfile }) {
  const { authUser } = useAuthContext();
  const isOwnProfile = authUser?.username === userProfile.login;
  const handleLike = async () => {
    try {
      const response = await fetch(
        `http://localhost:3000/api/users/likes/${userProfile.login}`,
        {
          method: "POST",
          credentials: "include",
        }
      );
      const data = response.json();
      if (data.error) {
        toast.error(data.error);
      }
      toast.success(data.message);
    } catch (error) {
      toast.error("Failed to get data!");
    }
  };
  if (!authUser || isOwnProfile) return null;

  return (
    <>
      <button
        className="p-2 text-xs w-full font-medium rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 hover: bg-gray-600/10 border border-gray-800 text-white border border-blue-400 flex items-center gap-2"
        onClick={handleLike}
      >
        <FaHeart size={16} /> Like Profile
      </button>
    </>
  );
}

export default LikeProfile;
