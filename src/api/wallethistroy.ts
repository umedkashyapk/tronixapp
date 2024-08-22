import axios from "axios";

const API_BASE_URL = "https://tronox.me/api"; // Replace with your actual API base URL

export const wallet_histroy = async (userId: number) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/wallet_histroy`, {
      user_id: userId,
    });

    console.log("response of wallet_histroy api", response);
    return response.data;
  } catch (error) {
    console.error("Error wallet_histroy History:", error);
    throw error;
  }
};
