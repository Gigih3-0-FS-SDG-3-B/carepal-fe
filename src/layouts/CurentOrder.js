import React from 'react';
import OrderDetails from '../layouts/DetailedOrderPage';

const CurrentOrderPage = () => {
  // Data pesanan saat ini
  const currentOrders = [
    {
      id: 1,
      date: '2023-11-13',
      status: 'Delivered',
      products: [
        { id: 1, name: 'Yanto', caregiver: "WISNU", price: 80000 },
      ],
      total: 8000,
    },
    // Add more orders as needed
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Current Orders</h1>
      {currentOrders.map(order => (
        <div key={order.id} className="mb-8">
          <OrderDetails order={order} />
          <hr className="my-4" />
        </div>
      ))}
    </div>
  );
};

export default CurrentOrderPage;
