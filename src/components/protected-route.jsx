import { Navigate, useLocation, Outlet } from "react-router";

const ProtectedRoute = ({ allow, redirectPath, children }) => {
	const currentLocation = useLocation();

	const redirectTo = redirectPath && {
		pathname: redirectPath,
		state: {
			referrer: currentLocation,
		},
	};

	return allow ? (
		children || <Outlet />
	) : (
		<Navigate to={redirectTo || currentLocation.state?.referrer || "/"} />
	);
};

export default ProtectedRoute;
