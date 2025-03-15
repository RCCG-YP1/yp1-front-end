import React, { useState } from "react";
import { SearchIcon } from "@/assets/icons";

export default function Province() {
  const [activeTab, setActiveTab] = useState("leadership");
  const [activeButton, setActiveButton] = useState("zone");
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
              <h2>Provincial Leadership</h2>
            </div>
            <div>
              <h2>Zonal Pastors</h2>
            </div>
            <div>
              <h2>Area Pastors</h2>
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
