import { Routes, Route } from "react-router-dom";

import ScrollToTop from "@/components/scrollToTop";
import DemoPage from "./pages/component-demo";
import Explore from "./pages/explore";
import Province from "./pages/province";
import Layout from "./layouts";

export default function AllRoutes() {
	return (
		<>
			{/* fix to scroll to top automatically when page changes */}
			<ScrollToTop />
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route path="/" index element={<DemoPage />} />
					<Route path="/explore" index element={<Explore />} />
					<Route path="/province" index element={<Province />} />
				</Route>
			</Routes>
		</>
	);
}
