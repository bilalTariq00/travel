import React from "react";

const PaymentHistory = ({ userId }) => {
  // Mock data for payment history
  const paymentData = [
    { id: 1, date: "2025-01-16", amount: "$30", method: "Credit Card" },
    { id: 2, date: "2025-01-15", amount: "$20", method: "PayPal" },
    // Add more data as needed
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold">Payment History</h2>
      <ul>
        {paymentData.map((item) => (
          <li key={item.id} className="mt-2">
            <p>Date: {item.date}</p>
            <p>Amount: {item.amount}</p>
            <p>Method: {item.method}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PaymentHistory;
