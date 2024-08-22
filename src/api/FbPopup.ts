import axios from "axios";

const API_BASE_URL = "https://tronox.me/api"; // Replace with your actual API base URL

export const earn_by_facebook = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/earn_by_facebook`, {
      
    });

    console.log("response of FbPopup api", response.data);
    return response;
  } catch (error) {
    console.error("Error FbPopup History:", error);
    throw error;
  }
};
