import api from "./api";

export async function getToken(formData) {
    try {
    const response = await api.post(`/user/login`, formData);
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
