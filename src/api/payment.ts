import axios from 'axios';

const API_BASE_URL = 'http://localhost:8000/api'; // Replace with your actual API base URL

export const confirmPayment = async (userId: number, telegramID: number, address: string, amount: number) => {
  try {
    // const response = await axios.post(`${API_BASE_URL}/confirm-payment`, {
    //   user_id: userId,
    //   telegram_id: telegramID,
    //   address: address,
    //   amount: amount
    // });
    //return response.data.success;
    return true;
  } catch (error) {
    console.error("Error confirming payment:", error);
    throw error;
  }
};
