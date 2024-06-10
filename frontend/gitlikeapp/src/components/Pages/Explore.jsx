import React, { useState } from "react";
import { IoLogoJavascript } from "react-icons/io5";
import { FaPython } from "react-icons/fa";
import { TbBrandCpp } from "react-icons/tb";
import { FaJava } from "react-icons/fa";
import { FaRust } from "react-icons/fa";
import { FaGolang } from "react-icons/fa6";
import { toast } from "react-hot-toast";
import Repos from "../Repos";
import Spinner from "../Spinner";
function Explore() {
  const [loading, setLoading] = useState(false);
  const [repos, setRepos] = useState([]);
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const handleExploreRepos = async (language) => {
    try {
      setLoading(true);
      setRepos([]);
      setSelectedLanguage(language);
      const req = await fetch(
        `https://api.github.com/search/repositories?q=language:${language}&sort=stars&order=desc&per_page=10`
      );
      const data = await req.json();

      setRepos(data.items);
      setLoading(false);
    } catch (error) {
      toast.error("No repos found!");
      setLoading(false);
    }
  };
  return (
    <>
      <div className="px-4">
        <div className=" bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 hover: bg-gray-600/10 border border-gray-800 text-white max-w-2xl mx-auto rounded-md p-4">
          <h1 className="text-xl font-bold text-center">
            Explore Popular Repositories
          </h1>
          <div className="flex flex-wrap gap-2 my-2 justify-center">
            <IoLogoJavascript
              className="h-11 sm:h-20 cursor-pointer"
              size={30}
              onClick={() => {
                handleExploreRepos("javascript");
              }}
            />
            <FaPython
              className="h-11 sm:h-20 cursor-pointer"
              size={30}
              onClick={() => {
                handleExploreRepos("python");
              }}
            />
            <TbBrandCpp
              className="h-11 sm:h-20 cursor-pointer"
              size={30}
              onClick={() => {
                handleExploreRepos("c++");
              }}
            />
            <FaRust
              className="h-11 sm:h-20 cursor-pointer"
              size={30}
              onClick={() => {
                handleExploreRepos("rust");
              }}
            />
            <FaGolang
              className="h-11 sm:h-20 cursor-pointer"
              size={30}
              onClick={() => {
                handleExploreRepos("golang");
              }}
            />
            <FaJava
              className="h-11 sm:h-20 cursor-pointer"
              size={30}
              onClick={() => {
                handleExploreRepos("java");
              }}
            />
          </div>
          {repos.length > 0 && (
            <h2 className="text-lg font-semibold text-center my-4">
              {selectedLanguage.charAt(0).toUpperCase() +
                selectedLanguage.slice(1)}{" "}
              repositories
            </h2>
          )}
          {!loading && repos.length > 0 && (
            <Repos repos={repos} alwaysFullWidth />
          )}
          {loading && <Spinner />}
        </div>
      </div>
    </>
  );
}

export default Explore;
