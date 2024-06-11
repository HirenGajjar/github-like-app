require("dotenv").config();
const exploreLanguageRepos = async (req, res) => {
  try {
    const { language } = req.params;

    const response = await fetch(
      `https://api.github.com/search/repositories?q=language:${language}&sort=stars&order=desc&per_page=10`
    );
    const data = await response.json();
    res.status(200).json({ repos: data.items });
  } catch (error) {
    res.status(400).json(error);
  }
};

module.exports = { exploreLanguageRepos };
