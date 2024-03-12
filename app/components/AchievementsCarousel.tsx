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
        className={`my-6 ${poller_one.className} text-3xl font-bold text-center uppercase`}
      >
        Nasze Osiągnięcia:
      </h3>
      {achievements.length === 0 ? (
        <p className="text-center">
          Koło nie udzieliło jeszcze żadnych informacji o swoich osiągnięciach
        </p>
      ) : (
        <>
          <div className="w-96 h-72 carousel flex items-center justify-center relative">
            {achievements.map((achievement, i) => (
              <div
                className={`card-container w-4/5 h-full absolute transition-all cursor-pointer overflow-hidden sm:w-96`}
                style={{
                  ...({
                    "--active": i === active ? 1 : 0,
                    "--offset": (active - i) / 3,
                    "--direction": Math.sign(active - i),
                    "--abs-offset": Math.abs(active - i) / 3,
                    pointerEvents:
                      Math.abs(active - i) > MAX_VISIBILITY ? "none" : "auto",
                  } as CSSProperties),
                  opacity: Math.abs(active - i) >= MAX_VISIBILITY ? "0" : "1",
                  display:
                    Math.abs(active - i) > MAX_VISIBILITY ? "none" : "block",
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
                active >= achievements.length - 1 &&
                "opacity-0 pointer-events-none"
              }`}
              onClick={() => setActive((i) => i + 1)}
            >
              <HiArrowRight className="h-8 w-8 text-darkmarkdown dark:text-markdown" />
            </button>
          </div>
        </>
      )}
    </>
  );
};

export default AchievementCarousel;
