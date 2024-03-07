"use client";
import React, { CSSProperties, useState } from "react";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi2";
import AchievementCard, { IAchievement } from "./AchievementCard";
import "./Carousel.min.css";
import { poller_one } from "../fonts";

const MAX_VISIBILITY = 2;

interface AchievementsCarouselProps {
  achievements: IAchievement[];
}
const AchievementCarousel = ({ achievements }: AchievementsCarouselProps) => {
  const [active, setActive] = useState(0);

  return (
    <>
      <h3
        className={` mt-5 ${poller_one.className} text-2xl font-bold text-center uppercase`}
      >
        Nasze Osiągnięcia
      </h3>
      <div className="carousel relative flex items-center justify-center h-72 w-72">
        {achievements.map((achievement, i) => (
          <div
            className={`card-container h-full absolute transition-all cursor-pointer overflow-hidden ${
              active ? "w-2/3" : "w-3/4"
            } sm:w-80`}
            style={{
              ...({
                "--active": i === active ? 1 : 0,
                "--offset": (active - i) / 3,
                "--direction": Math.sign(active - i),
                "--abs-offset": Math.abs(active - i) / 3,
                "pointer-events":
                  Math.abs(active - i) > MAX_VISIBILITY ? "none" : "auto",
              } as CSSProperties),
              opacity: Math.abs(active - i) >= MAX_VISIBILITY ? "0" : "1",
              display: Math.abs(active - i) > MAX_VISIBILITY ? "none" : "block",
            }}
            key={i}
            onClick={() => setActive(i)}
          >
            <AchievementCard
              title={achievement.title}
              description={achievement.description}
            />
          </div>
        ))}
      </div>
      <div className="w-full h-min flex flex-row justify-center gap-5">
        <button
          className={`flex items-center justify-center cursor-pointer text-5xl text-white transition-opacity ${
            active === 0 && "opacity-0 pointer-events-none"
          }`}
          onClick={() => setActive((i) => i - 1)}
        >
          <HiArrowLeft className="h-8 w-8 text-darkmarkdown dark:text-markdown" />
        </button>
        <button
          className={`flex items-center justify-center cursor-pointer text-5xl text-white transition ${
            active >= achievements.length - 1 && "opacity-0 pointer-events-none"
          }`}
          onClick={() => setActive((i) => i + 1)}
        >
          <HiArrowRight className="h-8 w-8 text-darkmarkdown dark:text-markdown" />
        </button>
      </div>
    </>
  );
};

export default AchievementCarousel;
