const cron = require("node-cron");
const { getTopHeadlines } = require("./newsFetcher");
const { sendWhatsAppMessage } = require("./sendmessage");

// ✅ First send immediately when script runs
const runNewsBot = async () => {
  const news = await getTopHeadlines();
  await sendWhatsAppMessage(news);
};

runNewsBot(); // Immediate first run

// 🕒 Schedule to run every 3 hours
cron.schedule("0 */3 * * *", async () => {
  console.log("⏰ Running scheduled news bot...");
  const news = await getTopHeadlines();
  await sendWhatsAppMessage(news);
});
