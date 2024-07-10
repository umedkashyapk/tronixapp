import axios from 'axios';

const API_BASE_URL = 'http://localhost:8000/api'; // Replace with your actual API base URL

let orderData = {};
export const fetchMiningDetails = async (userId: number,telegramID:number, amount: number) => {
  try {
    
    // const response = await axios.post(`${API_BASE_URL}/mining-details`, {
    //   user_id: userId,
    //   amount: amount,
    //   telegram_id:telegramID
    // });
    //return response.data;

    return  orderData = {
    'miningPower':10,
    'rentPeriod':100,
    'totalProfit':150,
    'dailyProfit':5,
    'price':100,
    'paymentAddress':'TZBAtsB9FYqHNDhPXHZXYcZWuzyg272y4S'

    }
  } catch (error) {
    console.error("Error fetching mining details:", error);
    throw error;
  }
};
