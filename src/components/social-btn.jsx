import React from "react";

export default function SocialButton({ Label, icon, onClick, className = "" }) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 bg-gray-200 rounded-md flex justify-center items-center gap-2 text-black ${className}`}
    >
      {Label}
      {icon}
    </button>
  );
}
