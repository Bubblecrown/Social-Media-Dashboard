import classnames from "classnames";
import React from "react";
import { CardFollowerProps } from "../type/CardFollower.type";
export default function CardFollower(props: CardFollowerProps) {
  const classProps = classnames(
    "flex flex-col  justify-center items-center lg:w-[23%] w-full h-[220px] bg-[color:var(--LightGrayishBlue)] rounded-md border-t-4",
    props.borderColor
  );
  return (
    <>
      <article className={classProps}>
        <span className="flex flex-row">
          <img src={props.image} alt="" />
          <p >{props.account}</p>
        </span>
        <h1>{props.amount}</h1>
        <h3>follower</h3>
        <span>
          <img src={props.arrow} alt="" />
          <p>{props.today} Today</p>
        </span>
      </article>
    </>
  );
}
