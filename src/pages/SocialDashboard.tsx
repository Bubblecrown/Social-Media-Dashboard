import React, { useContext } from "react";
import { SwitchContext } from "../App";
import CardLayout from "../components/layouts/CardLayout";
import CardViewLayout from "../components/layouts/CardViewLayout";
import NavBar from "../components/layouts/NavBar";

export default function SocialDashboard() {
  const { mode } = useContext(SwitchContext);
  return (
    <>
      <main
        className="font-inter bg-[color:var(--bg)] lg:h-screen  grid"
        data-mode={mode === true ? "darkMode" : "lightMode"}
      >
        <NavBar />
        <article>
          <CardLayout />
        </article>
        <section>
          <CardViewLayout />
        </section>
      </main>
    </>
  );
}
