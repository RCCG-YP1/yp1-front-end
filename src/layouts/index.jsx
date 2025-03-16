import { NavLink, Outlet } from "react-router-dom";
import {
	HomeIcon,
	ExploreIcon,
	ProvinceIcon,
	UserIcon,
	NewsIcon,
} from "@/assets/icons";
import PastorIcon from "@/assets/icons/pastor-icon";

const Layout = ({ children }) => {
	const menuItems = [
		{ name: "Home", icon: <HomeIcon />, path: "/" },
		{ name: "Explore", icon: <ExploreIcon />, path: "/explore" },
		{ name: "Province", icon: <ProvinceIcon />, path: "/province" },
		{ name: "News", icon: <NewsIcon />, path: "/news" },
		{ name: "Profile", icon: <UserIcon />, path: "/accounts" },
		{ name: "Pastor", icon: <PastorIcon />, path: "/pastor" },
	];

	return (
		<div className="flex flex-col md:flex-row bg-background text-white">
			{/* Sidebar */}
			<div className="hidden sticky top-0 bottom-0 h-screen max-h-screen md:flex flex-col w-20 lg:w-64 bg-background border-r border-input-bg">
				<div className="flex items-center justify-center lg:justify-start p-4 lg:p-6">
					<img src="/images/logo.png" alt="rccg youth province 1 logo" />
				</div>
				<nav className="flex-grow">
					{menuItems.map(item => (
						<NavLink
							key={item.name}
							to={item.path}
							className={({ isActive }) =>
								`flex items-center px-4 py-3 lg:px-6 lg:py-4 ${
									isActive ? "text-secondary" : "text-white hover:bg-input-bg"
								}`
							}
						>
							<span className="text-xl lg:text-2xl">{item.icon}</span>
							<span className="hidden lg:block ml-3 text-sm lg:text-base font-medium">
								{item.name}
							</span>
						</NavLink>
					))}
				</nav>
			</div>

			{/* Mobile Bottom Nav */}
			<div className="md:hidden fixed bottom-0 left-0 right-0 z-20 bg-background border-t border-input-bg rounded-lg">
				<div className="flex justify-around py-6">
					{menuItems.map(item => (
						<NavLink
							key={item.name}
							to={item.path}
							className={({ isActive }) =>
								`flex flex-col justify-center items-center ${
									isActive ? "text-secondary" : "text-white"
								}`
							}
						>
							<span className="text-xl">{item.icon}</span>
							<span className="text-sm font-medium">{item.name}</span>
						</NavLink>
					))}
				</div>
			</div>

			{/* Main Content */}
			<main className="flex-grow relative container pb-[100px] md:pb-[50px] max-w-2xl mx-auto py-4">
				{children ? children : <Outlet />}
			</main>
		</div>
	);
};

export default Layout;
