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
  Spinner,
  Text,
  Alert,
  AlertIcon,
  AlertTitle,
  CloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import DateRangePicker from "./dateRangePicker";
import * as caregiverService from "../services/caregiverService";
import ConfirmationModal from "./confirmationModal";
import * as orderService from "../services/orderService";

function BookingModal({ caregiverId, caregiverName, isOpen, onClose }) {
  const [isDatePickerReady, setIsDatePickerReady] = useState(false);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [excludeDates, setExcludeDates] = useState([]);
  const [error, setError] = useState(null);
  const [confirmationLoading, setConfirmationLoading] = useState(false);
  const [confirmedOrder, setConfirmedOrder] = useState({});

  const {
    isOpen: isConfirmationOpen,
    onOpen: openConfirmation,
    onClose: closeConfirmation,
  } = useDisclosure();

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

  const handleBooking = async () => {
    if (!startDate || !endDate) {
      setError("Please select both start and end dates.");
      return;
    }
    try {
      setConfirmationLoading(true);
      onClose();
      openConfirmation();
      const confirmedOrderDetail = await orderService.confirmOrder({
        caregiverId: caregiverId,
        userId: localStorage.getItem("user_id"),
        dateStart: startDate,
        dateEnd: endDate,
      });
      setConfirmedOrder(confirmedOrderDetail);
    } catch (error) {
      console.error("An error occurred:", error);
    } finally {
      setConfirmationLoading(false);
    }
  };

  let today = new Date();
  let minimumDate = new Date(today);
  minimumDate.setDate(today.getDate() + 1);
  let maximumDate = new Date(today);
  maximumDate.setDate(today.getDate() + 365);

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} on>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Book {caregiverName}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <ModalHeader>Choose Date</ModalHeader>
            {isDatePickerReady ? (
              <DateRangePicker
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
                inline={true}
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
            <Button onClick={handleBooking} colorScheme="blue">
              Confirm Booking
            </Button>
          </ModalFooter>
          {error && (
            <Alert status="error" mt={4}>
              <AlertIcon />
              <AlertTitle mr={2}>{error}</AlertTitle>
              <CloseButton
                position="absolute"
                right="8px"
                top="8px"
                onClick={() => setError(null)}
              />
            </Alert>
          )}
        </ModalContent>
      </Modal>
      <ConfirmationModal
        isOpen={isConfirmationOpen}
        onClose={closeConfirmation}
        confirmationLoading={confirmationLoading}
        confirmedOrder={confirmedOrder}
      />
    </>
  );
}

export default BookingModal;
