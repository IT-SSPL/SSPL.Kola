import Link from "next/link";
import { CiLogout } from "react-icons/ci";

const NotFound = () => {
  return (
    <div className="h-[50vh] mt-28 flex flex-col items-center justify-center text-center">
      <div>
        <h1 className="inline-block mr-5 pr-6 border-r-[1px] border-primary text-2xl font-bold">
          404
        </h1>
        <div className="inline-block">
          <h2 className="">This page could not be found.</h2>
        </div>
      </div>
      <Link href="/" className="mt-6 text-3xl">
        <CiLogout />
      </Link>
    </div>
  );
};

export default NotFound;

//vertical-align: top; line-height: 49px
