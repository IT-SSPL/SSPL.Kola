import Image from "next/image";
import Link from "next/link";
import { mulish, rubik_mono_one } from "../fonts";

type InfoCardProps = {
  photoUrl: string;
  title: string;
  description?: string;
};

const InfoCard = ({ photoUrl, title, description }: InfoCardProps) => {
  return (
    <Link
      href={`/kola-naukowe`}
      className="group flex flex-col gap-4 justify-start items-center sm:px-4 sm:py-3 md:px-7 md:py-6 px-11 py-9 bg-white bg-opacity-60 border border-gray-200 rounded-3xl shadow-sm hover:shadow-2xl"
      style={{ backdropFilter: "blur(10px)" }}
    >
      <Image
        src={photoUrl}
        alt={title}
        width={500}
        height={500}
        className="rounded-2xl w-56 h-56"
      />
      <h3
        className={`text-center text-3xl sm:text-4xl ${rubik_mono_one.className} group-hover:text-[#4b126e]`}
      >
        {title}
      </h3>
      {description && (
        <p
          className={`text-center text-lg ${mulish.className} group-hover:text-[#4b126e]`}
        >
          {description}
        </p>
      )}
    </Link>
  );
};

export default InfoCard;
