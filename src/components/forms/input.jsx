import classNames from "classnames";
import { formVariantClasses } from "./select";
import { forwardRef } from "react";

const Input = forwardRef(
	(
		{
			label,
			id,
			type = "text",
			className = "",
			inputClass = "",
			theme = "dark",
			prefix,
			suffix,
			...props
		},
		ref
	) => {
		return (
			<div className={classNames("yp-1-input", className)}>
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
						ref={ref}
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
	}
);

Input.displayName = "Input";

export default Input;
