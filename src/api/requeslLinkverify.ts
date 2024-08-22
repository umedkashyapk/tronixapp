import axios from "axios";

const API_BASE_URL = "https://tronox.me/api"; // Replace with your actual API base URL

export const RequestLinkVerify = async (inviteConfirmation
    : number, selectedViews: number ,link :any ) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/RequestLinkVerify`, {
        linkverify_id: inviteConfirmation,
        telegram_id:selectedViews ,
        link :link,
    });

    console.log("response of RequestLinkVerify api", response);
    // window.location.reload();
    return response.data;
  } catch (error) {
    console.error("Error RequestLinkVerify api:", error);
    throw error;
  }
};
