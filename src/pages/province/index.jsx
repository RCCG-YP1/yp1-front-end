import React, { useState } from "react";
import { SearchIcon } from "@/assets/icons";

export default function Province() {
  const [activeTab, setActiveTab] = useState("leadership");
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
                <p className="bg-slate-700 rounded-xl py-1 px-2">ZONES</p>
                <p className="bg-slate-700 rounded-xl py-1 px-2">AREAS</p>
                <p className="bg-slate-700 rounded-xl py-1 px-2">PARISHES</p>
                <p className="bg-slate-700 rounded-xl py-1 px-2">STANDALONES</p>
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
