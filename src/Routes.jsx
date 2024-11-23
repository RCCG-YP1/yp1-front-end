import { Routes, Route } from "react-router-dom";

import ScrollToTop from "@/components/scrollToTop";
import DemoPage from "./pages/component-demo";
import Explore from "./pages/explore";
import Province from "./pages/province";
import Account from "./pages/account";
import Layout from "./layouts";
import EventDetails from "./pages/explore/event-details";
import ParishDetails from "./pages/explore/parish-details";

export default function AllRoutes() {
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
          <Route path="/accounts" index element={<Account />} />
        </Route>
      </Routes>
    </>
  );
}
