import Modal from "../components/modal";
import React from "react";

export default function AddPastorModal({ isOpen, onClose }) {
  if (!isOpen) return null;
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="lg" title="Add Pastor">
      <div>
        <h3 className="text-black">DETAILS</h3>
        <form className="text-sm ">
          <div>
            <label className="block text-sm font-medium text-black">
              Pastor's Name
            </label>
            <input
              type="text"
              className="w-full border rounded-lg p-2 mt-0"
              placeholder="Name"
            />
            <button className="mt-2 text-green-600 flex items-center">
              📤 Upload photo
            </button>
          </div>
          <div className="grid grid-cols-2 gap-4 mb-0">
            <div className="text-black">
              <label className="block text-sm font-medium">Church</label>
              <select className="w-full border rounded-lg p-2 mt-0">
                <option>Select</option>
              </select>
            </div>
            <div className="text-black">
              <label className="block text-sm font-medium">Level</label>
              <select className="w-full border rounded-lg p-2 mt-0">
                <option>Select</option>
              </select>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mt-1 mb-0">Social Media</h3>
            <div className="grid grid-cols-3 gap-4">
              {[
                { name: "YouTube", url: "https://youtube.com/" },
                { name: "Instagram", url: "https://instagram.com/" },
                { name: "Twitter", url: "https://twitter.com/" },
                { name: "Facebook", url: "https://facebook.com/" },
                { name: "Spotify", url: "https://spotify.com/" },
                { name: "TikTok", url: "https://tiktok.com/" },
              ].map((social, index) => (
                <div key={index}>
                  <label className="block text-sm font-medium">
                    {social.name}
                  </label>
                  <input
                    type="text"
                    className="w-full border rounded-lg p-2 mt-1"
                    placeholder={social.url}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="flex gap-8 mt-1">
            <button className="bg-black text-white px-6 py-2 rounded-lg">
              Cancel
            </button>
            <button className="bg-cyan-800 text-white px-6 py-2 rounded-lg flex items-center">
              Save
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
}
