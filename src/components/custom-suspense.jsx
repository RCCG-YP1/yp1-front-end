import { Braces, Loader2 } from "lucide-react";
import ErrorMsg from "./error-msg";
import EmptyState from "./empty-state";

const SuspenseContainer = ({
	isLoading,
	isError,
	error,
	children,
	isEmpty = false,
	emptyStateProps,
	loadingText = "Loading...",
	customLoader,
}) => {
	if (isLoading) {
		return customLoader ? (
			customLoader
		) : (
			<div
				style={{ padding: "10vh 0" }}
				className="space-y-4 mx-auto text-center flex flex-col justify-center items-center"
			>
				<Loader2 className="animate-spin size-10" />
				<p>{loadingText}</p>
			</div>
		);
	}

	if (isError) {
		return (
			<div className="my-6">
				<ErrorMsg error={error} />
			</div>
		);
	}

	if (isEmpty) {
		return (
			<div className="my-6">
				<EmptyState title="No data found" icon={<Braces />} {...emptyStateProps} />
			</div>
		);
	}

	return <>{children}</>; // Render children if everything is good
};

export default SuspenseContainer;
