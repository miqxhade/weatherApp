import React from "react";

import LandingPage from "../../pages/LandingPage";
import { Route, Routes } from "react-router-dom";
import PrivateRoutes from "../../utils/PrivateRoutes";
import { HomePage } from "../../pages/HomePage";
import { Weather } from "../../pages";

export const LandingRoute = () => {
  return (
    <Routes>
  
      <Route path="/" breadcrumb={null} element={<LandingPage />}></Route>
      {/* To make your routes private and not accesable without user login */}
      <Route element={<PrivateRoutes />}>
        <>
        <Route path="/Homepage" breadcrumb={null} element={<HomePage />}></Route>
        <Route path="/Weather" breadcrumb={null} element={<Weather />}></Route>
        </>
      </Route>
    </Routes>
  );
};
