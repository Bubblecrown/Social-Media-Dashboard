import React, { useContext } from "react";
import { SwitchContext } from "../App";
import CardLayout from "../components/layouts/CardLayout";
import CardViewLayout from "../components/layouts/CardViewLayout";
import NavBar from "../components/layouts/NavBar";

export default function SocialDashboard() {
  const { mode } = useContext(SwitchContext);
  return (
    <main
      className="font-inter bg-[color:var(--bg)] h-screen "
      data-mode={mode === true ? "darkMode" : "lightMode"}
    >
      <div className=" bg-[color:var(--bg-pattern)] h-2/6">
        <div>
          <NavBar />
          <CardLayout />
          <CardViewLayout />
        </div>
      </div>
    </main>
  );
}
