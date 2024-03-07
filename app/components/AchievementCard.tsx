import ContentContainer from "./ContentContainer";

export interface IAchievement {
  title: string;
  description: string;
  style?: React.CSSProperties;
}

const AchievementCard = ({ title, description, style }: IAchievement) => {
  return (
    <ContentContainer
      style={`flex-col justify-between !py-10 !px-8 h-full w-full ${style}`}
    >
      <div className="flex flex-col gap-2 overflow-auto scrollbar-thin scrollbar-track-transparent scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
        <h3 className="font-extrabold uppercase text-center">{title}</h3>
        <p className="text-justify">{description}</p>
      </div>
    </ContentContainer>
  );
};

export default AchievementCard;
