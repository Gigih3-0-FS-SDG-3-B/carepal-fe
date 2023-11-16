import React, { useState } from "react";
import UserProfileCard from "../components/caregiverCard";
import DateRangePicker from "../components/dateRangePicker";
import * as caregiverService from "../services/caregiverService";
import { Flex, Box } from "@chakra-ui/react";
import { format } from "date-fns-tz";
import { useDisclosure } from "@chakra-ui/react";
import BookingModal from "../components/bookingModal";

function CaregiverPage() {
  let [dateRange, setDateRange] = useState([null, null]);
  let [caregivers, setCaregivers] = useState([]);
  let [selectedCaregiver, setCaregiverToBook] = useState({});
  let [startDate, endDate] = dateRange;
  const { isOpen, onOpen, onClose } = useDisclosure();

  const onBookClick = (caregiverId) => {
    setCaregiverToBook(caregiverId);
    onOpen();
  };

  const handleDateChange = (update) => {
    setDateRange(update);
  };

  const onCalendarClose = async () => {
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
      }
    } else {
      setCaregivers([]);
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
      <Flex flexWrap="wrap" justifyContent="space-evenly">
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
        caregiverId={selectedCaregiver.caregiverId}
        caregiverName={selectedCaregiver.first_name}
        isOpen={isOpen}
        onClose={onClose}
      />
    </div>
  );
}

export default CaregiverPage;
