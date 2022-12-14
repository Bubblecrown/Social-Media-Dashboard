import classnames from "classnames";
import React from "react";
import { CardFollowerProps } from "../type/CardFollower.type";
export default function CardFollower(props: CardFollowerProps) {
  const classProps = classnames(
    "flex flex-col justify-center items-center w-full h-[220px] bg-[color:var(--bg-card)] rounded-md border-t-4 ",
    props.borderColor
  );

  return (
      <div className={classProps}>
        <article className="flex flex-row gap-2 items-center">
          <img src={props.image} alt="" className="w-5 h-auto" />
          <h2 className="text-[color:var(--text-secondary)] ">
            {props.account}
          </h2>
        </article>
        <article className="text-center my-4">
          <h1 className="text-[color:var(--text-primary)] text-5xl font-bold ">
            {props.amount}
          </h1>
          <p className="mt-2 text-[color:var(--text-secondary)] tracking-[6px] uppercase text-[12px]">
            followers
          </p>
        </article>
        <article className="flex items-center gap-1 font-bold text-sm">
          <img src={props.arrow} alt="" />
          <h2
            className={
              props.arrow === "/Social-Media-Dashboard/static/media/icon-up.09cfa95e6e89e162c5c150356e6de276.svg"
                ? "text-[color:var(--LimeGreen)]"
                : "text-[color:var(--BrightRed)]"
            }
          >
            {props.today} Today
          </h2>
        </article>
      </div>
  );
}
