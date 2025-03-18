import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import ScrollToTop from "@/components/scrollToTop";
import DemoPage from "./pages/component-demo";
import Explore from "./pages/explore";
import Province from "./pages/province";

import CreateAccount from "./pages/account/create-account";
import PersonalInformation from "./pages/account/personal-information";
import Layout from "./layouts";
import EventDetails from "./pages/explore/event-details";
import ParishDetails from "./pages/explore/parish-details";
import NotLoggedIn from "./pages/account";
import Profile from "./pages/account/profile";
import SignIn from "./pages/account/sign-in";
import DashboardLayout from "./layouts/dashboard-layout";
import AdminHome from "./pages/admin";
import AdminParishes from "./pages/admin/parish";
import AdminMembers from "./pages/admin/members";
import AdminPastors from "./pages/admin/pastors";
import News from "./pages/news";
import AdminInformation from "./pages/admin/information";

export default function AllRoutes() {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	return (
		<>
			{/* fix to scroll to top automatically when page changes */}
			<ScrollToTop />
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route path="/" index element={<DemoPage />} />
					<Route path="/explore" index element={<Explore />} />
					<Route path="/explore/:id" index element={<ParishDetails />} />
					<Route path="/events/:id" index element={<EventDetails />} />
					<Route path="/province" index element={<Province />} />
					<Route path="/news" index element={<News />} />
					<Route
						path="/accounts"
						index
						element={
							isLoggedIn ? (
								<Profile setIsLoggedIn={setIsLoggedIn} />
							) : (
								<NotLoggedIn setIsLoggedIn={setIsLoggedIn} />
							)
						}
					/>
					<Route path="/profile" index element={<Profile />} />
					<Route path="/create-account" index element={<CreateAccount />} />
					<Route path="/sign-in" index element={<SignIn />} />
					<Route
						path="/personal-information"
						index
						element={<PersonalInformation />}
					/>

					{/* admin */}
				</Route>

				<Route path="/admin" element={<DashboardLayout baseUrl="/admin" />}>
					<Route index path="" element={<AdminHome />} />
					<Route index path="parishes" element={<AdminParishes />} />
					<Route index path="pastors" element={<AdminPastors />} />
					<Route index path="members" element={<AdminMembers />} />
					<Route index path="events" element={<h1>Events</h1>} />
					<Route index path="settings" element={<h1>Settings</h1>} />
					<Route index path="news" element={<AdminInformation />} />
				</Route>
			</Routes>
		</>
	);
}
