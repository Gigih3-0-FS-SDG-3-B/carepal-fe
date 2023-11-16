import React, { useState, useEffect } from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  Grid,
  Spinner,
  Center,
  ChakraProvider,
  extendTheme,
  theme,
  Card,
  CardBody,
  HStack,
  Icon,
  Badge,
} from "@chakra-ui/react";
import {
  FaClock,
  FaCalendar,
  FaMoneyBillWave,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { format } from "date-fns";
import * as orderEnums from "../enums/orderEnums";
import * as orderService from "../services/orderService";

const customTheme = extendTheme({
  ...theme,
  styles: {
    global: {
      body: {
        bgGradient: "linear(to-r, teal.500, blue.600)",
        color: "teal.900",
      },
    },
  },
});

const orderStatusColors = {
  0: "blackAlpha", // Pending
  100: "orange", // Cancelled
  200: "red", // Rejected
  300: "yellow", // Waiting for Payment
  400: "purple", // Payment Success
  500: "blue", // On Going
  600: "green", // Complete
};
const getOrderStatusColor = (status) => orderStatusColors[status] || "gray.600";


const OrderListPage = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getOrder() {
      const orders = await orderService.getOrder({userId: localStorage.getItem("user_id")})
        setOrders(orders);
        setLoading(false);
    }
    getOrder();
  }, []);

  return (
    <ChakraProvider theme={customTheme}>
      <Flex
        direction="column"
        align="center"
        justify="center"
        minHeight="100vh"
      >
        <Box
          p="8"
          width="80%"
          borderRadius="lg"
          bg="white"
          boxShadow="xl"
          color="teal.900"
        >
          <Heading mb="4" textAlign="center" fontSize="3xl">
            Your Orders
          </Heading>
          {loading ? (
            <Center>
              <Spinner size="xl" />
            </Center>
          ) : (
            <Grid
              templateColumns="repeat(2, 1fr)"
              gap={6}
              justifyContent="center"
            >
              {orders.length === 0 ? (
                <Text fontSize="xl" textAlign="center">
                  No orders found.
                </Text>
              ) : (
                orders.map((order) => (
                  <Card
                    key={order.order_id}
                    borderRadius="lg"
                    boxShadow="md"
                    p="4"
                    mb="4"
                    width="100%"
                  >
                    <CardBody>
                    <Heading size="sm">Order #{order.order_id}</Heading>
                      <HStack spacing="4" mt="4" mb="0">
                        <Icon as={FaClock} />
                        <Badge
                          colorScheme={getOrderStatusColor(order.order_status)}
                        >
                          {orderEnums.orderStatus[order.order_status]}
                        </Badge>
                        <Icon as={FaCalendar} />
                        <Text className="mb-0">
                          {format(new Date(order.date_start), "MMM d, yyyy")} -{" "}
                          {format(new Date(order.date_end), "MMM d, yyyy")}
                        </Text>
                      </HStack>
                      <HStack spacing="4" mt="2">
                        <Icon as={FaMoneyBillWave} />
                        <Text className="mb-0">Rp. {order.price.toLocaleString()}</Text>
                        <Icon as={FaMapMarkerAlt} />
                        <Text className="mb-0">{order.address}</Text>
                      </HStack>
                    </CardBody>
                  </Card>
                ))
              )}
            </Grid>
          )}
        </Box>
      </Flex>
    </ChakraProvider>
  );
};

export default OrderListPage;
