import api from "./api";

export const fetchCaregivers = async (startDate, endDate) => {
    try {
      const response = await api.get('/caregiver/search', {
        params: {
          start_date: startDate,
          end_date: endDate,
        },
      });
      return response.data;
    } catch (error) {
      console.error("Error fetching caregivers:", error);
      throw Error(error);
    }
  };

export const fetchCaregiverSchedule = async (caregiverId) => {
  try {
    const response = await api.get('/caregiver/schedule/' + caregiverId);
    return response.data;
  } catch (error) {
    console.error("Error fetching caregiver schedule:", error);
  }
}