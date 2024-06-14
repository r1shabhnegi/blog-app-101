import { Routes, Route } from "react-router-dom";

import AuthLayout from "@/layout/AuthLayout";

import MainPageLayout from "./layout/MainPageLayout";
import ProfileLayout from "./layout/ProfileLayout";
import ProfileHome from "./pages/ProfileHome";
import ProfileLists from "./pages/ProfileLists";
import ProfileAbout from "./pages/ProfileAbout";
import ReadingHistory from "./pages/ReadingHistory";
import Settings from "./pages/Settings";
import PublishLayout from "./layout/PublishLayout";
import Publish from "./pages/Publish";
const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path='/'
        index
        element={<MainPageLayout />}
      />
      <Route element={<AuthLayout />}>
        <Route element={<ProfileLayout />}>
          <Route
            path='/profile/:userId'
            element={<ProfileHome />}
          />
          <Route
            path='/profile/lists/:userId'
            element={<ProfileLists />}
          />
          <Route
            path='/profile/about/:userId'
            element={<ProfileAbout />}
          />
        </Route>
        <Route
          path='/reading-history'
          element={<ReadingHistory />}
        />
        <Route
          path='/settings'
          element={<Settings />}
        />
      </Route>
      <Route element={<PublishLayout />}>
        <Route
          path='/publish'
          element={<Publish />}
        />
      </Route>
    </Routes>
  );
};
export default AppRoutes;
