import axios from "axios";

const API_BASE_URL = "https://tronox.me/api"; // Replace with your actual API base URL

export const confirmPayment = async (
  userId: number,
  address: string,
  amount: number
) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/confirm-payment`, {
      user_id: userId,
      address: address,
      amount: amount,
    });
    console.log("confirm-payment", response.data);
    return response.data;
    // return true;
  } catch (error) {
    console.error("Error confirming payment:", error);
    throw error;
  }
};
