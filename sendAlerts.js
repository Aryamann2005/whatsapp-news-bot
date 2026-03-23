const axios = require('axios');

// Replace these values with your actual details
require('dotenv').config();

const accessToken = process.env.ACCESS_TOKEN;

const phoneNumberId = process.env.PHONE_NUMBER_ID;


// Add all the numbers you want to send the message to (without + sign)
const recipients = [
  '918219574601', // Example: 91 = India
  
];

const sendMessages = async () => {
  for (const number of recipients) {
    try {
      const response = await axios.post(
        `https://graph.facebook.com/v19.0/${phoneNumberId}/messages`,
        {
          messaging_product: 'whatsapp',
          to: number,
          type: 'template',
          template: {
            name: 'worldwide_alerts',
            language: {
              code: 'en'
            }
          }
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
          },
        }
      );
      console.log(`✅ Message sent to ${number}`);
    } catch (error) {
      console.error(`❌ Error sending to ${number}:`, error.response?.data || error.message);
    }
  }
};

sendMessages();
