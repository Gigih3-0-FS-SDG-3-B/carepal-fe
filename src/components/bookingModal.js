import React, { useState, useEffect } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  Spinner, Text
} from "@chakra-ui/react";
import DatePicker from "react-datepicker";
import * as caregiverService from "../services/caregiverService";

function BookingModal({caregiverId, caregiverName, isOpen, onClose}) {
  const [isDatePickerReady, setIsDatePickerReady] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [excludeDates, setExcludeDates] = useState([]);

  useEffect(() => {
    const fetchScheduleData = async () => {
      const data = await caregiverService.fetchCaregiverSchedule(caregiverId);
      setExcludeDates(data.unavailableDates.map((date) => new Date(date)));
      setIsDatePickerReady(true);
    };

    if (isOpen) {
      fetchScheduleData();
    }
  }, [caregiverId, isOpen]);

  let today = new Date();
  let minimumDate = new Date(today);
  minimumDate.setDate(today.getDate() + 1)
  let maximumDate = new Date(today);
  maximumDate.setDate(today.getDate() + 365)

  return (
    <Modal isOpen={isOpen} onClose={onClose} on>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Book {caregiverName}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <ModalHeader>Choose Date</ModalHeader>
          {isDatePickerReady ? (
            <DatePicker
              selectsRange={true}
              startDate={startDate}
              endDate={endDate}
              onChange={(update) => {
                const [start, end] = update;
                setStartDate(start);
                setEndDate(end);
              }}
              minDate={minimumDate}
              maxDate={maximumDate}
              excludeDates={excludeDates}
              inline
            />
          ) : (
            <div className="flex flex-col items-center justify-center">
            <Text>{"Loading Schedule..."}</Text>
            <Spinner size="lg" />
            </div>
          )}
        </ModalBody>
        <ModalFooter>
          <Button variant="ghost" onClick={onClose}>
            Cancel
          </Button>
          <Button colorScheme="blue">Confirm Booking</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default BookingModal;
