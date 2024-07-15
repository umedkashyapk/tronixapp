import axios from 'axios';

const API_BASE_URL = 'http://localhost:8000/api'; // Replace with your actual API base URL

export const fetchMiningDetails = async (userId: number, amount: number) => {
  try {
    
    const response = await axios.post(`${API_BASE_URL}/order_details`, {
      user_id: userId,
      amount: amount
    });
    
    console.log('response of order detail api',response);
    return response.data;

    


    // return  orderData = {
    // 'miningPower':10,
    // 'rentPeriod':100,
    // 'totalProfit':150,
    // 'dailyProfit':5,
    // 'price':100,
    // 'paymentAddress':'TZBAtsB9FYqHNDhPXHZXYcZWuzyg272y4S'

    // }
  } catch (error) {
    console.error("Error fetching mining details:", error);
    throw error;
  }
};
