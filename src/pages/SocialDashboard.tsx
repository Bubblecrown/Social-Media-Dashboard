import React, { useContext } from "react";
import { SwitchContext } from "../App";
import CardLayout from "../components/layouts/CardLayout";
import CardViewLayout from "../components/layouts/CardViewLayout";
import NavBar from "../components/layouts/NavBar";

export default function SocialDashboard() {
  const { mode } = useContext(SwitchContext);
  return (
    <main
      className="font-inter bg-[color:var(--bg)] lg:h-screen items-baseline grid"
      data-mode={mode === true ? "darkMode" : "lightMode"}
    >
      <div className="bg-[color:var(--bg-pattern)] h-1/4 md:h-1/3 lg:h-2/3">
        <NavBar />
        <article>
          <CardLayout />
        </article>
      </div>
      <section>
        <CardViewLayout />
      </section>
    </main>
  );
}
