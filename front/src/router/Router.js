import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "../pages/SignIn/SignIn";
import MainApp from "../apps/MainApp";
import AuthApp from "../apps/AuthApp";
import SignUp from "../pages/SignIn/singup";
import DashboardPage from "../pages/Dashboard/DashboardPage";
import Dashboard from "../pages/Dashboard/view/Dashboard";

export default function Router() {
  const [user, setuser] = useState(true);
  return (
    <BrowserRouter>
      <Routes>
        {user ? (
          <Route path="/" element={<MainApp />}>
            <Route index element={<Dashboard />} />
          </Route>
        ) : (
          <Route path="/" element={<AuthApp />}>
            <Route index element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
          </Route>
        )}
      </Routes>
    </BrowserRouter>
  );
}
