require("dotenv").config();
const axios = require("axios");

const getTopHeadlines = async () => {
  try {
    console.log("🔍 Loaded API key:", process.env.NEWS_API_KEY); // 👈 Add this

    const response = await axios.get(
      `https://newsapi.org/v2/top-headlines`,
      {
        params: {
          language: "en",
          pageSize: 5,
          country: "us",
          apiKey: process.env.NEWS_API_KEY,
        },
      }
    );


    const articles = response.data.articles;

    if (!articles || articles.length === 0) {
      return "No news available right now.";
    }

    let message = "🗞️ *Top Breaking News:*\n\n";

    articles.forEach((article, i) => {
      message += `*${i + 1}. ${article.title.trim()}*\n`;

      if (article.description) {
        message += `_${article.description.trim()}_\n`;
      }

      if (article.url) {
        message += `🔗 ${article.url}\n`;
      }

      message += "\n"; // Space between articles
    });

    return message;

  } catch (error) {
    console.error("❌ Error fetching news:", error.response?.data || error.message);
    return "Error fetching news.";
  }
};

// ✅ Don't forget this line!
module.exports = { getTopHeadlines };
