require("dotenv").config();
const axios = require("axios");

const sendWhatsAppMessage = async (message) => {
  try {
    const url = `https://graph.facebook.com/v18.0/${process.env.PHONE_NUMBER_ID}/messages`;

   const response = await axios.post(
  `https://graph.facebook.com/v19.0/${phoneNumberId}/messages`,
  {
    messaging_product: 'whatsapp',
    to: number,
    type: 'text',
    text: {
      body: "👋 Hello from the bot! This is a test message."
    }
  },
  {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
  }
);


    console.log("✅ Message sent:", response.data);
  } catch (error) {
    console.error("❌ Error sending message:", error.response?.data || error.message);
  }
};

module.exports = { sendWhatsAppMessage };
