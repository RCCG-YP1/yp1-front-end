import { useEffect } from "react";
import classNames from "classnames";
import CloseIcon from "@/assets/icons/close-icon";

const Modal = ({
  isOpen,
  onClose,
  title,
  children,
  size = "md", // (sm, md, lg, xl),
  theme = "dark",
}) => {
  useEffect(() => {
    // Prevent background scrolling when modal is open
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const sizeClasses = {
    sm: "max-w-sm",
    md: "max-w-md",
    lg: "max-w-lg",
    xl: "max-w-2xl",
    "2xl": "max-w-4xl",
  };

  const variantClasses = {
    dark: "text-textSecondary bg-input-bg border border-input-bg",
    light: "bg-white",
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      {/* Modal Dialog */}
      <div
        className={classNames(
          "relative bg-input-bg rounded-lg max-h-screen overflow-y-auto shadow-lg w-[700px] mx-4"
          // sizeClasses[size]
        )}
      >
        {/* Modal Header */}
        <div className="flex justify-between items-center p-4">
          <h2 className="text-xl font-semibold font-heading">{title}</h2>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-background bg-opacity-30"
          >
            <CloseIcon />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-4 pt-0 bg-white">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
