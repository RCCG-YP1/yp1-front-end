import LogOut from "@/assets/icons/log-out-icon";
import Avatar from "@/components/avatar";
import SuspenseContainer from "@/components/custom-suspense";
import { useConfirmations } from "@/providers/ConfirmationsProvider";
import { useGetLoggedInUserDetailQuery } from "@/services/api";
import { logout } from "@/store/slices/authSlice";
import { format } from "date-fns";
import { useDispatch } from "react-redux";
export default function Profile() {
	const { data, isLoading, isError, error } = useGetLoggedInUserDetailQuery();
	const user = data?.user;
	const dispatch = useDispatch();
	const confirm = useConfirmations();
	return (
		<SuspenseContainer
			isLoading={isLoading}
			error={error}
			isError={isError}
			className="min-h-screen"
		>
			<div className="mt-14">
				<div className="flex items-center gap-4 mb-6">
					<Avatar alt={user?.firstName + " " + user?.lastName} variant="rounded" />
					<div>
						<h2 className="text-xl font-bold text-gray-300">
							{user?.firstName + " " + user?.lastName}
						</h2>
						<p className="text-secondary text-sm">@{user?.userName}</p>
					</div>
				</div>

				<div className="mt-12">
					<h3 className="uppercase font-medium text-xs text-gray-400">
						user information
					</h3>
					<ul className="mt-3 space-y-6 ml-3">
						<li>
							<span className="text-sm text-gray-400">Email address:</span>
							<p className="text-secondary">{user?.email}</p>
						</li>
						<li>
							<span className="text-sm text-gray-400">Birthday:</span>
							<p className="text-secondary">
								{user?.dateOfBirth ? format(user?.dateOfBirth, "do MMMM") : "N/A"}
							</p>
						</li>
						<li>
							<span className="text-sm text-gray-400">Status:</span>
							<p className="text-secondary">{user?.status}</p>
						</li>
						<li>
							<span className="text-sm text-gray-400">Parish:</span>
							<p className="text-secondary">{user?.parish || "N/A"}</p>
						</li>
						<li>
							<span className="text-sm text-gray-400">Location:</span>
							<p className="text-secondary">{user?.location || "N/A"}</p>
						</li>
					</ul>
				</div>
				<div className="mt-12">
					<h3 className="uppercase font-medium text-xs text-gray-500">
						account security
					</h3>
					<ul className="mt-5 space-y-8 text-sm ml-3 text-gray-300">
						<li>Update password</li>
						<li>Enable 2FA</li>
					</ul>
				</div>

				<button
					onClick={async () => {
						if (await confirm("Are you sure you want to logout?")) {
							dispatch(logout());
						}
					}}
					className="flex items-center gap-2 mt-12 text-red-500 hover:text-red-600 cursor-pointer ml-3"
				>
					<LogOut />
					<p>Log out</p>
				</button>
			</div>
		</SuspenseContainer>
	);
}
