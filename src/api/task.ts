import axios from 'axios';

const API_BASE_URL = 'http://localhost:8000/api'; // Replace with your actual API base URL

export const task = async (telegramId: number, type: number) => {
  try {
    
    const response = await axios.post(`${API_BASE_URL}/tesk`, {
        telegram_id: telegramId,
      type: type
    });
    
    console.log('response of tesk api',response);
    return response.data;

  } catch (error) {
    console.error("Error tesk History:", error);
    throw error;
  }
};
