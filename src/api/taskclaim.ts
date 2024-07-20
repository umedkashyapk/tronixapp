import axios from 'axios';

const API_BASE_URL = 'http://localhost:8000/api'; // Replace with your actual API base URL

export const TaskClaim = async (userId: number, taskId: number) => {
  try {
    
    const response = await axios.post(`${API_BASE_URL}/task_claim`, {
      user_id: userId,
      task_id: taskId
    });
    
    console.log('response of TaskClaim api',response);
    window.location.reload();
    return response.data;
    

  } catch (error) {
    console.error("Error TaskClaim api:", error);
    throw error;
  }
};
