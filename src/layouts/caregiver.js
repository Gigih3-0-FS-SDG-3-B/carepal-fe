import React, { useState } from "react";
import UserProfileCard from "../components/caregiverCard";
import DateRangePicker from "../components/dateRangePicker";
import * as caregiverService from "../services/caregiverService";
import { Flex, Box } from "@chakra-ui/react";

function CaregiverPage() {
  let [dateRange, setDateRange] = useState([null, null]);
  let [caregivers, setCaregivers] = useState([]);
  let [startDate, endDate] = dateRange;

  const handleBookClick = () => {
    alert("Booking functionality will be implemented here.");
  };

  const handleDateChange = (update) => {
    setDateRange(update);
  };

  const onCalendarClose = async () => {
    if (startDate !== null && endDate !== null) {
      setCaregivers([]);
      let [startDate, endDate] = dateRange;
      let availableCaregivers = await caregiverService.fetchCaregivers(
        startDate,
        endDate
      );
      setCaregivers(availableCaregivers);
    }
  };

  return (
    <div className="mx-4">
      <DateRangePicker
        startDate={startDate}
        endDate={endDate}
        handleDateChange={handleDateChange}
        onCalendarClose={onCalendarClose}
      />
      <Flex flexWrap="wrap" justify="space-between">
        {caregivers.map((element, index) => {
          return (
            <Box key={index} width="24%" marginBottom="4">
              <UserProfileCard
                name={element.first_name}
                imageUrl={element.profile_picture_url}
                handleBookClick={handleBookClick}
              />
            </Box>
          );
        })}
      </Flex>
    </div>
  );
}

export default CaregiverPage;
