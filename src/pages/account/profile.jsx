import LogOut from "@/assets/icons/log-out-icon";
export default function Profile({ setIsLoggedIn }) {
	const user = {
		name: "Victory Moks",
		username: "elmoks",
		email: "vikmoks01@gmail.com",
		birthday: "06 September",
		status: "Worker",
		parish: "RCCG LSC The Bridge",
		location: "Redemption Camp",
	};
	return (
		<div className="min-h-screen ">
			<div className="mt-14">
				<div className="flex items-center gap-4 mb-6">
					<img src="/images/Rectangle 12.png" alt="" />
					<div>
						<h2 className="text-xl font-bold text-gray-300">{user.name}</h2>
						<p className="text-secondary text-sm">@{user.username}</p>
					</div>
				</div>

				<div className="mt-12">
					<h3 className="uppercase font-medium text-xs text-gray-400">
						user information
					</h3>
					<ul className="mt-3 space-y-6 ml-3">
						<li>
							<span className="text-sm text-gray-400">Email address:</span>
							<p className="text-secondary">{user.email}</p>
						</li>
						<li>
							<span className="text-sm text-gray-400">Birthday:</span>
							<p className="text-secondary">{user.birthday}</p>
						</li>
						<li>
							<span className="text-sm text-gray-400">Status:</span>
							<p className="text-secondary">{user.status}</p>
						</li>
						<li>
							<span className="text-sm text-gray-400">Parish:</span>
							<p className="text-secondary">{user.parish}</p>
						</li>
						<li>
							<span className="text-sm text-gray-400">Location:</span>
							<p className="text-secondary">{user.location}</p>
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

				<div
					onClick={() => {
						setIsLoggedIn(false);
					}}
					className="flex items-center gap-2 mt-12 text-red-500 hover:text-red-600 cursor-pointer ml-3"
				>
					<LogOut />
					<button>Log out</button>
				</div>
			</div>
		</div>
	);
}
