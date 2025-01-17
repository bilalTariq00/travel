import React, { useState } from "react";

const UserTable = ({ users, sendNotification, deleteUser }) => {
  const [selectedUser, setSelectedUser] = useState(null);

  return (
    <div>
      {/* User Table */}
      <table className="table-auto w-full bg-white shadow-lg rounded-lg dark:bg-gray-800 dark:text-white">
        <thead>
          <tr className="bg-gray-200 dark:bg-gray-700">
            <th className="px-4 py-2">Email</th>
            <th className="px-4 py-2">Phone</th>
            <th className="px-4 py-2">Unpaid</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="border-b dark:border-gray-700">
              <td className="px-4 py-2">{user.email}</td>
              <td className="px-4 py-2">{user.phone}</td>
              <td className="px-4 py-2">
                {user.unpaid ? (
                  <span className="text-red-500 font-semibold">Yes</span>
                ) : (
                  <span className="text-green-500 font-semibold">No</span>
                )}
              </td>
              <td className="px-4 py-2">
                {/* Notify Button */}
                <button
                  onClick={() => sendNotification(user)}
                  disabled={!user.unpaid}
                  className={`px-4 py-2 rounded mr-2 ${
                    user.unpaid
                      ? "bg-blue-500 text-white hover:bg-blue-600"
                      : "bg-gray-300 text-gray-500 cursor-not-allowed"
                  }`}
                >
                  Notify
                </button>

                {/* View Details Button */}
                <button
                  onClick={() => setSelectedUser(user)}
                  className="px-4 py-2 bg-yellow-500 text-white rounded mr-2 hover:bg-yellow-600"
                >
                  View Details
                </button>

                {/* Delete Button */}
                <button
                  onClick={() => deleteUser(user.id)}
                  className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* User Details Modal */}
      {selectedUser && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white dark:bg-gray-800 dark:text-white p-6 rounded-lg shadow-lg w-1/2">
            <h2 className="text-2xl font-bold mb-4">User Details</h2>
            <p><strong>Email:</strong> {selectedUser.email}</p>
            <p><strong>Phone:</strong> {selectedUser.phone}</p>
            <p><strong>Unpaid:</strong> {selectedUser.unpaid ? "Yes" : "No"}</p>

            <div className="flex justify-end mt-6">
              <button
                onClick={() => setSelectedUser(null)}
                className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserTable;
