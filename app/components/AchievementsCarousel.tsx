import React from "react";
import Carousel from "react-spring-3d-carousel";
import { config } from "react-spring";
import AchievementCard, { IAchievement } from "./AchievementCard";

interface AchievementsCarouselProps {
  achievements: IAchievement[];
}

// const getTouches = (evt: Event) => {
//   return (
//     evt.touches || evt.originalEvent.touches // browser API
//   );
// };

const AchievementsCarousel = ({ achievements }: AchievementsCarouselProps) => {
  const slides = achievements.map((achievement, index) => {
    return {
      key: index,
      content: (
        <AchievementCard
          title={achievement.title}
          description={achievement.description}
        />
      ),
    };
  });

  return (
    <Carousel
      slides={slides}
      goToSlide={0}
      offsetRadius={2}
      showNavigation={true}
      animationConfig={config.gentle}
    />
  );
};

export default AchievementsCarousel;
