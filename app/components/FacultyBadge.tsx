import Link from "next/link";

interface FacultyBadgeProps {
  title: string;
  pathUrl: string;
}

const FacultyBadge = ({ title, pathUrl }: FacultyBadgeProps) => {
  return (
    <Link href={pathUrl}>
      <div className="text-sm px-3 py-1 border-[1px] border-[#797979] rounded-full text-[#797979] transition-all duration-500 on-hover-gradient hover:text-darkprimary hover:border-transparent sm:text-base">
        {title}
      </div>
    </Link>
  );
};

export default FacultyBadge;
