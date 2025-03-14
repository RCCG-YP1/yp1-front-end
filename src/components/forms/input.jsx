import classNames from "classnames";
import { formVariantClasses } from "./select";

const Input = ({
  label,
  id,
  type = "text",
  className = "",
  inputClass = "",
  theme = "dark",
  prefix,
  suffix,
  ...props
}) => {
  return (
    <div className={classNames("", className)}>
      {label && (
        <label
          htmlFor={id}
          className="block text-sm font-medium text-inherit mb-1 px-2"
        >
          {label}
        </label>
      )}

      <div
        className={classNames(
          "flex items-center px-4 py-2 w-full sm:text-sm rounded-md focus-within::border-secondary h-[42px]",
          formVariantClasses[theme]
        )}
      >
        {prefix}
        <input
          id={id}
          className={classNames(
            "bg-transparent w-full h-full focus:outline-none",
            inputClass
          )}
          type={type}
          {...props}
        />
        {suffix}
      </div>
    </div>
  );
};

export default Input;
