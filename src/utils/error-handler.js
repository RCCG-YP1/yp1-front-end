import { toast } from "sonner";

export const handleApiError = error => {
	if (error.data?.errors) {
		const firstError = Object.values(error.data.errors)[0][0];
		toast.error(firstError);
	} else {
		toast.error(error.message || "An error occurred");
	}
};
