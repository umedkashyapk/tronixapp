import axios from 'axios';

const API_BASE_URL = 'http://localhost:8000/api'; // Replace with your actual API base URL

export const Claim = async (userId: number) => {
    console.log('handleClickClaim',userId);
  try {
    
    const response = await axios.post(`${API_BASE_URL}/claim`, {
      user_id: userId
    });
    
    console.log('Claim Amount details',response);
    return response.data;

    

  } catch (error) {
    console.error("Error Claim Amount details:", error);
    throw error;
  }
};