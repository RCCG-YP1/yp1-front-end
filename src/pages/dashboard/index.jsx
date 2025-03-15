import React from "react";

export default function Dashboard() {
  return (
    <div>
      <h1 className="text-white">Welcome Admin</h1>
      <p>Here is a breakdown of the provincial statistics</p>
      <div className="grid grid-cols-3 gap-4 my-5">
        <div className="bg-slate-600 flex flex-col text-left justify-center pl-6 rounded-lg w-52 h-28">
          <h3>Total parishes</h3>
          <p>620</p>
        </div>
        <div className="bg-slate-600 flex flex-col text-left justify-center pl-6 rounded-lg w-52 h-28">
          <h3>Areas</h3>
          <p>102</p>
        </div>
        <div className="bg-slate-600 flex flex-col text-left justify-center pl-6 rounded-lg w-52 h-28">
          <h3>Zones</h3>
          <p>42</p>
        </div>
        <div className="bg-slate-600 flex flex-col text-left justify-center pl-6 rounded-lg w-52 h-28">
          <h3>Pastors</h3>
          <p>1500</p>
        </div>
        <div className="bg-slate-600 flex flex-col text-left justify-center pl-6 rounded-lg w-52 h-28">
          <h3>Total members</h3>
          <p>160000</p>
        </div>
      </div>
    </div>
  );
}
