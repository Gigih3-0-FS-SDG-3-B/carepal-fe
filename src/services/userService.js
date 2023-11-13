import axios from "axios";

export async function fetchCaregiverData(caregiverId) {
  const url = `http://localhost:5000/api/caregiver/${caregiverId}`;

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
