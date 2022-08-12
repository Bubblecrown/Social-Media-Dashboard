import React from "react";
import CardFollower from "../CardFollower";
import facebookIcon from "../../assets/icon-facebook.svg";
import twitterIcon from "../../assets/icon-twitter.svg";
import igIcon from "../../assets/icon-instagram.svg";
import youtubeIcon from "../../assets/icon-youtube.svg";
import upIcon from "../../assets/icon-up.svg"
import downIcon from "../../assets/icon-down.svg"

export default function CardLayout() {
  return (
    <main className="flex justify-center w-full px-[10%]">
      <section className="w-full flex lg:flex-row flex-col lg:justify-between gap-5">
        <CardFollower
          image={facebookIcon}
          account="@nathanf"
          amount="1987"
          arrow={upIcon}
          today={12}
        />
        <CardFollower
          image={twitterIcon}
          account="@nathanf"
          amount="1044"
          arrow={upIcon}
          today={99}
        />
        <CardFollower
          image={igIcon}
          account="@nathanf"
          arrow={upIcon}
          amount={"11k"}
          today={1099}
        />
        <CardFollower
          image={youtubeIcon}
          account="@nathanf"
          arrow={downIcon}
          amount="8239"
          today={144}
        />
      </section>
    </main>
  );
}
