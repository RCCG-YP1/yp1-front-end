import { ShareIcon } from "@/assets/icons";

export default function ShareButton({ title, text, url }) {
	const handleShare = async () => {
		if (navigator.share) {
			try {
				await navigator.share({
					title,
					text,
					url,
				});
			} catch (error) {
				console.error("Error sharing:", error);
			}
		} else {
			// Fallback to copying the URL
			try {
				await navigator.clipboard.writeText(url);
				alert("Link copied to clipboard!");
			} catch (error) {
				console.error("Failed to copy link:", error);
				alert("Failed to copy the link.");
			}
		}
	};

	return (
		<button className="icon-btn hover:bg-input-bg" onClick={handleShare}>
			<ShareIcon />
		</button>
	);
}
