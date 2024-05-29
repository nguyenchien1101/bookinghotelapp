// Map.js

import React, { useState, useEffect } from "react";

const Map = ({ address }: { address: string }) => {
  const [coordinates, setCoordinates] = useState(null);

  useEffect(() => {
    async function fetchCoordinates() {
      try {
        const response = await fetch(
          `/api/geocode?address=${encodeURIComponent(address)}`
        );
        const data = await response.json();
        setCoordinates(data);
      } catch (error) {
        console.error("Error fetching coordinates:", error);
      }
    }

    if (address) {
      fetchCoordinates();
    }
  }, [address]);

  return (
    <div style={{ width: "100%", height: "300px" }}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15743722.79496086!2d95.23367880582101!3d15.555151669615718!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31157a4d736a1e5f%3A0xb03bb0c9e2fe62be!2zVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1716913824843!5m2!1svi!2s"
        width="600"
        height="250"
        style={{ border: 0 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Map;
