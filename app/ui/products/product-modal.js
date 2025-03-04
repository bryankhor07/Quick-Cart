import { useState } from "react";
import { useAddReview } from "@/app/lib/hooks/useAddReview";
import useAuth from "@/app/lib/hooks/useAuth";
import { FaStar } from "react-icons/fa";
import { NotificationBanner } from "../notification-banner";

// ⭐ Star Rating Component
const StarRating = ({ rating, setRating, disabled = false }) => {
  return (
    <div className="flex space-x-1 mb-2">
      {[1, 2, 3, 4, 5].map((star) => (
        <FaStar
          key={star}
          className={`cursor-pointer text-2xl ${
            star <= rating ? "text-yellow-500" : "text-gray-300"
          }`}
          onClick={() => !disabled && setRating(star)}
        />
      ))}
    </div>
  );
};

export default function ProductModal({ product, onClose }) {
  const [reviewText, setReviewText] = useState("");
  const [reviews, setReviews] = useState(product.reviews || []);
  const [rating, setRating] = useState(0);
  const [showBanner, setShowBanner] = useState(false);
  const { user, loading } = useAuth(); // Get the authenticated user
  const { addReview } = useAddReview();

  const handleAddReview = () => {
    if (!rating) {
      setShowBanner(true);
      setTimeout(() => {
        setShowBanner(false);
      }, 3000);
      return;
    }

    const newReview = {
      userId: user.uid,
      userName: user.displayName,
      reviewText: reviewText,
      rating,
      createdAt: new Date().toLocaleDateString(),
    };

    addReview({
      productId: product.id,
      reviewText: reviewText,
      userId: user.uid,
      userName: user.displayName,
      rating,
    });

    setReviews((prevReviews) => [newReview, ...prevReviews]);
    setReviewText(""); // Reset review text
    setRating(0); // Reset rating after submission
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="relative bg-white p-6 rounded-lg shadow-lg max-w-4xl w-full h-full overflow-y-auto">
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
        <div className="mt-4 border-2 border-black p-4 rounded-md">
          <label
            htmlFor="review"
            className="block text-sm font-medium text-gray-700"
          >
            Write a review
          </label>
          {showBanner && (
            <NotificationBanner text="Please select a rating before posting your review." />
          )}
          <StarRating rating={rating} setRating={setRating} />
          <div className="mt-1 flex gap-2">
            <textarea
              id="review"
              name="review"
              placeholder="What should others know about this product?"
              className="mt-1 block h-20 w-full pl-3 pr-10 py-2 text-base border-2 border-black focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}
            ></textarea>
            <div className="flex justify-center items-end">
              <button
                className="h-10 bg-blue-500 text-white px-4 py-2 rounded-md"
                onClick={handleAddReview}
              >
                Post
              </button>
            </div>
          </div>
        </div>
        <div className="mt-4 border-2 border-black p-4 rounded-md">
          <h2 className="text-xl font-medium">Reviews</h2>
          <div className="mt-2">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="flex flex-col gap-2 border-b border-gray-300 py-2"
              >
                <div className="flex items-center gap-2">
                  <p className="text-sm font-semibold">{review.userName}</p>
                  <span className="text-yellow-500 text-sm">
                    ⭐ {review.rating} / 5
                  </span>
                </div>
                <div className="flex flex-row justify-between">
                  <p className="text-gray-600">{review.reviewText}</p>
                  <p className="text-gray-800">{review.createdAt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
