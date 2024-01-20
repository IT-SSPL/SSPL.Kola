import Image from "next/image";
import Link from "next/link";
import { mulish, poller_one } from "../fonts";
import { imageUrlConverter } from "../hooks/imageUrlConverter";

type InfoCardProps = {
  photoUrl?: {
    attributes: {
      name: string;
      url: string;
    };
  };
  title: string;
  description?: string;
  pathUrl?: string;
  isCircle?: boolean;
};

const InfoCard = ({
  photoUrl,
  title,
  description,
  pathUrl,
  isCircle,
}: InfoCardProps) => {
  const logoUrl =
    (photoUrl && imageUrlConverter(photoUrl.attributes.url)) || "";

  return (
    <div>
      <Link
        href={pathUrl ? pathUrl : `/kola-naukowe`}
        className="group flex flex-col gap-4 justify-start items-center h-full sm:px-4 sm:py-3 md:px-7 md:py-6 px-11 py-9 bg-card bg-opacity-60 rounded-3xl shadow-center-md hover:shadow-center-2xl transition-all duration-300 hover:bg-opacity-80 dark:bg-darkcard dark:bg-opacity-20 dark:hover:bg-opacity-60"
        style={{ backdropFilter: "blur(10px)" }}
      >
        <Image
          src={photoUrl ? logoUrl : "/card-placeholder.jpg"}
          alt={
            photoUrl
              ? `Logo of the student science club ${title}`
              : `Placeholder for the logo of the ${title} student science club`
          }
          width={500}
          height={500}
          className="rounded-2xl w-56 h-56"
        />
        <h3
          className={`${
            isCircle
              ? `text-3xl sm:text-2xl mt-6 sm:mt-2`
              : `text-3xl sm:text-4xl`
          } text-center ${
            poller_one.className
          } gradient-for-text group-hover:text-transparent mt-2 transition-colors duration-300`}
        >
          {title}
        </h3>
        {description && (
          <p className={`text-center text-lg ${mulish.className}`}>
            {description}
          </p>
        )}
      </Link>
    </div>
  );
};

export default InfoCard;
