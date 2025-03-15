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
    <div className="fixed inset-0 z-[10000] flex items-center justify-center bg-black bg-opacity-50">
      {/* Modal Dialog */}
      <div
        className={classNames(
          "relative rounded-lg shadow-lg w-full mx-4",
          sizeClasses[size],
          variantClasses[theme]
        )}
      >
        {/* Modal Header */}
        <div className="flex justify-between items-center p-4">
          <h2 className="text-xl font-semibold font-heading">{title}</h2>
          <button
            onClick={onClose}
            className={classNames(
              "p-2 rounded-full",
              theme === "dark" ? "bg-background bg-opacity-30" : "border"
            )}
          >
            <CloseIcon />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-4 pt-0 max-h-[80vh] overflow-y-auto">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
