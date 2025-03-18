import { Link, Outlet } from "react-router-dom";
import "../assets/styles/dashboard.scss";
import classNames from "classnames";
import { useState } from "react";
// import Hamburger from "src/assets/icons/Hamburger";
import { CustomLink } from "@/components/custom-link";
import DashboardIcon from "@/assets/icons/dashboard-icon";
import { CloseIcon, NewsIcon, ProvinceIcon, UserIcon } from "@/assets/icons";
import EventIcon from "@/assets/icons/event-icon";
import SettingsIcon from "@/assets/icons/settings-icon";
import MembersIcon from "@/assets/icons/members-icon";
import HamburgerIcon from "@/assets/icons/hamburger-icon";

const LINKS = [
	{
		name: "Dashboard",
		link: "/admin",
		icon: <DashboardIcon color="currentColor" />,
	},
	{
		name: "Parishes",
		link: "/admin/parishes",
		icon: <ProvinceIcon color="currentColor" />,
	},
	{
		name: "Pastors",
		link: "/admin/pastors",
		icon: <UserIcon color="currentColor" />,
	},
	{
		name: "Information",
		link: "/admin/news",
		icon: <NewsIcon color="currentColor" />,
	},
	{
		name: "Events",
		link: "/admin/events",
		icon: <EventIcon color="currentColor" />,
	},
	{
		name: "Members",
		link: "/admin/members",
		icon: <MembersIcon />,
	},
	{
		name: "Settings",
		link: "/admin/settings",
		icon: <SettingsIcon />,
	},
];

export default function DashboardLayout({ baseUrl = "/dashboard" }) {
	const [isSideBarOpen, setisSideBarOpen] = useState(false);

	return (
		<div className="lsc-dashboard">
			{isSideBarOpen && (
				<div
					onClick={() => setisSideBarOpen(false)}
					className="overlay xl:hidden block"
				></div>
			)}
			<aside
				className={classNames(
					"lsc-sidebar bg-background",
					isSideBarOpen ? "show-sidebar" : ""
				)}
			>
				<button
					onClick={() => setisSideBarOpen(false)}
					className="rounded-full bg-secondary-300 flex items-center justify-center w-8 h-8 border border-primary/5 place-content-center close-btn"
				>
					<CloseIcon color="black" />
				</button>
				<div className={`lsc-sidebar-wrapper`}>
					<div className="top">
						<Link to="/">
							<img src="/images/logo.png" className="object-contain" alt="logo" />
						</Link>

						<ul className="sidebar-list mt-10">
							{LINKS.map(item => (
								<li key={item.link} onClick={() => setisSideBarOpen(false)}>
									<CustomLink
										baseUrl={baseUrl}
										to={item.link}
										className={`sidebar-item text-white hover:bg-secondary-900`}
										activeClass={`link-active !bg-secondary-300 !text-black`}
									>
										{item.icon}
										<span>{item.name}</span>{" "}
									</CustomLink>
								</li>
							))}
						</ul>
					</div>
				</div>
			</aside>

			<main className="min-h-screen">
				<section className="dashboard-content px-4 xl:px-0 container">
					<div className="xl:hidden flex gap-4 items-center mb-6">
						<button
							type="button"
							onClick={() => setisSideBarOpen(true)}
							className="rounded-full flex w-10 h-10 border border-primary/5 justify-center items-center mt-3"
						>
							<HamburgerIcon />
						</button>

						<Link className="w-8 h-8" to="/">
							<img src="/images/logo-sm.png" className="object-contain" alt="logo" />
						</Link>
					</div>
					<Outlet />
				</section>
			</main>
		</div>
	);
}
