import axios from 'axios';

const API_BASE_URL = 'http://localhost:8000/api';
let userInfo = {}
export const checkOrInsertUser = async (userData: any) => {
  //const response = await axios.post(`${API_BASE_URL}/check_or_insert_user`, userData);
  //return response.data;
    
  return  userInfo = {
    id: 12345,
    first_name: "vicky",
    last_name: "kashyap",
    username: "vicky_kashyap",
    claimable_amt:0.000452,
    last_claim_timestamp: 1720246905,
    is_invested:2
  };
};
