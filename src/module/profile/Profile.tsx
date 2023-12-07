import React from "react";
import { HorseProfileSection } from "./components/horseProfileSection/HorseProfileSection";
import { type HorseEntity } from "@/gql/graphql";
import { Accordion } from "@/shared/Accordion";

export const Profile = ({ horse }: { horse: HorseEntity }) => {
  return (
    <div className="mt-2">
      <Accordion>
        <HorseProfileSection horseData={horse} />
      </Accordion>
    </div>
  );
};
