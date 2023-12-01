import React from "react";
import { HorseProfileSection } from "./components/horseProfileSection/HorseProfileSection";
import { type HorseEntity } from "@/gql/graphql";
import { Accordion } from "@/shared/Accordion";

export const Profile = ({ horse }: { horse: HorseEntity }) => {
  return (
    <div className="order-1">
      <div className="bg-primary  items-end my-5 mr-10 rounded-md hidden sm:block sm:w-64 md:w-72 ">
        <HorseProfileSection horseData={horse} flexCol />
      </div>
      <div className="block sm:hidden">
        <Accordion>
          <HorseProfileSection horseData={horse} />
        </Accordion>
      </div>
    </div>
  );
};
