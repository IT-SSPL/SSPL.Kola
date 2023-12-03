import { HiArrowRight } from "react-icons/hi2";
import { ISocialMedia } from "../lib/definitions";
import ContentContainer from "./ContentContainer";
import SocialMedia from "./SocialMedia";

type SocialMediaCardProps = {
  socials: ISocialMedia[];
};

const SocialMediaCard = ({ socials }: SocialMediaCardProps) => {
  return (
    <ContentContainer
      style={"font-semibold justify-between group flex-col md:flex-row gap-3"}
    >
      <div className="flex items-center gap-5">
        <p className="text-xl uppercase">Poznaj nas</p>
        <p className="relative text-3xl transition-all duration-300 group-hover:translate-x-10">
          <HiArrowRight />
        </p>
      </div>
      <div className="flex gap-6 md:gap-10 lg:gap-14">
        {socials.map((social) => (
          <SocialMedia key={social.type} type={social.type} url={social.url} />
        ))}
      </div>
    </ContentContainer>
  );
};

export default SocialMediaCard;
