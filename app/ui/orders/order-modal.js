import { useRouter } from "next/navigation";

export default function OrderModal({ order, onClose }) {
  const router = useRouter();

  const redirectToProduct = () => {
    router.push(`/dashboard/products`);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="relative bg-white p-6 rounded-lg shadow-lg max-w-4xl w-full h-full overflow-y-auto">
        <h2 className="text-xl font-semibold text-center">Order Details</h2>
        <div className="mt-4">
          <span
            className="absolute top-2 right-4 text-2xl cursor-pointer text-gray-700 hover:text-red-600"
            onClick={onClose}
            title="Close"
          >
            &times;
          </span>
          <img
            src={order.imageURL}
            alt={order.productName}
            className="w-full h-48 object-contain rounded-md"
          />
          <h2 className="text-xl font-semibold mt-6">{order.productName}</h2>
          <p className="text-gray-600">{order.description}</p>
          <p className="text-gray-500 mt-6">Ordered on {order.createdAt}</p>
          <p className="text-gray-500">
            Estimated arrival: {order.arrivalDate}
          </p>
          <p className="text-gray-500">Quantity: {order.quantity}</p>
          <p className="text-lg font-bold mt-2">Total: ${order.totalPrice}</p>
        </div>
        <button
          onClick={redirectToProduct}
          className="mt-4 w-full bg-orange-500 text-white py-2 rounded-md"
        >
          Buy again?
        </button>
      </div>
    </div>
  );
}
