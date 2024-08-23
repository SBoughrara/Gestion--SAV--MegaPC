import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "../pages/SignIn/SignIn";
import MainApp from "../apps/MainApp";
import AuthApp from "../apps/AuthApp";
import SignUp from "../pages/SignIn/singup";
// import UserPage from "../pages/Users/UserPage";
// import User from "../pages/Users/view/User";
// import AddUser from "../pages/Users/view/AddUser";
// import ClientPage from "../pages/Client/ClientPage";
// import Client from "../pages/Client/view/Client";
// import AddClient from "../pages/Client/view/AddClient";
// import EmployeePage from "../pages/Employee/EmplyeePage";
// import Employee from "../pages/Employee/view/Employee";
// import AddEmployee from "../pages/Employee/view/AddEmployee";
// import TicketPage from "../pages/Ticket/TicketPage";
// import Ticket from "../pages/Ticket/view/Ticket";
// import AddTicket from "../pages/Ticket/view/AddTicket";
// import RapportPage from "../pages/Rapport/RapportPage";
// import Rapport from "../pages/Rapport/view/Rapport";
// import AddRapport from "../pages/Rapport/view/AddRapport";
// import FacturePage from "../pages/Facture/FacturePage";
// import Facture from "../pages/Facture/view/Facture";
import Dashboard from "../pages/Dashboard/Dashboard";
import axios from "axios";
import Profile from "../pages/Profile";
import AddTicket from "../pages/Ticket/view/AddTicket";

export default function Router() {
  const [user, setuser] = useState(false);
  const [loading, setLoading] = useState(true);
  var token = "";
  useEffect(() => {
    if (localStorage.getItem("token")) {
      token = localStorage.getItem("token");

      axios
        .get("http://localhost:3000/auth/me", {
          headers: { Authorization: "Bearer " + token },
        })
        .then(function (response) {
          console.log(response);
          setuser(true);
        })
        .catch(function (error) {
          console.log("rahouu");
          // navigate(-1);
        });
    } else {
      setLoading(false);
    }
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        {user ? (
          <Route path="/" element={<MainApp />}>
            <Route index element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/add" element={<AddTicket />} />

          </Route>
        ) : (
          <Route path="/" element={<AuthApp />}>
            <Route index element={<SignIn />} />
            <Route path="/signup" element={<SignUp />}/>
          </Route>
        )}
      </Routes>
    </BrowserRouter>
  );
}
