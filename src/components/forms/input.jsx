import classNames from "classnames";

const Input = ({ label, id, type = "text", className = "", ...props }) => {
	return (
		<div className="mb-4">
			{label && (
				<label htmlFor={id} className="block text-sm font-medium text-white mb-1">
					{label}
				</label>
			)}
			<input
				id={id}
				type={type}
				className={classNames(
					"block sm:text-sm w-full px-4 py-2 bg-input-bg border border-input-bg text-textSecondary rounded-md focus:outline-none focus:border-secondary",
					className
				)}
				{...props}
			/>
		</div>
	);
};

export default Input;
