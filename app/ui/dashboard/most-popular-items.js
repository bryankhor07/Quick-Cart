export default function MostPopularItems() {
  return (
    <div className="w-full border border-gray-300 bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-lg font-semibold text-gray-700">
        Most Popular Items
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        <div className="flex flex-col items-center justify-center bg-gray-100 p-4 rounded-lg">
          {/* Placeholder image */}
          <h3 className="text-lg font-semibold mt-2">Item 1</h3>
          <p className="text-gray-600 mt-1">Description of item 1</p>
        </div>
        <div className="flex flex-col items-center justify-center bg-gray-100 p-4 rounded-lg">
          {/* Placeholder image */}
          <h3 className="text-lg font-semibold mt-2">Item 2</h3>
          <p className="text-gray-600 mt-1">Description of item 2</p>
        </div>
        <div className="flex flex-col items-center justify-center bg-gray-100 p-4 rounded-lg">
          {/* Placeholder image */}
          <h3 className="text-lg font-semibold mt-2">Item 3</h3>
          <p className="text-gray-600 mt-1">Description of item 3</p>
        </div>
      </div>
    </div>
  );
}
