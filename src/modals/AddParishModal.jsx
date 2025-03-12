import React from "react";
import Modal from "../components/modal";

export default function AddParishModal({ isModalOpen, onClose }) {
  return (
    <Modal
      isModalOpen={isModalOpen}
      onClose={onClose}
      title="ADD PARISH"
      size="xl"
    ></Modal>
  );
}
