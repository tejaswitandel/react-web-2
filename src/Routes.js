import React from "react";
import Withdraw from "pages/Withdraw";
import Earnings from "pages/Earnings";
import Payments from "pages/Payments";
import MusicAlbum from "pages/MusicAlbum";
import Music from "pages/Music";
import Dashboard from "pages/Dashboard";
import Login from "pages/Login";
import Onboarding from "pages/Onboarding";
import Registeration from "pages/Registeration";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";

const ProjectRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Registeration />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/music" element={<Music />} />
        <Route path="/musicalbum" element={<MusicAlbum />} />
        <Route path="/payments" element={<Payments />} />
        <Route path="/earnings" element={<Earnings />} />
        <Route path="/withdraw" element={<Withdraw />} />
        <Route path="/dhiwise-dashboard" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default ProjectRoutes;
