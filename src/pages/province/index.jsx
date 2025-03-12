import { useState } from "react";
import ParishModal from "@/modals/ParishModal";

export default function Province() {
  const [isOpen, setIsOpen] = useState(false);

  // Sample parish data
  const sampleParish = {
    name: "RCCG Joseph Palace",
    imageUrl: "https://via.placeholder.com/600x200",
    level: "Provincial HQ",
    address: "30 Rafu Babatunde, Apple Junction, Amuwo Odofin, Lagos",
    leadership: [
      { name: "Pst. Oluwagbemileke Adeboye", role: "Pastor in charge" },
      { name: "Pst. Oluwagbemileke Adeboye", role: "Assistant Pastor" },
      { name: "Pst. Oluwagbemileke Adeboye", role: "Associate Pastor" },
    ],
  };

  return (
    <div>
      <h1>Province</h1>
      <div>
        <button onClick={() => setIsOpen(true)}>Open Modal</button>

        {/* Pass the parish data to ParishModal */}
        <ParishModal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          parish={sampleParish}
        />
      </div>
    </div>
  );
}
