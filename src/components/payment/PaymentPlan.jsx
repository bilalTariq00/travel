import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const PaymentPlans = () => {
  const navigate = useNavigate();

  // Handle subscription selection and navigate to BookNow with selected deal
  const handleSubscribe = (hours, pricePerHour) => {
    navigate("/booknow", { state: { hours, pricePerHour } });
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 dark:text-white flex flex-col items-center p-6" id="payment-plans">
      {/* Header */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-5xl font-extrabold mb-4 dark:text-white"
      >
        Choose Your Plan
      </motion.h1>

      {/* Plans Container */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
        {/* Hourly Plan */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.4 }}
          className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6"
        >
          <h2 className="text-xl font-bold text-teal-600 dark:text-teal-400 mb-4">
            Hourly Plan
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Pay <strong>$10/hour</strong> as you go.
          </p>
          <button
            onClick={() => handleSubscribe(1, 10)}
            className="px-6 py-2 bg-teal-500 text-white rounded-full hover:bg-teal-600"
          >
            Subscribe
          </button>
        </motion.div>

        {/* Monthly Plan */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6"
        >
          <h2 className="text-xl font-bold text-teal-600 dark:text-teal-400 mb-4">
            Monthly Plan
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Pay <strong>$8/hour</strong> for 40 hours a month. Save 20%!
          </p>
          <button
            onClick={() => handleSubscribe(40, 8)}
            className="px-6 py-2 bg-teal-500 text-white rounded-full hover:bg-teal-600"
          >
            Subscribe
          </button>
        </motion.div>

        {/* Yearly Plan */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6"
        >
          <h2 className="text-xl font-bold text-teal-600 dark:text-teal-400 mb-4">
            Yearly Plan
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Pay <strong>$7/hour</strong> for 400 hours a year. Save 30%!
          </p>
          <button
            onClick={() => handleSubscribe(400, 7)}
            className="px-6 py-2 bg-teal-500 text-white rounded-full hover:bg-teal-600"
          >
            Subscribe
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export { PaymentPlans};
