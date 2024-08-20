import axios from "axios";

const API_BASE_URL = "http://127.0.0.1:8000/api"; // Replace with your actual API base URL

export const Bost_history = async (userId: number) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/Bost_history`, {
      user_id: userId,
    });

    console.log("response of Bost_history api", response);
    return response.data;
  } catch (error) {
    console.error("Error Bost_history History:", error);
    throw error;
  }
};
