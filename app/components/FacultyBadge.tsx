import Link from "next/link";

interface FacultyBadgeProps {
  title: string;
  clicked: boolean;
  pathUrl: string;
}

const FacultyBadge = ({ title, pathUrl, clicked }: FacultyBadgeProps) => {
  return (
    <Link href={clicked ? "/kola-naukowe" : pathUrl}>
      <div
        className={`text-sm px-3 py-1 border-[1px] border-[#797979] rounded-full text-[#797979] transition-all duration-500 on-hover-gradient hover:text-darkprimary hover:border-transparent sm:text-base ${
          clicked && "gradient text-darkprimary border-transparent"
        }`}
      >
        {title}
      </div>
    </Link>
  );
};

export default FacultyBadge;
