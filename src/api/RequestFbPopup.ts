import axios from "axios";

const API_BASE_URL = "https://tronox.me/api"; // Replace with your actual API base URL

export const RequestFbPopup = async (telegram_id
    : number, link: string ) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/RequestFbPopup`, {
      telegram_id: telegram_id,
      link :link,
      
      
        
    });

    console.log("response of RequestFbPopup api", response);
    // window.location.reload();
    return response.data;
  } catch (error) {
    console.error("Error RequestFbPopup api:", error);
    throw error;
  }
};
