import { Routes, Route } from "react-router-dom";
import ScrollToTop from "@/components/scrollToTop";
import Explore from "./pages/explore";
import Province from "./pages/province";
import CreateAccount from "./pages/account/create-account";
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
import Home from "./pages";
import ProtectedRoute from "./components/protected-route";
import { useGetLoggedInUserDetailQuery } from "./services/api";
import { useGetUser } from "./hooks/getUserHook";

export default function AllRoutes() {
	useGetLoggedInUserDetailQuery();
	const { isLoggedIn, isAdmin } = useGetUser();

	return (
		<>
			{/* fix to scroll to top automatically when page changes */}
			<ScrollToTop />
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route path="/" index element={<Home />} />
					<Route path="/explore" index element={<Explore />} />
					<Route path="/explore/:id" index element={<ParishDetails />} />
					<Route path="/explore/events/:id" index element={<EventDetails />} />
					<Route path="/province" index element={<Province />} />
					<Route path="/news" index element={<News />} />
					<Route
						path="/accounts"
						index
						element={isLoggedIn ? <Profile /> : <NotLoggedIn />}
					/>
					<Route path="/create-account" index element={<CreateAccount />} />
					<Route path="/sign-in" index element={<SignIn />} />

					{/* admin */}
				</Route>

				<Route path="/admin/sign-in" index element={<SignIn type="admin" />} />
				<Route
					path="/admin"
					element={
						<ProtectedRoute allow={isAdmin}>
							<DashboardLayout baseUrl="/admin" />
						</ProtectedRoute>
					}
				>
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
