import { BackIcon } from "@/assets/icons";
import classNames from "classnames";
import { useNavigate } from "react-router-dom";

export default function BackBtn({ link, className }) {
	const navigate = useNavigate();

	const handleBack = () => {
		if (link) navigate(link);
		else navigate(-1);
	};
	return (
		<button
			onClick={handleBack}
			className={classNames("bg-input-bg my-4 rounded-lg p-2 w-8 h-8", className)}
		>
			<BackIcon />
		</button>
	);
}
