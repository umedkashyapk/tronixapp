import axios from "axios";

const API_BASE_URL = "https://tronox.me/api";

export const withdrow = async (
  userId: number,
  address: string,
  amount: number
) => {
  console.log("withdrow ", userId);
  try {
    const response = await axios.post(`${API_BASE_URL}/withdrow`, {
      user_id: userId,
      address: address,
      amount: amount,
    });

    console.log("response of withdrow api", response);
    return response.data;
  } catch (error) {
    console.error("Error withdrow History:", error);
    throw error;
  }
};
