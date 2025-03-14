import RedoIcon from "@/assets/icons/redo-icon";
import Modal from "../components/modal";
import React from "react";
import UndoIcon from "@/assets/icons/undo-icon";
import TextSizeIcon from "@/assets/icons/textSize-icon";
import BoldIcon from "@/assets/icons/bold-icon";
import ItalicIcon from "@/assets/icons/italic-icon";
import UnderlineIcon from "@/assets/icons/underline-icon";
import StrikethroughIcon from "@/assets/icons/strikethrough-icon";
import AlignleftIcon from "@/assets/icons/alignleft-icon";
import AligncenterIcon from "@/assets/icons/aligncenter-icon";
import AlignrightIcon from "@/assets/icons/alignright-icon";
import AlignjustifyIcon from "@/assets/icons/alignjustify-icon";
import NolistIcon from "@/assets/icons/nolist-icon";
import UlistIcon from "@/assets/icons/ulist-icon";
import OutdentIcon from "@/assets/icons/outdent-icon";
import IndentIcon from "@/assets/icons/indent-icon";
import QouteIcon from "@/assets/icons/qoute-icon";
import TextslashIcon from "@/assets/icons/textslash-icon";
import ParagraphIcon from "@/assets/icons/paragraph-icon";
import SmileIcon from "@/assets/icons/smile-icon";
import ChainIcon from "@/assets/icons/chain-icon";
import ImageIcon from "@/assets/icons/image-icon";
import SendIcon from "@/assets/icons/send-icon";

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
              <button className="p-1 text-gray-600 hover:text-black">
                <UndoIcon />
              </button>
              <button className="p-1 text-gray-600 hover:text-black font-bold">
                <RedoIcon />
              </button>
              <button className="p-1 text-gray-600 hover:text-black italic">
                <TextSizeIcon />
              </button>
              <button className="p-1 text-gray-600 hover:text-black underline">
                <BoldIcon />
              </button>
              <button className="p-1 text-gray-600 hover:text-black">
                <ItalicIcon />
              </button>
              <button className="p-1 text-gray-600 hover:text-black">
                <UnderlineIcon />
              </button>
              <button className="p-1 text-gray-600 hover:text-black">
                <StrikethroughIcon />
              </button>
              <button className="p-1 text-gray-600 hover:text-black">
                <AlignleftIcon />
              </button>
              <button className="p-1 text-gray-600 hover:text-black">
                <AligncenterIcon />
              </button>
              <button className="p-1 text-gray-600 hover:text-black">
                <AlignrightIcon />
              </button>
              <button className="p-1 text-gray-600 hover:text-black">
                <AlignjustifyIcon />
              </button>
              <button className="p-1 text-gray-600 hover:text-black">
                <NolistIcon />
              </button>
              <button className="p-1 text-gray-600 hover:text-black">
                <UlistIcon />
              </button>
              <button className="p-1 text-gray-600 hover:text-black">
                <OutdentIcon />
              </button>
              <button className="p-1 text-gray-600 hover:text-black">
                <IndentIcon />
              </button>
              <button className="p-1 text-gray-600 hover:text-black">
                <QouteIcon />
              </button>
              <button className="p-1 text-gray-600 hover:text-black">
                <TextslashIcon />
              </button>
              <button className="p-1 text-gray-600 hover:text-black">
                <ParagraphIcon />
              </button>
            </div>
            {/* Text Area */}
            <div className=" rounded-md">
              <textarea
                placeholder="Message body..."
                className="w-full p-2 h-40 focus:outline-none bg-gray-100"
              ></textarea>
            </div>
          </div>
          <div className="flex space-x-2 ">
            <button className="p-1 text-gray-600 hover:text-black">
              <ImageIcon />
            </button>
            <button className="p-1 text-gray-600 hover:text-black">
              <ChainIcon />
            </button>
            <button className="p-1 text-gray-600 hover:text-black">
              <SmileIcon />
            </button>
          </div>
          <div className="flex gap-8 mt-1">
            <button className="bg-black text-white px-6 py-2 rounded-lg">
              Cancel
            </button>
            <button className="bg-cyan-800 text-white px-5 py-2 rounded-lg flex gap-3 items-center">
              <SendIcon />
              Send Post
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
}
