import React from "react";
import { CardViewProps } from "../type/CardView";

export default function CardView(props: CardViewProps) {
  return (
    <>
      <section className="bg-[color:var(--bg-card)] p-6 box-border rounded-md gap-5 grid">
        <article className="flex justify-between items-center" >
          <h2 className="font-semibold text-[color:var(--text-secondary)]">
            {props.label}
          </h2>
          <img src={props.image} alt="" className="w-5 h-auto"/>
        </article>
        <article className="flex justify-between items-end">
          <h1 className="text-3xl font-bold text-[color:var(--text-primary)]">{props.views}</h1>
          <div className="flex items-center">
            <img src={props.arrow} alt="" />
            <p
              className={
                props.arrow ===
                "/Social-Media-Dashboard/static/media/icon-up.09cfa95e6e89e162c5c150356e6de276.svg"
                  ? "text-[color:var(--LimeGreen)] font-semibold text-sm"
                  : "text-[color:var(--BrightRed)] font-semibold text-sm"
              }
            >
              {props.percentage}%
            </p>
          </div>
        </article>
      </section>
    </>
  );
}
