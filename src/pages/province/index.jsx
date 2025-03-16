import React, { useState } from "react";
import { SearchIcon } from "@/assets/icons";
const pastorsData = {
  provincialLeadership: [
    {
      id: 1,
      name: "Pastor John Doe",
      role: "Provincial Overseer",
      location: "New York Province",
      image: "public/images/pst_leke.jpeg",
    },
    {
      id: 2,
      name: "Pastor James Smith",
      role: "Assitant Overseer",
      location: "New York Province",
      image: "public/images/pst_white.jpeg",
    },
    {
      id: 3,
      name: "Pastor Andrew Clark",
      role: "Executive Secretary",
      location: "New York Province",
      image: "public/images/pst_white.jpeg",
    },
  ],

  ZonalPastors: [
    { id: 4, name: "Pastor Charles Johnson", zone: "Zone A" },
    { id: 5, name: "Pastor David Brown", zone: "Zone B" },
    { id: 6, name: "Pastor Michael Davis", zone: "Zone C" },
    { id: 7, name: "Pastor George Brown", zone: "Zone D" },
    { id: 8, name: " Pastor William Davis", zone: "Zone E" },
  ],

  areaPastors: [
    { id: 9, name: "Pastor Samuel Roberts", area: "Area 1" },
    { id: 10, name: "Pastor Matthew Lewis", area: "Area 2" },
    { id: 11, name: "Pastor Steven Walker", area: "Area 3" },
    { id: 12, name: "Pastor Joseph Hall", area: "Area 4" },
  ],
};

export default function Province() {
  const [activeTab, setActiveTab] = useState("leadership");
  const [activeButton, setActiveButton] = useState("zone");
  const { provincialLeadership, ZonalPastors, areaPastors } = pastorsData;
  return (
    <div>
      <div>
        <div className="text-right mt-16 space-x-6">
          <button
            onClick={() => setActiveTab("leadership")}
            className={`px-4 py-2 rounded-full text-sm ${
              activeTab === "leadership"
                ? "bg-blue-600 text-white"
                : "text-gray-300"
            }`}
          >
            LEADERSHIP
          </button>
          <button
            onClick={() => setActiveTab("parishes")}
            className={`px-4 py-2 rounded-full text-sm ${
              activeTab === "parishes"
                ? "bg-blue-600 text-white"
                : "text-gray-300"
            }`}
          >
            PARISHES
          </button>
        </div>

        <div className="flex justify-center gap-8 items-center rounded bg-gray-600 mt-8 pl-6">
          <SearchIcon className=" text-slate-400" />
          <input
            type="text"
            placeholder="Search"
            className="w-full bg-transparent rounded-lg p-2 outline-none"
          />
        </div>
      </div>

      <div className="space-y-7">
        {activeTab === "leadership" && (
          <div>
            <div className="mt-7">
              <h2 className="text-2xl font-bold mb-4">Provincial Leadership</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {provincialLeadership.map((pastor) => (
                  <div
                    key={pastor.id}
                    className=" rounded-lg relative shadow-md "
                  >
                    <img
                      src={pastor.image}
                      alt={pastor.name}
                      className="w-full h-full relative object-cover rounded-lg"
                    />
                    <div className="absolute top-52 left-0 text-green-400">
                      <h3 className="text-lg font-semibold mt-2">
                        {pastor.name}
                      </h3>
                      <p className="text-sm">{pastor.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold mt-6 mb-4">Zonal Pastors</h2>
              <ul>
                {ZonalPastors.map((pastor) => (
                  <li key={pastor.id} className="py-2 ">
                    <div>{pastor.name}</div>
                    <div className="text-green-400">{pastor.zone}</div>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold mt-6 mb-4">Area Pastors</h2>
              <ul>
                {areaPastors.map((pastor) => (
                  <li key={pastor.id} className="py-2 ">
                    <div>{pastor.name}</div>{" "}
                    <div className="text-green-400">{pastor.area}</div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
        {activeTab === "parishes" && (
          <div>
            <div>
              <div className="flex items-center  gap-10 my-4 text-sm">
                <p
                  onClick={() => setActiveButton("zone")}
                  className={`px-2 py-1 rounded-full text-sm cursor-pointer ${
                    activeButton === "zone"
                      ? "bg-blue-600 text-white"
                      : "text-gray-300"
                  }`}
                >
                  ZONES
                </p>
                <p
                  onClick={() => setActiveButton("area")}
                  className={`px-2 py-1 rounded-full text-sm cursor-pointer ${
                    activeButton === "area"
                      ? "bg-blue-600 text-white"
                      : "text-gray-300"
                  }`}
                >
                  AREAS
                </p>
                <p
                  onClick={() => setActiveButton("parish")}
                  className={`px-2 py-1 rounded-full text-sm cursor-pointer ${
                    activeButton === "parish"
                      ? "bg-blue-600 text-white"
                      : "text-gray-300"
                  }`}
                >
                  PARISHES
                </p>
                <p
                  onClick={() => setActiveButton("standalone")}
                  className={`px-2 py-1 rounded-full text-sm cursor-pointer ${
                    activeButton === "standalone"
                      ? "bg-blue-600 text-white"
                      : "text-gray-300"
                  }`}
                >
                  STANDALONES
                </p>
              </div>
            </div>
            <div className="mt-7">
              <h2>Zone 1</h2>
            </div>
            <div>
              <h2>Area</h2>
            </div>
            <div>
              <h2>parish</h2>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
