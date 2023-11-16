import api from "./api";

export async function confirmOrder({
  caregiverId,
  userId,
  dateStart,
  dateEnd,
}) {
  try {
    const response = await api.post("order", {
      caregiver_id: caregiverId,
      user_id: userId,
      date_start: dateStart,
      date_end: dateEnd,
      price: 200000,
      address: "Placeholder Address",
      serviceIds: [1],
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
