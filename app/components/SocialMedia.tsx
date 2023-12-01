import { FaFacebook, FaGlobe, FaLinkedin, FaInstagram } from "react-icons/fa6";
import Link from "next/link";

type SocialType = "facebook" | "linkedin" | "instagram" | "website";

const socialType: Record<SocialType, JSX.Element> = {
  facebook: <FaFacebook />,
  linkedin: <FaLinkedin />,
  instagram: <FaInstagram />,
  website: <FaGlobe />,
};

const SocialMedia = ({ type, url }: { type: string; url: string }) => {
  return (
    <div>
      <Link
        href={url}
        className="w-20 h-20 grid place-items-center rounded-full text-[2.75rem] border-[1px] border-primary dark:border-darkprimary"
      >
        {socialType[type as SocialType]}
      </Link>
    </div>
  );
};

export default SocialMedia;
