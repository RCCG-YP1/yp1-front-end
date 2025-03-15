import { SearchIcon } from "@/assets/icons";
import AddIcon from "@/assets/icons/add-icon";
import Arrows from "@/assets/icons/arrow-up-down";
import FilterIcon from "@/assets/icons/filter-icon";

import InformationModal from "@/modals/InformationModal";
import React, { useState } from "react";

export default function Information() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const handleUser = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  return (
    <div>
      <h1>Members</h1>
      <p>14000 Members Registered</p>
      <div className=" flex gap-4 items-center my-3">
        <div className="flex justify-center gap-1 items-center border rounded bg-white w-60">
          <SearchIcon className=" text-black" />
          <input type="text" placeholder="Search" />
        </div>
        <div
          className="flex justify-center gap-1 items-center cursor-pointer bg-slate-700 px-2 py-1 rounded"
          onClick={handleUser}
        >
          <p>Filter</p>
          <FilterIcon />
        </div>
      </div>

      <div className={`${isFilterOpen ? "block" : "hidden"}`}>
        <div className="flex items-center gap-3 my-4 text-sm">
          <p className="mx-3">Filter</p>
          <p className="bg-slate-700 rounded-xl py-1 px-2">PICP</p>
          <p className="bg-slate-700 rounded-xl py-1 px-2">APICP</p>
          <p className="bg-slate-700 rounded-xl py-1 px-2">ZONE</p>
          <p className="bg-slate-700 rounded-xl py-1 px-2">AREA</p>
          <p className="bg-slate-700 rounded-xl py-1 px-2">PARISH</p>
          <p className="bg-slate-700 rounded-xl py-1 px-2">ASSISTANT</p>
          <p className="bg-slate-700 rounded-xl py-1 px-2">ASSOCIATE</p>
        </div>
      </div>
      <div className="grid grid-cols-5 gap-1 bg-slate-800 py-1 px-2 rounded-lg">
        <div className="flex justify-around items-center">
          <p>Name</p>
          <Arrows />
        </div>
        <div className="flex justify-between items-center">
          <p>Parish</p>
          <Arrows />
        </div>
        <div className="flex justify-around items-center">
          <p>Status</p>
          <Arrows />
        </div>
        <div className="flex justify-between items-center">
          <p>Phone Number</p>
          <Arrows />
        </div>
        <div className="flex justify-between items-center">
          <p>Birthday</p>
          <Arrows />
        </div>
      </div>
    </div>
  );
}
