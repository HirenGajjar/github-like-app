require("dotenv").config();
const { userModel } = require("../db/Model/userModel");
// Get user and repos
const getUserProfileAndRepos = async (req, res) => {
  const { username } = req.params;
  try {
    const userRes = await fetch(`https://api.github.com/users/${username}`);
    const userProfile = await userRes.json();
    const repoRes = await fetch(userProfile.repos_url);
    const repos = await repoRes.json();
    res.status(200).json({ userProfile, repos });
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while fetching data from GitHub" });
  }
};

// Like profile
const likeProfile = async (req, res) => {
  try {
    const { username } = req.params;
    const user = await userModel.findById(req.user._id.toString());
    const userToLike = await userModel.findOne({ username });
    if (!userToLike) {
      return res.status(404).json({ message: "Invalid user!" });
    }
    if (user.likedProfiles.includes(userToLike.username)) {
      return res.status(400).json({ message: "Already liked!" });
    }
    userToLike.likedBy.push({
      username: user.username,
      avatarUrl: user.avatarUrl,
      likedDate: Date.now(),
    });
  } catch (err) {
    res.status(400).json({ message: "Failed to like!" });
  }
};

module.exports = { getUserProfileAndRepos, likeProfile };
