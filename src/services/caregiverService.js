import api from "./api";

export const fetchCaregivers = async (startDate, endDate) => {
    try {
      const response = await api.get('/caregiver/search', {
        params: {
          startDate: startDate.toISOString(),
          endDate: endDate.toISOString(),
        },
      });
      return response.data;
    } catch (error) {
      console.error("Error fetching caregivers:", error);
    }
  };