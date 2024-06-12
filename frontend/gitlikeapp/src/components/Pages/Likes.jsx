import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaHeart } from "react-icons/fa";
import { formatDate } from "../../Utils/functions";

function Likes() {
  const [likes, setLikes] = useState();
  useEffect(() => {
    const getLikes = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/users/likes`, {
          credentials: "include",
        });
        const data = response.json();
        if (data.error) {
          toast.error("No data found!");
        }
        setLikes(data.likedBy);
      } catch (error) {
        toast.error(error.message);
      }
    };
    getLikes();
  }, []);
  console.log(likes);
  return (
    <>
      <div className="relative overflow-x-auto shadow-md rounded-lg px-4">
        <table className="w-full text-sm text-left rtl:text-right  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 hover: bg-gray-600/10 border border-gray-800 text-white overflow-hidden">
          <thead className="text-xs uppercase  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 hover: bg-gray-600/10 border border-gray-800 text-white">
            <tr>
              <th scope="col" className="p-4">
                <div className="flex items-center">No</div>
              </th>
              <th scope="col" className="px-6 py-3">
                Username
              </th>
              <th scope="col" className="px-6 py-3">
                Date
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {likes && likes.length > 0 ? (
              likes.map((like, index) => (
                <tr
                  className="bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 hover:bg-gray-600/10 border border-gray-800 text-white border-b"
                  key={like.username}
                >
                  <td className="w-4 p-4">
                    <div className="flex items-center">
                      <span>{index + 1}</span>
                    </div>
                  </td>
                  <th
                    scope="row"
                    className="flex items-center px-6 py-4 whitespace-nowrap "
                  >
                    <img
                      className="w-10 h-10 rounded-full"
                      src={like.avatarUrl}
                      alt="User Image"
                    />
                    <div className="ps-3">
                      <div className="text-base font-semibold">
                        {like.username}
                      </div>
                    </div>
                  </th>
                  <td className="px-6 py-4">{formatDate(like.likedDate)}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <FaHeart size={22} className="text-red-500 mx-2" />
                      Liked your profile
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center py-4 text-white">
                  No likes on your profile yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Likes;
