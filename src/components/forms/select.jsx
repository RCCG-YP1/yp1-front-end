import classNames from "classnames";

// eslint-disable-next-line react-refresh/only-export-components
export const formVariantClasses = {
	dark: "text-textSecondary bg-input-bg border border-input-bg",
	light: "text-[#4F4F4F] bg-[#F6F6F6]",
	outlinedLight: "border-[#F6F6F6] border text-[#4F4F4F]",
};

const Select = ({
	label,
	id,
	options = [],
	className = "",
	inputClass = "",
	theme = "dark",
	placeholder,
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
			<select
				id={id}
				className={classNames(
					"block sm:text-sm w-full px-4 py-2 rounded-md focus:outline-none focus:border-secondary h-[42px]",
					formVariantClasses[theme],
					inputClass
				)}
				{...props}
			>
				{placeholder && (
					<option value={null} selected disabled>
						{placeholder}
					</option>
				)}
				{options.map((option, index) => (
					<option key={index} value={option.value}>
						{option.label}
					</option>
				))}
			</select>
		</div>
	);
};

export default Select;
