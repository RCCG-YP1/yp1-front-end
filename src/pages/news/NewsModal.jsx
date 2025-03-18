import Modal from "@/components/modal";
import React from "react";

export default function NewsModal({ newItem, isModalOpen, setIsModalOpen }) {
  if (!newItem) return null;
  return (
    <Modal
      isOpen={isModalOpen}
      onClose={() => setIsModalOpen(false)}
      title=""
      theme="dark"
      size="2xl"
    >
      <h2 className="text-xl font-bold mt-4">{newItem.title}</h2>
      <img src={newItem.image} alt="" className="my-4" />
      <p className="mt-2">{newItem.body}</p>
    </Modal>
  );
}
