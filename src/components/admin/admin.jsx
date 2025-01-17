import React, { useState } from "react";
import UserTable from "./UserTable";

const AdminPage = () => {
  const [users, setUsers] = useState([
    { id: 1, email: "user1@example.com", phone: "12345678901", unpaid: true },
    { id: 2, email: "user2@example.com", phone: "09876543210", unpaid: false },
  ]);

  const sendNotification = (user) => {
    alert(`Notification sent to:\nEmail: ${user.email}\nPhone: ${user.phone}`);
  };

  const deleteUser = (id) => {
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
    alert(`User with ID ${id} deleted.`);
  };

  return (
    <div className="p-8 bg-gray-100 dark:bg-gray-900 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Admin Panel</h1>
      <UserTable users={users} sendNotification={sendNotification} deleteUser={deleteUser} />
    </div>
  );
};

export default AdminPage;
