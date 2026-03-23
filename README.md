# WhatsApp News Bot 🤖📰

## 🚀 Overview
An automated bot that fetches the latest news and sends it directly to WhatsApp using automation.

## 💡 Features
- 📡 Fetches real-time news
- 📲 Sends alerts directly to WhatsApp
- ⏱️ Automated messaging system
- 🔗 Webhook support

## 🛠️ Tech Stack
- Node.js
- whatsapp-web.js
- News API

## ⚙️ How to Run

1. Install dependencies:
   npm install

2. Create `.env` file and add:
   NEWS_API_KEY=your_api_key

3. Run the bot:
   node index.js

4. Scan QR code on WhatsApp

## 📂 Project Structure
- index.js → main bot logic  
- newsFetcher.js → fetch news  
- sendAlerts.js → send notifications  
- webhook.js → webhook handling  

## 🎯 Future Improvements
- Category-based news
- User commands
- Scheduled daily summaries
