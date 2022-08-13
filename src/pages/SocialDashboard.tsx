import React from "react";
import CardLayout from "../components/layouts/CardLayout";
import CardViewLayout from "../components/layouts/CardViewLayout";
import NavBar from "../components/layouts/NavBar";

export default function SocialDashboard() {
  return (
    <>
      <main className="font-inter">
        <NavBar />
        <article>
          <CardLayout/>
        </article>
        <section>
          <CardViewLayout />
        </section>
      </main>
    </>
  );
}
