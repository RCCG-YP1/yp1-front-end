import { forwardRef } from "react";
import classNames from "classnames";

const formVariantClasses = {
	dark: "text-textSecondary bg-input-bg border border-input-bg",
	light: "text-white bg-primary",
	outlinedLight: "border-[#F6F6F6] border text-[#4F4F4F]",
};

const FileInput = forwardRef(
	(
		{
			label,
			className = "",
			theme = "dark",
			accept = "image/*",
			required = false,
			btnTitle = "Choose a file",
			...props
		},
		ref
	) => {
		return (
			<div className={classNames("", className)}>
				{label && (
					<label className="block text-sm font-medium text-inherit mb-1 px-2">
						{label}
					</label>
				)}
				<div className="relative">
					<input
						type="file"
						ref={ref}
						className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
						accept={accept}
						required={required}
						{...props}
					/>
					<div
						className={classNames(
							"px-4 py-2 rounded-md h-[42px] flex items-center gap-2",
							formVariantClasses[theme]
						)}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
							/>
						</svg>
						<span>{btnTitle}</span>
					</div>
				</div>
			</div>
		);
	}
);

FileInput.displayName = "FileInput";

export default FileInput;
