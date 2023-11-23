import React from "react";

import { ProfileImage } from "./components/ProfileImage";
import { type HorseFragment } from "@/gql/graphql";
import { Accordion } from "@/shared/Accordion";

export const Profile = ({ horse }: { horse: HorseFragment }) => {
  return (
    <div className="order-1">
      <div className="bg-primary items-end my-5 mr-10 rounded-md hidden sm:block sm:w-64 md:w-80 ">
        <section className="p-10 flex flex-col items-center">
          <ProfileImage url={horse.profileImage.url} horseName={horse.name} />
          <div className="grid grid-cols-1 mt-10">
            <div>
              <span className="text-lg text-slate-400">name:</span>
              <span className="text-black">{horse.name}</span>
            </div>
            <span>name</span>
            <span>Date</span>
            <span>{horse.foaling}</span>
            <span>name</span>
          </div>
        </section>
      </div>
      <div className="block sm:hidden">
        <Accordion>
          <section className=" py-4 flex items-center justify-center">
            <ProfileImage url={horse.profileImage.url} horseName={horse.name} />
            <div className="flex flex-col justify-start items-start ml-5">
              <div className="justify-start">
                <span className="text-lg text-slate-400">name:</span>
                <span className="text-black">{horse.name}</span>
              </div>
              <div className="justify-start">
                <span className="text-lg text-slate-400">Date:</span>
                <span className="text-black">{horse.foaling}</span>
              </div>
              <div className="justify-start">
                <span className="text-lg text-slate-400">Place:</span>
                <span className="text-black">{horse.place}</span>
              </div>
              <div className="justify-start">
                <span className="text-lg text-slate-400">Gender:</span>
                <span className="text-black">{horse.gender ?? "gelding"}</span>
              </div>
            </div>
          </section>
        </Accordion>
      </div>
    </div>
  );
};
