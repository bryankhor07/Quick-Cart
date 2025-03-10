"use client";

import { lusitana } from "../fonts";
import { useDeleteAccount } from "../../lib/hooks/useDeleteAccount";
import { useGetUserOrderCount } from "@/app/lib/hooks/useGetUserOrderCount";
import { useState } from "react";
import useAuth from "@/app/lib/hooks/useAuth";

export default function Settings() {
  const { deleteAccount, loading, error } = useDeleteAccount();
  const [showModal, setShowModal] = useState(false);
  const { user } = useAuth();
  const { orderCount } = useGetUserOrderCount(user?.uid);

  return (
    <div className="w-full border border-gray-300 bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-lg font-semibold text-gray-700">Name:</h2>
      <p className="mb-3 text-gray-600">{user?.displayName}</p>

      <h2 className="text-lg font-semibold text-gray-700">Email:</h2>
      <p className="mb-3 text-gray-600">{user?.email}</p>

      <h2 className="text-lg font-semibold text-gray-700">
        Total number of Orders:
      </h2>
      <p className="mb-3 text-gray-600">{orderCount}</p>

      <h2 className="text-lg font-semibold text-gray-700">
        Total items in Cart:
      </h2>
      <p className="mb-6 text-gray-600">3</p>

      <div className="flex justify-end">
        <button
          className="flex h-10 items-center rounded-lg bg-red-500 px-4 text-sm font-medium text-white transition-colors hover:bg-red-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500 active:bg-red-600"
          onClick={() => setShowModal(true)}
          disabled={loading}
        >
          {loading ? "Deleting..." : "Delete Account"}
        </button>
      </div>
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm text-center">
            <h2 className="text-lg font-semibold text-gray-800">
              Are you sure you want to delete your account?
            </h2>
            <p className="text-sm text-gray-600 mt-2">
              This action cannot be reversed.
            </p>

            <div className="flex justify-center gap-4 mt-4">
              <button
                className="bg-gray-300 px-4 py-2 rounded-lg text-gray-800 hover:bg-gray-400"
                onClick={() => setShowModal(false)}
              >
                No
              </button>
              <button
                className="bg-red-500 px-4 py-2 rounded-lg text-white hover:bg-red-600"
                onClick={() => {
                  deleteAccount();
                  setShowModal(false);
                }}
              >
                Yes, Delete
              </button>
            </div>
          </div>
        </div>
      )}
      {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
    </div>
  );
}
