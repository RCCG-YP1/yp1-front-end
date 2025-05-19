import { selectCurrentUser, selectToken } from "@/store/slices/authSlice";
import { useMemo } from "react";
import { useSelector } from "react-redux";

export const useGetUser = () => {
	const user = useSelector(selectCurrentUser);
	const token = useSelector(selectToken);
	const isLoggedIn = token ? true : false;

	const isAdmin = Number(user?.is_admin || "") > 0;

	return useMemo(
		() => ({ user, isLoggedIn, isAdmin }),
		[isLoggedIn, user, isAdmin]
	);
};
