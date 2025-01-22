import { get, useFormContext } from "react-hook-form";
import Select from "./select";

const ControlledSelect = ({
	name,
	rules,
	showError = true,
	errMsg,
	required = true,
	...props
}) => {
	const {
		register,
		formState: { errors },
	} = useFormContext();
	const error = get(errors, name);

	return (
		<div className={"flex-grow"}>
			<Select
				{...register(name, {
					required: required ? "This field is required" : false,
					...rules,
				})}
				{...props}
			/>
			{error && showError && (
				<div className={"text-[#f50505] text-sm text-left w-full mt-2"}>
					{error.message || errMsg}
				</div>
			)}
		</div>
	);
};

export default ControlledSelect;
