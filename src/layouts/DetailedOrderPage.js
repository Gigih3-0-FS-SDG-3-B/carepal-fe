import React from 'react';
import {
  Box,
  Grid,
  GridItem,
  Heading,
  Text,
  Badge,
  Divider,
  Flex,
  VStack,
  HStack,
  Icon,
} from '@chakra-ui/react';
import { FaCalendar, FaMoneyBillAlt } from 'react-icons/fa';

const ProductItem = ({ product }) => (
  <Box>
    <Text>
      Pemesan: {product.name} - Caregiver: {product.caregiver} - Price: {product.price}
    </Text>
  </Box>
);

const OrderDetails = ({ order }) => (
  <Box>
    <Heading as="h2" fontSize="lg" mb="2">
      Products
    </Heading>
    <ul>
      {order.products.map(product => (
        <ProductItem key={product.id} product={product} />
      ))}
    </ul>
  </Box>
);

const OrderCard = ({ order }) => (
  <Box
    p="4"
    mb="4"
    borderRadius="md"
    boxShadow="md"
    bg="white"
    borderWidth="1px"
    borderColor="gray.200"
  >
    <Flex justifyContent="space-between" alignItems="center" mb="3">
      <Heading as="h2" fontSize="lg">
        Order #{order.id}
      </Heading>
      <Badge
        colorScheme={order.status === 'Delivered' ? 'green' : 'orange'}
        fontSize="md"
      >
        {order.status}
      </Badge>
    </Flex>
    <HStack spacing="4" mb="3">
      <Flex alignItems="center">
        <Icon as={FaCalendar} fontSize="lg" />
        <Text ml="2">{order.date}</Text>
      </Flex>
      <Flex alignItems="center">
        <Icon as={FaMoneyBillAlt} fontSize="lg" />
        <Text ml="2">Total: RP {order.total}</Text>
      </Flex>
    </HStack>
    <Divider mb="3" />
    <OrderDetails order={order} />
  </Box>
);

const DetailedOrderPage = () => {
  // Sample order data
  const order_1 = {
    id: 1,
    date: '2023-11-13',
    status: 'Delivered',
    products: [
      { id: 1, name: 'Yanto', caregiver: 'WISNU', price: 80000 },
    ],
    total: 8000,
  };

  // Sample order data
  const order_2 = {
    id: 2,
    date: '2023-11-13',
    status: 'Processing',
    products: [
      { id: 2, name: 'Gigih', caregiver: 'windah', price: 80000 },
      { id: 3, name: 'Gigih', caregiver: 'windah', price: 80000 },
    ],
    total: 16000,
  };

  return (
    <VStack spacing="4" align="stretch" p="4">
      <OrderCard order={order_1} />
      <OrderCard order={order_2} />
    </VStack>
  );
};

export default DetailedOrderPage;

