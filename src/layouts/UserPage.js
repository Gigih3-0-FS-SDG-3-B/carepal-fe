// layouts/UserPage.js
import React from 'react';
import { Flex, Text, Avatar, Badge, Grid, GridItem, FormControl, FormLabel, Input } from '@chakra-ui/react';
import UserProfileInfo from '../components/UserProfileInfo';
import OrderDetails from '../components/OrderDetails';

const UserProfilePage = () => {
  // Data pengguna, Anda dapat memperbarui sesuai kebutuhan Anda
  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    address: '123 Main St, Cityville',
    photo: 'https://via.placeholder.com/150',
    role: 'User',
    avatarUrl: 'https://play-lh.googleusercontent.com/830wVRGpgr6whP_zJ_1kh7QpuQvCvZ7x-_qJDjYGC2JAp46rj-xOKKzBqyItO4t32WoQ',
  };
  const userOrders = [
    {
      id: 1,
      date: '2023-11-15',
      status: 'Delivered',
      total: 8000,
      products: [
        { id: 1, name: 'Product 1', price: 5000 },
        { id: 2, name: 'Product 2', price: 3000 },
        // Tambahkan produk lainnya sesuai kebutuhan
      ],
    },
    // Tambahkan pesanan lainnya sesuai kebutuhan
  ];

  return (
    <Flex direction="column" align="center" mt="8">
      <h1>User Profile</h1>
      <Avatar size="2xl" name={user.name} src={user.avatarUrl} mb="4" />
      <Text fontSize="lg" color="gray.600" mb="2">
        {user.name}
      </Text>
      <Badge colorScheme="teal" mb="4">
        {user.role}
      </Badge>
      <UserProfileInfo user={user} />

      <div className="user-profile-container">
        <div className="user-profile-content">
          {userOrders.map(order => (
            <React.Fragment key={order.id}>
              <OrderDetails order={order} />
              <hr />
              <FormControl>
                <Grid templateColumns="repeat(2, 1fr)" gap={4} mt={4}>
                  <GridItem colSpan={1}>
                    <FormLabel>Status</FormLabel>
                    <Badge colorScheme="green">{order.status}</Badge>
                  </GridItem>
                  <GridItem colSpan={1}>
                    <FormLabel>Total</FormLabel>
                    <Input type="text" value={order.total} readOnly />
                  </GridItem>
                </Grid>
              </FormControl>
              <hr />
            </React.Fragment>
          ))}
        </div>
      </div>
    </Flex>
  );
};

export default UserProfilePage;
