import React from "react";
import Search from "../Search";
import SortRepos from "../SortRepos";
import ProfileInfo from "../ProfileInfo";
import Repos from "../Repos";
import Spinner from "../Spinner";

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
