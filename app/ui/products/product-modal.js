export default function ProductModal({ product, onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="relative bg-white p-6 rounded-lg shadow-lg max-w-2xl w-full h-full overflow-y-auto">
        <span
          className="absolute top-2 right-2 text-2xl cursor-pointer text-gray-700 hover:text-red-600"
          onClick={onClose}
          title="Close"
        >
          &times;
        </span>
        <img
          src={product.imageURL}
          alt={product.name}
          className="w-full h-48 object-contain rounded-md"
        />
        <h2 className="text-2xl font-semibold mt-2">{product.name}</h2>
        <p className="text-gray-600">{product.description}</p>
        <p className="text-lg font-bold mt-2">${product.price}</p>
        {/*Dropdown menu for quantity */}
        <div className="mt-4 border-2 border-black p-4 rounded-md">
          <h2 className="text-xl font-medium">In Stock</h2>
          <label
            htmlFor="quantity"
            className="block text-sm font-medium text-gray-700"
          >
            Quantity
          </label>
          <select
            id="quantity"
            name="quantity"
            className="mt-1 block w-18 pl-3 pr-10 py-2 text-base border-2 border-black focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
          <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md block">
            Add to cart
          </button>
          <button className="mt-4 bg-orange-500 text-white px-4 py-2 rounded-md">
            Buy Now
          </button>
        </div>
        {/*Reviews section */}
        {/* Iterate over product.reviews */}
        <div className="mt-4 border-2 border-black p-4 rounded-md">
          <h2 className="text-xl font-medium">Reviews</h2>
          <div className="flex items-center mt-2">
            {product.reviews.map((review) => (
              <div key={review.id} className="flex items-center">
                <div className="ml-2">
                  <p className="text-gray-600">{review}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
