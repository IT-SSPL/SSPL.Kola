import { HiArrowLeft } from "react-icons/hi2";
import { IContact } from "../lib/definitions";
import { Suspense } from "react";
import ContentContainer from "./ContentContainer";

const ContactCard = ({ email, address }: IContact) => {
  return (
    <ContentContainer style={"flex-col md:flex-row justify-between group"}>
      <div className="flex text-lg flex-col gap-2">
        <Suspense fallback={<div>Loading...</div>}>
          <div className="flex flex-col md:flex-row gap-1 md:gap-2">
            <h3 className="font-extrabold md:text-right">E-mail:</h3>
            <a href={`mailto:${email}`}>{email}</a>
          </div>
          <div className="flex flex-col md:flex-row gap-1 md:gap-2">
            <h3 className="font-extrabold md:text-right">Adres:</h3>
            <div className="flex flex-col gap-1">
              <p>
                {address.building}
                {address.room && <span>, Sala {address.room}</span>}
              </p>
              <p>Kampus {address.campus}</p>
              <p>{address.street}</p>
            </div>
          </div>
        </Suspense>
      </div>
      <div className="hidden md:flex font-semibold">
        <div className="group flex items-center gap-5">
          <p className="relative text-3xl transition-all duration-300 group-hover:-translate-x-10">
            <HiArrowLeft />
          </p>
          <p className="text-xl">KONTAKT</p>
        </div>
      </div>
    </ContentContainer>
  );
};

export default ContactCard;
