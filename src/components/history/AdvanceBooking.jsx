import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Box } from "@react-three/drei";

const AdvanceBooking = ({ userId }) => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleBooking = () => {
    // Implement booking logic (e.g., API call or form submission)
    console.log(`Booking on ${date} at ${time}`);
  };

  return (
    <div className="flex items-center">
      <div className="w-1/2">
        <h2 className="text-3xl font-bold">Advance Booking</h2>
        <form className="mt-4">
          <label>
            Date:
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="ml-2 p-2 border rounded"
            />
          </label>
          <br />
          <label>
            Time:
            <input
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="ml-2 p-2 border rounded"
            />
          </label>
          <br />
          <button
            type="button"
            onClick={handleBooking}
            className="mt-4 px-6 py-2 bg-teal-500 text-white rounded-full hover:bg-teal-600"
          >
            Book Now
          </button>
        </form>
      </div>
      <div className="w-1/2">
        <Canvas>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <Box args={[1, 1, 1]} position={[0, 0, 0]} castShadow receiveShadow>
            <meshStandardMaterial color="blue" />
          </Box>
          <OrbitControls />
        </Canvas>
      </div>
    </div>
  );
};

export default AdvanceBooking;
