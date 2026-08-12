import { Routes, Route } from "react-router";

import HomePage from "./pages/HomePage/HomePage";
import DesignsPage from "./pages/DesignsPage/DesignsPage";
import WebsitesPage from "./pages/WebsitesPage/WebsitesPage";
import MePage from "./pages/MePage/MePage";
import CvPage from "./pages/CvPage/CvPage";
import AppsPage from "./pages/AppsPage/AppsPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      <Route path="/designs" element={<DesignsPage />} />
      <Route path="/websites" element={<WebsitesPage />} />
      <Route path="/me" element={<MePage />} />
      <Route path="/cv" element={<CvPage />} />
      <Route path="/apps" element={<AppsPage />} />

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
