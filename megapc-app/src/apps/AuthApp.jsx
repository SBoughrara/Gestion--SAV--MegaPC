import React from "react";
import { Outlet } from "react-router-dom";

export default function AuthApp() {
  return (
    <div>   
      <Outlet/>
    </div>
  );
}
