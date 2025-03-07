"use client";

import { useGetUserOrders } from "@/app/lib/hooks/useGetUserOrders";
import useAuth from "@/app/lib/hooks/useAuth";
import OrderModal from "./order-modal";
import { useState } from "react";

export default function OrdersList() {
  const { user, loading } = useAuth();
  const { userOrders } = useGetUserOrders(user?.uid);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [filter, setFilter] = useState("all time");

  const handleOrderClick = (order) => {
    setSelectedOrder(order);
  };

  const handleCloseModal = () => {
    setSelectedOrder(null);
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  // Function to filter orders based on the selected time range
  const filteredOrders = userOrders.filter((order) => {
    if (!order.createdAt) return false;

    const orderDate = new Date(order.createdAt);
    const now = new Date();

    switch (filter) {
      case "last 30 days":
        return now - orderDate <= 30 * 24 * 60 * 60 * 1000; // 30 days in ms
      case "past 3 months":
        return now - orderDate <= 90 * 24 * 60 * 60 * 1000; // 90 days in ms
      case "past year":
        return now - orderDate <= 365 * 24 * 60 * 60 * 1000; // 365 days in ms
      default:
        return true; // "all time"
    }
  });

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="mb-6">
        {filteredOrders.length} orders placed in
        <select
          className="ml-2 bg-gray-200 border rounded-md p-1"
          value={filter}
          onChange={handleFilterChange}
        >
          <option>all time</option>
          <option>last 30 days</option>
          <option>past 3 months</option>
          <option>past year</option>
        </select>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredOrders.map((order) => (
          <div
            key={order.id}
            className="relative border p-4 rounded-lg shadow-md bg-white cursor-pointer"
            onClick={() => handleOrderClick(order)}
          >
            <img
              src={order.imageURL}
              alt={order.productName}
              className="w-full h-48 object-contain rounded-md"
            />
            <h2 className="text-xl font-semibold mt-2">{order.productName}</h2>
            <p className="text-gray-600">
              {order.description.split(" ").slice(0, 10).join(" ")}...
            </p>
            <p className="text-gray-500">Ordered on {order.createdAt}</p>
            <p className="text-gray-500">Quantity: {order.quantity}</p>
            <p className="text-lg font-bold mt-2">Total: ${order.totalPrice}</p>
          </div>
        ))}
      </div>
      {selectedOrder && (
        <OrderModal order={selectedOrder} onClose={handleCloseModal} />
      )}
    </div>
  );
}
