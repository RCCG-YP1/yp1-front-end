export default function SocialButton({ Label, icon, onClick, className = "" }) {
	return (
		<button
			onClick={onClick}
			className={`px-4 py-2 flex-1 bg-bgSecondary rounded-lg flex justify-center items-center gap-2 text-black ${className}`}
		>
			{Label}
			{icon}
		</button>
	);
}
