import React from "react";
import CardView from "../CardView";
import facebookIcon from "../../assets/icon-facebook.svg";
import twitterIcon from "../../assets/icon-twitter.svg";
import igIcon from "../../assets/icon-instagram.svg";
import youtubeIcon from "../../assets/icon-youtube.svg";
import upIcon from "../../assets/icon-up.svg";
import downIcon from "../../assets/icon-down.svg";
export default function CardViewLayout() {
  return (
    <main className="w-full mt-14 px-[10%] flex justify-start items-center">
      <section className="w-full">
        <h1 className="text-3xl font-bold text-[color:var(--DarkGrayishBlue)]">
          Overview - Today
        </h1>
        <article>
        <CardView
          image={facebookIcon}
          label="Page View"
          views="87"
          arrow={upIcon}
          percentage={3}
        />
        <CardView
          image={facebookIcon}
          label="Page View"
          views="87"
          arrow={upIcon}
          percentage={3}
        />
        <CardView
          image={facebookIcon}
          label="Page View"
          views="87"
          arrow={upIcon}
          percentage={3}
        />
        <CardView
          image={facebookIcon}
          label="Page View"
          views="87"
          arrow={upIcon}
          percentage={3}
        />
        <CardView
          image={facebookIcon}
          label="Page View"
          views="87"
          arrow={upIcon}
          percentage={3}
        />
        <CardView
          image={facebookIcon}
          label="Page View"
          views="87"
          arrow={upIcon}
          percentage={3}
        />
        <CardView
          image={facebookIcon}
          label="Page View"
          views="87"
          arrow={upIcon}
          percentage={3}
        />
        <CardView
          image={facebookIcon}
          label="Page View"
          views="87"
          arrow={upIcon}
          percentage={3}
        />
        </article>
      </section>
    </main>
  );
}
