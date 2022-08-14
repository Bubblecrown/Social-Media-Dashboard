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
    <div className="w-full h-full ss:py-8 lg:py-0 px-[10%] flex justify-start items-center ">
      <article className="w-full">
        <h1 className="text-2xl font-bold text-[color:var(--text-secondary)] mb-8 lg:text-2xl lg:mb-6">
          Overview - Today
        </h1>
        <header className="grid grid-cols-1 lg:grid-cols-4 w-full gap-4 md:grid-cols-2">
          <CardView
            image={facebookIcon}
            label="Page Views"
            views="87"
            arrow={upIcon}
            percentage={3}
          />
          <CardView
            image={facebookIcon}
            label="Likes"
            views="52"
            arrow={downIcon}
            percentage={2}
          />
          <CardView
            image={igIcon}
            label="Likes"
            views="5462"
            arrow={upIcon}
            percentage={2257}
          />
          <CardView
            image={igIcon}
            label="Profile Views"
            views="5462"
            arrow={upIcon}
            percentage={1375}
          />
          <CardView
            image={twitterIcon}
            label="Retweets"
            views="117"
            arrow={upIcon}
            percentage={303}
          />
          <CardView
            image={twitterIcon}
            label="Likes"
            views="507"
            arrow={upIcon}
            percentage={553}
          />
          <CardView
            image={youtubeIcon}
            label="Likes"
            views="107"
            arrow={downIcon}
            percentage={19}
          />
          <CardView
            image={youtubeIcon}
            label="Total Views"
            views="1407"
            arrow={downIcon}
            percentage={12}
          />
        </header>
      </article>
    </div>
  );
}
