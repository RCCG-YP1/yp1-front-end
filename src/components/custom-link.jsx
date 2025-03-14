import classNames from "classnames";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

export const CustomLink = ({
	className,
	activeClass,
	to,
	baseUrl,
	children,
}) => {
	// Resolve the full path to match nested routes
	const resolvedPath = useResolvedPath(to);
	// Exact match only for the base route
	const match = useMatch({
		path:
			resolvedPath.pathname !== baseUrl ? resolvedPath.pathname + "/*" : baseUrl,
		end: to === baseUrl, // `end: true` for exact match when the link is `baseUrl`, otherwise `end: false`
	});

	return (
		<Link
			role="button"
			to={to}
			className={classNames(className, match ? activeClass : "")}
		>
			{children}
		</Link>
	);
};
