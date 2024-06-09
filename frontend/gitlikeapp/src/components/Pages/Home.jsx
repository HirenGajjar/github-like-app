import React, { useCallback, useEffect, useState } from "react";
import Search from "../Search";
import SortRepos from "../SortRepos";
import ProfileInfo from "../ProfileInfo";
import Repos from "../Repos";
import Spinner from "../Spinner";
import toast, { Toaster } from "react-hot-toast";

function Home() {
  const [userProfile, setUserProfile] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [sortType, setSortType] = useState("stars");

  const getUserAndRepos = useCallback(async (username = "HirenGajjar") => {
    setLoading(true);
    try {
      const userResponse = await fetch(
        `https://api.github.com/users/${username}`
      );
      const userProfile = await userResponse.json();
      setUserProfile(userProfile);

      const reposResponse = await fetch(userProfile.repos_url);
      const userRepos = await reposResponse.json();
      setRepos(userRepos);
      setLoading(false);
      return { userProfile, userRepos };
    } catch (err) {
      toast.error(err.message);
      setLoading(false);
    }
  }, []);
  useEffect(() => {
    getUserAndRepos();
  }, [getUserAndRepos]);

  const handleSearch = async (e, username) => {
    e.preventDefault();
    setLoading(true);
    setRepos([]);
    setUserProfile(null);
    const { userProfile, userRepos } = await getUserAndRepos(username);
    setUserProfile(userProfile);
    setRepos(userRepos);
    setLoading(false);
  };
  return (
    <>
      <div className="m-4">
        <Search handleSearch={handleSearch} />
        <SortRepos />
        <div className="flex gap-4 flex-col lg:flex-row justify-center items-start">
          {userProfile && !loading && <ProfileInfo userProfile={userProfile} />}
          {repos.length > 0 && !loading && <Repos repos={repos} />}
          {loading && <Spinner />}
        </div>
      </div>
    </>
  );
}

export default Home;
