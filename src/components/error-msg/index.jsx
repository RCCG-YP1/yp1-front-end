import "./style.css";
import { CircleAlert } from "lucide-react";

function ErrorMsg({ error }) {
	const err = error;
	return (
		<div className="error-msg" style={{ margin: "auto", minHeight: "50vh" }}>
			<CircleAlert />
			<h2 className="text-xl font-semibold mb-2">Oops, Error</h2>
			<p>
				{err?.data?.message ||
					err?.message ||
					"Connection failed please try again later."}
			</p>
		</div>
	);
}

export default ErrorMsg;
