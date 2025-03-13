import Modal from "../components/modal";
import React from "react";

export default function InformationModal({ isOpen, onClose }) {
  if (!isOpen) return null;
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="lg" title="Add Update">
      <div>
        <form className="text-sm mx-10">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Subject
            </label>
            <input
              type="text"
              placeholder="Post title"
              className="w-full bg-gray-100 rounded-md p-2 mb-3 focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>
          <div className=" overflow-hidden">
            {/* Toolbar */}
            <div className="flex items-center shadow-md  p-2 space-x-2 border-b my-2">
              <button className="p-1 text-gray-600 hover:text-black">↺</button>
              <button className="p-1 text-gray-600 hover:text-black font-bold">
                B
              </button>
              <button className="p-1 text-gray-600 hover:text-black italic">
                I
              </button>
              <button className="p-1 text-gray-600 hover:text-black underline">
                U
              </button>
              <button className="p-1 text-gray-600 hover:text-black">🔗</button>
              <button className="p-1 text-gray-600 hover:text-black">🔍</button>
            </div>
            {/* Text Area */}
            <div className=" rounded-md">
              <textarea
                placeholder="Message body..."
                className="w-full p-2 h-40 focus:outline-none bg-gray-100"
              ></textarea>
            </div>
          </div>
          <div className="flex gap-8 mt-1">
            <button className="bg-black text-white px-6 py-2 rounded-lg">
              Cancel
            </button>
            <button className="bg-cyan-800 text-white px-6 py-2 rounded-lg flex items-center">
              Send Post
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
}
