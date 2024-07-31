import axios from "axios";

const API_BASE_URL = "https://tronox.me/api"; // Replace with your actual API base URL

export const transactionsHistory = async (userId: number, type: number) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/transactions`, {
      user_id: userId,
      type: type,
    });

    console.log("response of transactions api", response);
    return response.data;
  } catch (error) {
    console.error("Error transactions History:", error);
    throw error;
  }
};
