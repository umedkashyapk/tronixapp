import axios from "axios";

const API_BASE_URL = "https://tronox.me/api";

export const checkOrInsertUser = async (userData: any) => {
  const response = await axios.post(`${API_BASE_URL}/register`, userData);
  console.log("checkOrInsertUser", response.data);
  return response.data.user;

  // return  userInfo = {
  //   id: 12345,
  //   first_name: "vicky",
  //   last_name: "kashyap",
  //   username: "vicky_kashyap",
  //   claimable_amt:1.2483509214351851,
  //   last_claim_timestamp: 1720246905,
  //   is_invested:2
  // };
};
