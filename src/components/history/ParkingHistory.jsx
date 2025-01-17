import React from "react";

const ParkingHistory = ({ userId }) => {
  // Mock data for parking history
  const parkingData = [
    { id: 1, date: "2025-01-16", location: "Main Street", duration: "3 hours" },
    { id: 2, date: "2025-01-15", location: "Downtown", duration: "2 hours" },
    // Add more data as needed
  ];

  return (
    <div>
        
      <h2 className="text-3xl font-bold">Parking History</h2>
      <ul>
        {parkingData.map((item) => (
          <li key={item.id} className="mt-2">
            <p>Date: {item.date}</p>
            <p>Location: {item.location}</p>
            <p>Duration: {item.duration}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ParkingHistory;
