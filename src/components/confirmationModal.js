import React from "react";
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
  Heading,
} from "@chakra-ui/react";
import * as orderEnums from "../enums/orderEnums";

function ConfirmationModal({ isOpen, onClose, confirmationLoading, confirmedOrder }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          {confirmationLoading ? (
            <div className="flex justify-center mt-4">
              <Text>Confirming your booking...</Text>
            </div>
          ) : (
            <Text>Booking Confirmed</Text>
          )}
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          {confirmationLoading ? (
            <div className="flex justify-center mt-4">
              <Spinner size="xl" />
            </div>
          ) : (
            <>
            <Heading size="sm">Your order has been sent!</Heading>
            <Text>Order ID: {confirmedOrder?.order_id}</Text>
            <Text>Current Status: {orderEnums.orderStatus[confirmedOrder?.order_status]}</Text>
            <Text>Date Scheduled:</Text>
            <Text>{new Date(confirmedOrder?.date_start).toDateString()} - {new Date(confirmedOrder?.date_end).toDateString()}</Text>
            <Text>We will call you in under 24 hours to confirm your booking.</Text>
            </>
          )}
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default ConfirmationModal;
