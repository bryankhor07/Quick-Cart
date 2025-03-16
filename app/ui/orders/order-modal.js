import { useRouter } from "next/navigation";
import Image from "next/image";
import { NotificationBanner } from "../notification-banner";
import { useState } from "react";

export default function OrderModal({ order, onClose, loadPage }) {
  const router = useRouter();
  const [showNoReturnBanner, setShowNoReturnBanner] = useState(false);
  const [showReturnBanner, setShowReturnBanner] = useState(false);

  const redirectToProduct = () => {
    router.push(`/dashboard/products`);
  };

  const handleReturnItem = () => {
    // If current date - arrival date is more than 30 days, return is not allowed
    // Otherwise, return the item
    if (new Date() - new Date(order.arrivalDate) > 30 * 24 * 60 * 60 * 1000) {
      setShowNoReturnBanner(true);
      setTimeout(() => {
        setShowNoReturnBanner(false);
      }, 3000);
      return;
    }

    // Implement return item logic here
    setShowReturnBanner(true);
    setTimeout(() => {
      setShowReturnBanner(false);
      onClose();
    }, 3000);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="relative bg-white p-6 rounded-lg shadow-lg max-w-4xl w-full h-full overflow-y-auto">
        {showNoReturnBanner && (
          <NotificationBanner text="You cannot return this item as it has been more than 30 days since it arrived." />
        )}
        {showReturnBanner && (
          <NotificationBanner text="Item returned successfully." />
        )}
        <h2 className="text-xl font-semibold text-center">Order Details</h2>
        <div className="mt-4">
          <span
            className="absolute top-2 right-4 text-2xl cursor-pointer text-gray-700 hover:text-red-600"
            onClick={onClose}
            title="Close"
          >
            &times;
          </span>
          <div className="flex items-center justify-center">
            <Image
              src={order.imageURL}
              alt={order.productName}
              width={150}
              height={150}
              className="w-72 h-48 object-cover rounded-md"
            />
          </div>

          <h2 className="text-xl font-semibold mt-6">{order.productName}</h2>
          <p className="text-gray-600">{order.description}</p>
          <p className="text-gray-500 mt-6">Ordered on {order.createdAt}</p>
          <p className="text-gray-500">
            Estimated arrival: {order.arrivalDate}
          </p>
          <p className="text-gray-500">Quantity: {order.quantity}</p>
          <p className="text-lg font-bold mt-2">Total: ${order.totalPrice}</p>
        </div>
        <div className="flex gap-4">
          <button
            onClick={redirectToProduct}
            className="mt-4 w-48 bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600"
          >
            Buy again?
          </button>
          <button className="mt-4 w-48 bg-amber-500 text-white py-2 rounded-md hover:bg-amber-600">
            Return item
          </button>
        </div>
      </div>
    </div>
  );
}
