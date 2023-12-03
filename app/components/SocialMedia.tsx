import { FaFacebook, FaGlobe, FaLinkedin, FaInstagram } from "react-icons/fa6";
import Link from "next/link";

export enum SocialType {
  Facebook = "facebook",
  Linkedin = "linkedin",
  Instagram = "instagram",
  Website = "website",
}

const socialIcons: Record<SocialType, JSX.Element> = {
  [SocialType.Facebook]: <FaFacebook />,
  [SocialType.Linkedin]: <FaLinkedin />,
  [SocialType.Instagram]: <FaInstagram />,
  [SocialType.Website]: <FaGlobe />,
};

const SocialMedia = ({
  type,
  url,
  isDark,
}: {
  type: string;
  url: string;
  isDark?: boolean;
}) => {
  switch (type) {
    case SocialType.Facebook:
    case SocialType.Linkedin:
    case SocialType.Instagram:
    case SocialType.Website:
      break;
    default:
      return null;
  }

  return (
    <div>
      <Link
        href={url}
        className={`w-20 h-20 grid place-items-center rounded-full text-[2.75rem] border-[1px] ${
          isDark
            ? "border-darkprimary text-darkprimary"
            : "border-primary text-primary dark:border-darkprimary dark:text-darkprimary"
        } hover:opacity-80 hover:text-[2.7rem] transition-all duration-300`}
      >
        {socialIcons[type]}
      </Link>
    </div>
  );
};

export default SocialMedia;
