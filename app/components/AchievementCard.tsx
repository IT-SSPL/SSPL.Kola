import ContentContainer from "./ContentContainer";

export interface IAchievement {
  title: string;
  description: string;
}

const AchievementCard = ({ title, description }: IAchievement) => {
  return (
    <ContentContainer style={"flex-col md:flex-row justify-between"}>
      <div className="flex flex-col gap-2">
        <h3 className="font-extrabold">{title}</h3>
        <p>{description}</p>
      </div>
    </ContentContainer>
  );
};

export default AchievementCard;
