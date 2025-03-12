import { SearchIcon } from "@/assets/icons";
import AddIcon from "@/assets/icons/add-icon";
import Arrows from "@/assets/icons/arrow-up-down";
import FilterIcon from "@/assets/icons/filter-icon";
import AddParishModal from "@/modals/AddParishModal";
import React, { useState } from "react";

export default function Parish() {
  const [isOpen, SetIsOpen] = useState(false);
  const [isModalOpen, SetIsModalOpen] = useState(false);
  const handleUser = () => {
    SetIsOpen(!isOpen);
  };
  const handleModal = () => {
    SetIsModalOpen(true);
  };
  return (
    <div>
      <h1>Parish</h1>
      <p>620 parishes found</p>
      <div className=" flex justify-between items-center my-3">
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
        <div
          className="flex justify-center gap-1 items-center bg-slate-600 rounded py-1 px-2 cursor-pointer"
          onClick={handleModal}
        >
          <AddIcon />
          <p className="text-sm">Add a parish</p>
        </div>
      </div>
      <AddParishModal
        isModalOpen={isModalOpen}
        onClose={() => SetIsModalOpen(false)}
        // parish
      />

      <div className={`${isOpen ? "block" : "hidden"}`}>
        <div className="flex items-center gap-3 my-4 text-sm">
          <p className="mx-3">Filter</p>
          <p className="bg-slate-700 rounded-xl py-1 px-2">PROVINCE</p>
          <p className="bg-slate-700 rounded-xl py-1 px-2">STANDALONE</p>
          <p className="bg-slate-700 rounded-xl py-1 px-2">ZONAL HQ</p>
          <p className="bg-slate-700 rounded-xl py-1 px-2">AREA HQ</p>
          <p className="bg-slate-700 rounded-xl py-1 px-2">PARISH</p>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-1 bg-slate-800 py-1 px-2 rounded-lg">
        <div className="flex justify-around items-center">
          <p>Parish name</p>
          <Arrows />
        </div>
        <div className="flex justify-around items-center">
          <p>Level</p>
          <Arrows />
        </div>
        <div className="flex justify-around items-center">
          <p>Address</p>
        </div>
        <div className="flex justify-around items-center">
          <p>Pastor</p>
          <Arrows />
        </div>
      </div>
    </div>
  );
}
