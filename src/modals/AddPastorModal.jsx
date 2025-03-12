import Modal from "@/components/modal";
import React from "react";

export default function AddPastorModal() {
  return (
    <Modal>
      <h1>Add new Parish</h1>
      <div>
        <h3>DETAILS</h3>
        <form action="">
          <div>
            <label className="block text-sm font-medium">Name</label>
            <input
              type="text"
              className="w-full border rounded-lg p-2 mt-1"
              placeholder="Name"
            />
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium">Zone</label>
              <select className="w-full border rounded-lg p-2 mt-1">
                <option>Select</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium">Area</label>
              <select className="w-full border rounded-lg p-2 mt-1">
                <option>Select</option>
              </select>
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium">Church Address</label>
            <input
              type="text"
              className="w-full border rounded-lg p-2 mt-1"
              placeholder="Address"
            />
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium">State</label>
              <select className="w-full border rounded-lg p-2 mt-1">
                <option>Select</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium">City</label>
              <select className="w-full border rounded-lg p-2 mt-1">
                <option>Select</option>
              </select>
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium">Map Link</label>
            <input
              type="text"
              className="w-full border rounded-lg p-2 mt-1"
              placeholder="https://maps.app.goo.gl/"
            />
          </div>
          <h3 className="text-lg font-semibold mt-6 mb-2">Leadership</h3>
          <div className="grid grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium">
                Pastor-in-Charge
              </label>
              <input
                type="text"
                className="w-full border rounded-lg p-2 mt-1"
                placeholder="Name"
              />
              <button className="mt-2 text-green-600 flex items-center">
                📤 Upload photo
              </button>
            </div>
            <div>
              <label className="block text-sm font-medium">
                Assistant Pastor-in-Charge
              </label>
              <input
                type="text"
                className="w-full border rounded-lg p-2 mt-1"
                placeholder="Name"
              />
              <button className="mt-2 text-green-600 flex items-center">
                📤 Upload photo
              </button>
            </div>
            <div>
              <label className="block text-sm font-medium">Associate</label>
              <input
                type="text"
                className="w-full border rounded-lg p-2 mt-1"
                placeholder="Name"
              />
              <button className="mt-2 text-green-600 flex items-center">
                📤 Upload photo
              </button>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mt-6 mb-2">Social Media</h3>
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
          <div className="mt-4">
            <label className="block text-sm font-medium">Website</label>
            <input
              type="text"
              className="w-full border rounded-lg p-2 mt-1"
              placeholder="https://www.website.com"
            />
          </div>
          <div className="flex justify-between mt-6">
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
