import React, { useCallback, useEffect, useState } from "react";
import Search from "../Search";
import SortRepos from "../SortRepos";
import ProfileInfo from "../ProfileInfo";
import Repos from "../Repos";
import Spinner from "../Spinner";
import toast, { Toaster } from "react-hot-toast";

function Home() {
  const [userProfile, setUserProfile] = useState();
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [sortType, setSortType] = useState("stars");

  const getUserAndRepos = useCallback(async () => {
    setLoading(true);
    try {
      const userResponse = await fetch(
        "https://api.github.com/users/hirengajjar"
      );
      const userProfile = await userResponse.json();
      setUserProfile((pre) => userProfile);

      const reposResponse = await fetch(userProfile.repos_url);
      const userRepos = reposResponse.json();
      setRepos(userRepos);
    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  });
  useEffect(() => {
    getUserAndRepos();
  }, []);

  return (
    <>
      <div className="m-4">
        <Search />
        <SortRepos />
        <div className="flex gap-4 flex-col lg:flex-row justify-center items-start">
          <ProfileInfo userProfile={userProfile} />
          <Repos />
          <Spinner />
        </div>
      </div>
    </>
  );
}

export default Home;
