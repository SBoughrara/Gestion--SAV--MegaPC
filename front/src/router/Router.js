import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "../pages/SignIn/SignIn";
import MainApp from "../apps/MainApp";
import AuthApp from "../apps/AuthApp";
import SignUp from "../pages/SignIn/singup";
import UserPage from "../pages/Users/UserPage";
import User from "../pages/Users/view/User";
import AddUser from "../pages/Users/view/AddUser";
import ClientPage from "../pages/Client/ClientPage";
import Client from "../pages/Client/view/Client";
import AddClient from "../pages/Client/view/AddClient";
import EmployeePage from "../pages/Employee/EmplyeePage";
import Employee from "../pages/Employee/view/Employee";
import AddEmployee from "../pages/Employee/view/AddEmployee";
import TicketPage from "../pages/Ticket/TicketPage";
import Ticket from "../pages/Ticket/view/Ticket";
import AddTicket from "../pages/Ticket/view/AddTicket";
import RapportPage from "../pages/Rapport/RapportPage";
import Rapport from "../pages/Rapport/view/Rapport";
import AddRapport from "../pages/Rapport/view/AddRapport";
import FacturePage from "../pages/Facture/FacturePage";
import Facture from "../pages/Facture/view/Facture";
import AddFacture from "../pages/Facture/view/AddFacture";
import Dashboard from "../pages/Dashboard/Dashboard";

export default function Router() {
  const [user, setuser] = useState(true);
  return (
    <BrowserRouter>
      <Routes>
        {user ? (
          <Route path="/" element={<MainApp />}>
            <Route index element={<Dashboard/>} />
            <Route path="/user" element={<UserPage />}>\
            <Route index element={<User/>}/>
            <Route path="add" element={<AddUser/>}/>
            </Route>
            <Route path="/client" element={<ClientPage />}>\
            <Route index element={<Client/>}/>
            <Route path="add" element={<AddClient/>}/>
            </Route>
            <Route path="/employee" element={<EmployeePage />}>\
            <Route index element={<Employee/>}/>
            <Route path="add" element={<AddEmployee/>}/>
            </Route>
            <Route path="/ticket" element={<TicketPage />}>\
            <Route index element={<Ticket/>}/>
            <Route path="add" element={<AddTicket/>}/>
            </Route>
            <Route path="/rapport" element={<RapportPage />}>\
            <Route index element={<Rapport/>}/>
            <Route path="add" element={<AddRapport/>}/>
            </Route>
            <Route path="/facture" element={<FacturePage />}>\
            <Route index element={<Facture/>}/>
            <Route path="add" element={<AddFacture/>}/>
            </Route>

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
