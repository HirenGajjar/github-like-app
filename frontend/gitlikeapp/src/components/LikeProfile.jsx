import React from "react";
import { FaHeart } from "react-icons/fa6";

function LikeProfile() {
  const handleLike = async () => {
    
  };
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
