// components/OrderDetails.js
import React from 'react';
import { Box, Text, Stack, Divider } from '@chakra-ui/react';

const OrderDetails = ({ order }) => {
  const { date, status, total, products } = order;

  return (
    <Box p="4" borderWidth="1px" borderRadius="md" mb="4" width="100%">
      <Text mb="4">{`Order Date: ${date}`}</Text>

      <Divider />

      <Stack spacing="2" mt="4">
        {products.map(product => (
          <Box key={product.id}>
            <Text>{`Product: ${product.name}`}</Text>
            <Text>{`Price: ${product.price}`}</Text>
          </Box>
        ))}
      </Stack>

      <Divider />

      <Stack mt="4">
        <Text>{`Total: ${total}`}</Text>
        <Text>{`Status: ${status}`}</Text>
      </Stack>
    </Box>
  );
};

export default OrderDetails;

