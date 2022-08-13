import React from "react";
import { CardViewProps } from "../type/CardView";

export default function CardView(props:CardViewProps) {
  return (
    <main>
      <section>
        <article>
          <h2>{props.label}</h2>
          <img src={props.image} alt="" />
        </article>
        <article>
          <h1>{props.views}</h1>
          <span>
            <img src={props.arrow} alt="" />
            <p>{props.percentage}%</p>
          </span>
        </article>
      </section>
    </main>
  );
}
