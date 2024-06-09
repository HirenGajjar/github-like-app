import React, { useState } from "react";
import Search from "../Search";
import SortRepos from "../SortRepos";
import ProfileInfo from "../ProfileInfo";
import Repos from "../Repos";
import Spinner from "../Spinner";
const [userProfile, setUserProfile] = useState(null);
const [repos, setRepos] = useState([]);
const [loading, setLoading] = useState(false);
const [sortType, setSortType] = useState("stars");

function Home() {
  return (
    <>
      <div className="m-4">
        <Search />
        <SortRepos />
        <div className="flex gap-4 flex-col lg:flex-row justify-center items-start">
          <ProfileInfo />
          <Repos />
          <Spinner />
        </div>
      </div>
    </>
  );
}

export default Home;
