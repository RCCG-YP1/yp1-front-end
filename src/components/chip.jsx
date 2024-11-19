import CloseIcon from "@/assets/icons/close-icon";
import classNames from "classnames";

const Chip = ({
	label,
	onClick,
	onDelete,
	color = "default", // default, primary, secondary, success, etc.
	size = "md", // sm, md, lg
	variant = "filled", // filled, outlined
}) => {
	const baseClasses = "inline-flex items-center font-medium rounded-full";

	const colorClasses = {
		default: "bg-input-bg text-textSecondary",
		primary: "bg-primary text-white",
		secondary: "bg-secondary text-white",
		success: "bg-green-500 text-white",
		warning: "bg-yellow-500 text-white",
		error: "bg-red-500 text-white",
		white: "bg-white text-textSecondary border border-gray-300",
	};

	const outlinedColorClasses = {
		default: "border border-gray-300 text-textSecondary",
		primary: "border border-primary text-primary",
		secondary: "border border-secondary text-secondary",
		success: "border border-green-500 text-green-500",
		warning: "border border-yellow-500 text-yellow-500",
		error: "border border-red-500 text-red-500",
		white: "border border-gray-300 text-textSecondary",
	};

	const sizeClasses = {
		sm: "text-xs px-3 py-1",
		md: "text-sm px-4 py-2",
		lg: "text-base px-5 py-2.5",
	};

	const variantClasses =
		variant === "outlined" ? outlinedColorClasses[color] : colorClasses[color];

	return (
		<div
			onClick={onClick}
			className={classNames(
				baseClasses,
				sizeClasses[size],
				variantClasses,
				onClick && "cursor-pointer hover:opacity-80"
			)}
		>
			<span>{label}</span>
			{onDelete && (
				<button
					type="button"
					onClick={e => {
						e.stopPropagation(); // Prevents triggering `onClick` when `onDelete` is clicked
						onDelete();
					}}
					className="ml-2 text-current hover:text-opacity-70"
				>
					<CloseIcon color="white" />
				</button>
			)}
		</div>
	);
};

export default Chip;
