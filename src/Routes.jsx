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
import Pastor from "./pages/pastor";
import Parish from "./pages/parish";
import Dashboard from "./pages/dashboard";
import Information from "./pages/information";
import Members from "./pages/members";
import News from "./pages/news";

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
          <Route path="/parish" index element={<Parish />} />
          <Route path="/pastor" index element={<Pastor />} />
          <Route path="/dashboard" index element={<Dashboard />} />
          <Route path="/information" index element={<Information />} />
          <Route path="/members" index element={<Members />} />
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
        </Route>
      </Routes>
    </>
  );
}
