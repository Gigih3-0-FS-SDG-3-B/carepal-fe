import React, { useState } from "react";
import UserProfileCard from "../components/caregiverCard";
import DateRangePicker from "../components/dateRangePicker";
import * as caregiverService from "../services/caregiverService";
import { Flex, Box } from "@chakra-ui/react";
import { format } from 'date-fns-tz';
import { Link } from "react-router-dom";
import { useDisclosure } from "@chakra-ui/react";
import BookingModal from "../components/bookingModal";

function CaregiverPage() {
  let [dateRange, setDateRange] = useState([null, null]);
  let [caregivers, setCaregivers] = useState([]);
  let [startDate, endDate] = dateRange;
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleDateChange = (update) => {
    setDateRange(update);
  };

  const onCalendarClose = async () => {
    if (startDate !== null && endDate !== null) {
      try {
        setCaregivers([]);
        let [newStartDate, newEndDate] = dateRange;
        let availableCaregivers = await caregiverService.fetchCaregivers(
          format(new Date(newStartDate), 'yyyy-MM-dd', { timeZone: 'Asia/Makassar' }),
          format(new Date(newEndDate), 'yyyy-MM-dd', { timeZone: 'Asia/Makassar' })
        );
        setCaregivers(availableCaregivers);
      } catch (err) {
        console.log(err);
        setCaregivers([]);
      }
    }
    else {
      setCaregivers([]);
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
      <Flex flexWrap="wrap" justifyContent="space-evenly">
        {caregivers.map((element, index) => {
          return (
            <Box key={index} width="24%" marginBottom="4">
              <Link to={`${element.caregiver_id}`}>
              <UserProfileCard
                name={element.first_name}
                imageUrl={element.profile_picture_url}
                description={element.description}
                onBookClick={onOpen}
              />
            </Link>
            </Box>
          );
        })}
      </Flex>
      <BookingModal isOpen={isOpen} onClose={onClose} />
    </div>
  );
}

export default CaregiverPage;
