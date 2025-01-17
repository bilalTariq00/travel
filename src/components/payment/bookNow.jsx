import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const BookNow = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { hours: initialHours = 0, pricePerHour = 10 } = location.state || {};
  const [hours, setHours] = useState(initialHours);
  const [isPaid, setIsPaid] = useState(false);
  const [slotNumber, setSlotNumber] = useState("");

  const discountPercentage = hours === 40 ? 20 : hours === 400 ? 30 : 0; 
  const totalPrice = hours * pricePerHour;
  const discountedPrice = totalPrice - (totalPrice * discountPercentage) / 100;

  const handlePayment = () => {
    if (hours > 0) {
      const generatedSlotNumber = Math.floor(Math.random() * 100) + 1;
      setSlotNumber(generatedSlotNumber);
      setIsPaid(true);
    } else {
      alert("Please select the number of hours!");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gray-100 dark:bg-gray-900 dark:text-white flex flex-col items-center justify-center p-6"
    >
      <motion.h1
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-3xl font-bold mb-4 text-teal-600 dark:text-teal-400"
      >
        Book Now
      </motion.h1>

      {!isPaid ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="w-full max-w-md"
        >
          <div className="mb-4">
            <label
              htmlFor="hours"
              className="block mb-2 text-lg font-semibold text-gray-700 dark:text-gray-300"
            >
              Select Hours:
            </label>
            <input
              type="number"
              id="hours"
              min="1"
              value={hours}
              onChange={(e) => setHours(Number(e.target.value))}
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-teal-500 dark:bg-gray-800 dark:text-white dark:border-gray-600"
            />
            <div className="mt-2 text-lg text-gray-700 dark:text-gray-300">
              Price: <strong>${(hours * pricePerHour).toFixed(2)}</strong>
            </div>
          </div>

          {hours > 0 && (
            <>
              {discountPercentage > 0 && (
                <div className="mb-4 text-lg font-semibold text-green-500 dark:text-green-400">
                  Discount: <strong>{discountPercentage}%</strong> off!
                </div>
              )}
              <div className="mb-4 text-lg font-semibold text-gray-700 dark:text-gray-300">
                Total Payment: <strong>${discountedPrice.toFixed(2)}</strong>{" "}
                (Original: ${totalPrice.toFixed(2)})
              </div>
            </>
          )}

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handlePayment}
            className="px-6 py-2 bg-teal-500 text-white rounded-full hover:bg-teal-600"
          >
            Pay
          </motion.button>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="w-full max-w-md"
        >
          <div className="p-6 bg-white dark:bg-gray-800 shadow-md rounded-md text-center">
            <h2 className="text-xl font-bold text-green-600 dark:text-green-400">
              Payment Successful!
            </h2>
            <p className="mt-2">
              Hours Booked: <span className="font-semibold">{hours}</span>
            </p>
            <p className="mt-2">
              Amount Paid:{" "}
              <span className="font-semibold">${discountedPrice.toFixed(2)}</span>
            </p>
            <p className="mt-2">
              Your Slot Number: <span className="font-semibold">#{slotNumber}</span>
            </p>
          </div>
                    {/* Map */}
                    <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="mt-6 w-full h-64 bg-gray-200 dark:bg-gray-700 rounded-md overflow-hidden shadow-lg"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345091563!2d144.9537352153164!3d-37.81627917975159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5775e8d9f9983c7!2sFederation+Square!5e0!3m2!1sen!2sau!4v1619572919506!5m2!1sen!2sau"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Map"
            ></iframe>
          </motion.div>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => navigate("/dashboard")}
            className="mt-6 px-6 py-2 bg-gray-700 text-white rounded-full hover:bg-gray-800 dark:bg-gray-600 dark:hover:bg-gray-500"
          >
            Go Back
          </motion.button>
        </motion.div>
      )}
    </motion.div>
  );
};

export default BookNow;
