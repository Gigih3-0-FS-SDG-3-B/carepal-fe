import api from "./api";

export const fetchReviews = async (caregiverId) => {
  try {
    const response = await api.get("/review", {
      params: {
        caregiver_id: caregiverId,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching reviews:", error);
  }
};
