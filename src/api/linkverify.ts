import axios from "axios";

const API_BASE_URL = "https://tronox.me/api"; // Replace with your actual API base URL

export const LinkVerify = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/LinkVerify`, {
      
    });

    console.log("response of LinkVerify api", response.data);
    return response;
  } catch (error) {
    console.error("Error LinkVerify History:", error);
    throw error;
  }
};
