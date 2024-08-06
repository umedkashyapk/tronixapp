const TelegramBot = require('node-telegram-bot-api');
const axios = require('axios');

// Replace 'YOUR_TELEGRAM_BOT_TOKEN' with your bot's token
const token = '7477099634:AAFi2KEdWAtKx1-e6xq3sZJBbjakREdlkwo';
const bot = new TelegramBot(token, { polling: true });

const CHANNEL_USERNAME = '@testtronox'; // Replace with your channel's username
const CHANNEL_URL = 'https://t.me/testtronox'; // URL without @
const PDF_URL = 'https://example.com/presentation.pdf'; // Replace with the URL of your PDF
const WEB_APP_URL = 'https://t.me/Tronoxx_bot/tronoxx'; // URL of your web app

// Handle the /start command with a parameter
bot.onText(/\/start(?:\s+(.+))?/, async (msg, match) => {
  const chatId = msg.chat.id;
  const userId = msg.from.id;
  const startParam = match[1] ? match[1].trim() : null; // Capture the start parameter

  console.log('match:', match);
  console.log('start_param:', startParam);

  try {
    const memberDetails = await bot.getChatMember(chatId, userId);
    console.log('Member details:', memberDetails);

    const webAppUrl = startParam ? `${WEB_APP_URL}?start=${startParam}` : WEB_APP_URL;

    const options = {
      reply_markup: {
        inline_keyboard: [
          [
            { text: '🎮 Play', url: webAppUrl },
            { text: '📄 Presentation', url: PDF_URL }
          ],
          [
            { text: '📢 Channel', url: CHANNEL_URL },
            { text: '✅ Verify', callback_data: 'verify' }
          ]
        ]
      }
    };
    bot.sendMessage(chatId, 'Welcome! Please choose an option:', options);
  } catch (error) {
    console.error(`Error fetching member details for user ${userId}:`, error);
  }
});

// Handle button callbacks
bot.on('callback_query', async (callbackQuery) => {
  const message = callbackQuery.message;
  const chatId = message.chat.id;
  const data = callbackQuery.data;

  if (data === 'play') {
    try {
      console.log(`Checking membership for user ${chatId} in channel ${CHANNEL_USERNAME}`);
      const isMember = await checkChannelMembership(chatId, CHANNEL_USERNAME);
      if (isMember) {
        bot.sendMessage(chatId, `You are already a member of ${CHANNEL_USERNAME}. Launching the game...`);
        bot.sendMessage(chatId, `Click here to play: ${WEB_APP_URL}`);
      } else {
        bot.sendMessage(chatId, `Please join ${CHANNEL_USERNAME} to play the game.`);
      }
    } catch (error) {
      bot.sendMessage(chatId, 'An error occurred while checking membership. Please try again later.');
      console.error(`Error checking membership for user ${chatId}:`, error);
    }
  }

  if (data === 'verify') {
    try {
      console.log(`Verifying membership for user ${chatId} in channel ${CHANNEL_USERNAME}`);
      const isMember = await checkChannelMembership(chatId, CHANNEL_USERNAME);
      if (isMember) {
        bot.sendMessage(chatId, `You are a member of ${CHANNEL_USERNAME}.`);
      } else {
        bot.sendMessage(chatId, `You are not a member of ${CHANNEL_USERNAME}. Please join to proceed.`);
      }
    } catch (error) {
      bot.sendMessage(chatId, 'An error occurred while checking membership. Please try again later.');
      console.error(`Error verifying membership for user ${chatId}:`, error);
    }
  }
});

// Function to check if a user is a member of the channel
async function checkChannelMembership(userId, channelUsername) {
  try {
    const response = await bot.getChatMember(channelUsername, userId);
    console.log(`getChatMember response for user ${userId}:`, response);
    const status = response.status;
    return status === 'member' || status === 'administrator' || status === 'creator';
  } catch (error) {
    console.error(`Error in getChatMember for user ${userId} in channel ${channelUsername}:`, error);
    throw error;
  }
}

console.log('Bot is running...');

