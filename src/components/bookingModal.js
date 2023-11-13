import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
} from "@chakra-ui/react";
import DatePicker from "react-datepicker";

function BookingModal({isOpen, onClose}) {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Book an Appointment</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <ModalHeader>Choose a Date Range</ModalHeader>
          <DatePicker
            selectsRange={true}
            startDate={startDate}
            endDate={endDate}
            onChange={(update) => {
              const [start, end] = update;
              setStartDate(start);
              setEndDate(end);
            }}
            inline
          />
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
