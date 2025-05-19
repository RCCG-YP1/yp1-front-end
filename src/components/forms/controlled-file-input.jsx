import { useState } from "react";
import { useFormContext } from "react-hook-form";

const ControlledFileInput = ({
	name,
	accept = "image/*",
	className = "",
	size = "md",
}) => {
	const { register } = useFormContext();
	const [previewImage, setPreviewImage] = useState(null);

	const handleImageChange = e => {
		const file = e.target.files[0];
		if (file) {
			setPreviewImage(URL.createObjectURL(file));
		}
	};

	const sizeClasses = {
		sm: "w-16 h-16",
		md: "w-24 h-24",
		lg: "w-32 h-32",
	};

	return (
		<div className={`relative ${className}`}>
			<div
				className={`${sizeClasses[size]} rounded-full bg-input-bg overflow-hidden`}
			>
				{previewImage ? (
					<img
						src={previewImage}
						alt="Preview"
						className="w-full h-full object-cover"
					/>
				) : (
					<div className="w-full h-full flex items-center justify-center text-gray-400">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-1/2 w-1/2"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
							/>
						</svg>
					</div>
				)}
			</div>
			<input
				type="file"
				accept={accept}
				{...register(name, {
					onChange: handleImageChange,
				})}
				className="hidden"
				id={name}
			/>
			<label
				htmlFor={name}
				className="absolute bottom-0 right-0 bg-secondary text-white p-2 rounded-full cursor-pointer hover:bg-secondary-600 transition-colors"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="h-4 w-4"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
					/>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
					/>
				</svg>
			</label>
		</div>
	);
};

export default ControlledFileInput;
