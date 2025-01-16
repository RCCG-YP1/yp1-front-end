import classNames from "classnames";

const Button = ({
  children,
  variant = "contained", // "contained" | "outlined" | "text"
  color = "primary", // "primary" | "secondary" | "white"
  className,
  ...props
}) => {
  const baseStyles =
    "rounded-md text-sm font-medium px-4 py-2 focus:outline-none transition flex gap-2 flex gap-2 items-center justify-center min-h-[50px]";

  // styles for different variants and colors: more can be added
  const colorStyles = {
    primary: {
      contained: "bg-primary text-white hover:bg-primary-700",
      outline:
        "border border-primary text-blue-600 hover:bg-primary hover:bg-opacity-15",
      text: "text-primary hover:bg-primary hover:bg-opacity-15",
    },
    secondary: {
      contained: "bg-secondary text-white hover:bg-secondary-700",
      outlined:
        "border border-secondary text-secondary hover:bg-secondary hover:bg-opacity-15",
      text: "text-secondary hover:bg-secondary hover:bg-opacity-15",
    },
    white: {
      contained: "bg-white text-gray-800 hover:bg-gray-100",
      outlined:
        "border border-gray-300 text-white hover:bg-gray-50 hover:bg-opacity-15",
      text: "text-white hover:bg-white hover:bg-opacity-15",
    },
  };

  const variantStyles =
    colorStyles[color]?.[variant] || colorStyles.primary.solid;

  return (
    <button
      className={classNames(baseStyles, variantStyles, className)}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
