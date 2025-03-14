import { get, useFormContext } from "react-hook-form";
import Input from "./input";

const ControlledInput = ({
	name,
	rules,
	showError = true,
	errMsg,
	required = true,
	isAmount = false, // Default to false
	...props
}) => {
	const {
		register,
		setValue,
		formState: { errors },
	} = useFormContext();
	const error = get(errors, name);

	const formatToLocaleString = value => {
		if (value === "" || value == null) return ""; // Handle empty values
		const numberValue =
			typeof value === "string" ? parseFloat(value.replace(/,/g, "")) : value;
		if (isNaN(numberValue)) return ""; // Return empty string for invalid numbers
		return numberValue.toLocaleString(undefined, {
			minimumFractionDigits: 0,
			maximumFractionDigits: 2,
		});
	};

	const handleOnChange = e => {
		const rawValue = e.target.value;
		if (isAmount) {
			// Remove formatting and parse value as a number
			const numericValue = parseFloat(rawValue.replace(/,/g, ""));
			if (!isNaN(numericValue)) {
				// Store the raw numeric value
				setValue(name, numericValue, {
					shouldValidate: true,
				});
				// Update the displayed value with formatting
				e.target.value = formatToLocaleString(numericValue);
			} else {
				e.target.value = "";
			}
		}
	};

	return (
		<div className={"flex-grow"}>
			<Input
				{...register(name, {
					required: required ? "This field is required" : false,
					...rules,
					onChange: handleOnChange,
				})}
				{...props}
				type={props.type}
				suffix={props.suffix}
			/>
			{error && showError && (
				<div className={"text-[#f50505] text-sm text-left w-full mt-2"}>
					{error.message || errMsg}
				</div>
			)}
		</div>
	);
};

export default ControlledInput;
