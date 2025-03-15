import Modal from "../components/modal";
import React from "react";

export default function AddPastorModal({ isOpen, onClose }) {
  if (!isOpen) return null;
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="lg" title="Add new Parish">
      <div>
        <h3 className="text-black">DETAILS</h3>
        <form className="text-sm ">
          <div>
            <label className="block text-sm font-medium">Name</label>
            <input
              type="text"
              className="w-full border rounded-lg p-2 mt-0"
              placeholder="Name"
            />
          </div>
          <div className="grid grid-cols-2 gap-4 mb-0">
            <div className="text-black">
              <label className="block text-sm font-medium">Zone</label>
              <select className="w-full border rounded-lg p-2 mt-0">
                <option>Select</option>
              </select>
            </div>
            <div className="text-black">
              <label className="block text-sm font-medium">Area</label>
              <select className="w-full border rounded-lg p-2 mt-0">
                <option>Select</option>
              </select>
            </div>
          </div>
          <div className="mb-0">
            <label className="block text-sm font-medium text-black">
              Church Address
            </label>
            <input
              type="text"
              className="w-full border rounded-lg p-2 mt-0"
              placeholder="Address"
            />
          </div>
          <div className="grid grid-cols-2 gap-4 mb-0 text-black">
            <div>
              <label className="block text-sm font-medium">State</label>
              <select className="w-full border rounded-lg p-2 mt-0">
                <option>Select</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium">City</label>
              <select className="w-full border rounded-lg p-2 mt-0">
                <option>Select</option>
              </select>
            </div>
          </div>
          <div className="mb-1 text-black">
            <label className="block text-sm font-medium">Map Link</label>
            <input
              type="text"
              className="w-full border rounded-lg p-2 mt-0"
              placeholder="https://maps.app.goo.gl/"
            />
          </div>
          <h3 className="text-lg font-semibold mt-1 mb-0">Leadership</h3>
          <div className="grid grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-medium text-black">
                Pastor-in-Charge
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
            <div>
              <label className="block text-xs font-medium text-black">
                Assistant Pastor-in-Charge
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
            <div>
              <label className="block text-xs font-medium text-black">
                Associate
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
          </div>
          <div>
            <h3 className="text-lg font-semibold mt-1 mb-0 text-black">
              Social Media
            </h3>
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
                  <label className="block text-sm font-medium text-black">
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
          <div className="mt-0">
            <label className="block text-sm font-medium">Website</label>
            <input
              type="text"
              className="w-full border rounded-lg p-2 mt-1"
              placeholder="https://www.website.com"
            />
          </div>
          <div className="flex gap-8 mt-1">
            <button className="bg-black text-white px-6 py-2 rounded-lg">
              Cancel
            </button>
            <button className="bg-green-600 text-white px-6 py-2 rounded-lg flex items-center">
              ✅ Save Parish
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
}
