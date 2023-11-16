import React, { useState } from "react";
import UserProfileCard from "../components/caregiverCard";
import DateRangePicker from "../components/dateRangePicker";
import * as caregiverService from "../services/caregiverService";
import { Flex, Box, Spinner } from "@chakra-ui/react";
import { format } from "date-fns-tz";
import { useDisclosure } from "@chakra-ui/react";
import BookingModal from "../components/bookingModal";

function CaregiverPage() {
  let [dateRange, setDateRange] = useState([null, null]);
  let [caregivers, setCaregivers] = useState([]);
  let [selectedCaregiver, setCaregiverToBook] = useState({});
  let [startDate, endDate] = dateRange;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [loading, setLoading] = useState(false);

  const onBookClick = (caregiver) => {
    setCaregiverToBook(caregiver);
    onOpen();
  };

  const handleDateChange = (update) => {
    setDateRange(update);
  };

  const onCalendarClose = async () => {
    setLoading(true);

    if (startDate !== null && endDate !== null) {
      try {
        setCaregivers([]);
        let [newStartDate, newEndDate] = dateRange;
        let availableCaregivers = await caregiverService.fetchCaregivers(
          format(new Date(newStartDate), "yyyy-MM-dd", {
            timeZone: "Asia/Makassar",
          }),
          format(new Date(newEndDate), "yyyy-MM-dd", {
            timeZone: "Asia/Makassar",
          })
        );
        setCaregivers(availableCaregivers);
      } catch (err) {
        console.log(err);
        setCaregivers([]);
      } finally {
        setLoading(false); // Set loading to false when the operation is done
      }
    } else {
      setCaregivers([]);
      setLoading(false); // Set loading to false if no date range is selected
    }
  };

  let today = new Date();
  let minimumDate = new Date(today);
  minimumDate.setDate(today.getDate() + 1);
  let maximumDate = new Date(today);
  maximumDate.setDate(today.getDate() + 365);

  return (
    <div className="mx-4">
      <div className="mb-2 text-xl font-bold">
        Find Caregiver Availability Here!
      </div>
      <DateRangePicker
        startDate={startDate}
        endDate={endDate}
        minDate={minimumDate}
        maxDate={maximumDate}
        onChange={handleDateChange}
        onCalendarClose={onCalendarClose}
      />
      {loading && <Spinner marginLeft="2" color="blue.500" size="sm" />}
      <Flex flexWrap="wrap" justifyContent="space-evenly">
        {caregivers.length === 0 &&
          !loading &&
          startDate !== null &&
          endDate !== null && (
            <div className="text-xl mt-4 mb-4">
              No Available Caregivers Found
            </div>
          )}
        {caregivers.map((element, index) => {
          return (
            <Box key={index} width="24%" marginBottom="4">
              <UserProfileCard
                caregiverId={element.caregiver_id}
                name={element.first_name}
                imageUrl={element.profile_picture_url}
                description={element.description}
                onBookClick={() => {
                  onBookClick(element);
                }}
              />
            </Box>
          );
        })}
      </Flex>
      <BookingModal
        caregiverId={selectedCaregiver.caregiver_id}
        caregiverName={selectedCaregiver.first_name}
        isOpen={isOpen}
        onClose={onClose}
      />
    </div>
  );
}

export default CaregiverPage;
