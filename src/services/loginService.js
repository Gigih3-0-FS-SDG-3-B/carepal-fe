import axios from "axios";

export async function getToken(formData) {
    try {
    const backendUrl = process.env.REACT_APP_BACKEND_URL;
    const response = await axios.post(`${backendUrl}/api/user/login`, formData);
    if (response.status === 200) {
      const token = response.data.token;
      const userId = response.data.user.user_id;
      return { userId, token };
    } else {
      return null;
    }
  } catch (error) {
    console.error("Login error:", error);
  }
}
