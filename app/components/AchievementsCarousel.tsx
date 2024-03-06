"use client";

// import React, { useState } from "react";
// import AchievementCard, { IAchievement } from "./AchievementCard";
// import { HiArrowLeft, HiArrowRight } from "react-icons/hi2";
// import "./Carousel.css";

// interface AchievementsCarouselProps {
//   achievements: IAchievement[];
// }

// const AchievementsCarousel = ({ achievements }: AchievementsCarouselProps) => {
//   const [active, setActive] = useState(2);

//   const MAX_VISIBILITY = 3;

//   return (
//     <div className="carousel">
//       {active > 0 && (
//         <button className="nav left" onClick={() => setActive((i) => i - 1)}>
//           <HiArrowLeft />
//         </button>
//       )}
//       {achievements.map((achievement, i) => (
//         <AchievementCard
//           key={i}
//           style={{
//             "--active": i === active ? 1 : 0,
//             "--offset": `${(active - i) / 3}`,
//             "--direction": `${Math.sign(active - i)}`,
//             "--abs-offset": `${Math.abs(active - i) / 3}`,
//             pointerEvents: active === i ? "auto" : "none",
//             opacity: Math.abs(active - i) >= MAX_VISIBILITY ? "0" : "1",
//             display: Math.abs(active - i) > MAX_VISIBILITY ? "none" : "block",
//           }}
//           title={achievement.title}
//           description={achievement.description}
//         />
//       ))}
//       {active < achievements.length - 1 && (
//         <button className="nav right" onClick={() => setActive((i) => i + 1)}>
//           <HiArrowRight />
//         </button>
//       )}
//     </div>
//   );
// };

// export default AchievementsCarousel;

import React, { CSSProperties, useState } from "react";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi2";
import AchievementCard, { IAchievement } from "./AchievementCard";
import "./Carousel.css";

const MAX_VISIBILITY = 3;

interface AchievementsCarouselProps {
  achievements: IAchievement[];
}

const Card = ({ title, description }: IAchievement) => (
  <div className="card">
    <h2>{title}</h2>
    <p>{description}</p>
  </div>
);

const AchievementCarousel = ({ achievements }: AchievementsCarouselProps) => {
  const [active, setActive] = useState(1);

  return (
    <div className="carousel">
      {active > 0 && (
        <button className="nav left" onClick={() => setActive((i) => i - 1)}>
          <HiArrowLeft />
        </button>
      )}
      {achievements.map((achievement, i) => (
        <div
          className="card-container"
          style={{
            ...({
              "--active": i === active ? 1 : 0,
              "--offset": (active - i) / 3,
              "--direction": Math.sign(active - i),
              "--abs-offset": Math.abs(active - i) / 3,
              "pointer-events": active === i ? "auto" : "none",
            } as CSSProperties),
            opacity: Math.abs(active - i) >= MAX_VISIBILITY ? "0" : "1",
            display: Math.abs(active - i) > MAX_VISIBILITY ? "none" : "block",
          }}
          key={i}
        >
          <AchievementCard
            title={achievement.title}
            description={achievement.description}
          />
        </div>
      ))}
      {active < achievements.length - 1 && (
        <button className="nav right" onClick={() => setActive((i) => i + 1)}>
          <HiArrowRight />
        </button>
      )}
    </div>
  );
};

export default AchievementCarousel;
