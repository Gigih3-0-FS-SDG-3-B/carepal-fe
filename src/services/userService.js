import api from './api';

export async function fetchCaregiverData(caregiverId) {
  try {
    const response = await api.get(`/caregiver/${caregiverId}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
