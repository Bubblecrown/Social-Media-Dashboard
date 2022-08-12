import React from "react";
import CardView from "../components/CardView";
import CardLayout from "../components/layouts/CardLayout";
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
          <CardView/>
        </section>
      </main>
    </>
  );
}
