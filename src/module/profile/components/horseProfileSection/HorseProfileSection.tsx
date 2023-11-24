import React from "react";
import clsx from "clsx";
import { ProfileImage } from "../ProfileImage";
import { type HorseSection } from "../../types";
import { HorseDetails } from "./components/HorseDetails";
import { type HorseFragment } from "@/gql/graphql";

export const HorseProfileSection = ({
  horse,
  flexCol = false,
}: {
  horse: HorseFragment;
  flexCol?: boolean;
}) => {
  const horseSection = [
    { label: "Name", value: horse.name },
    { label: "Date", value: horse.foaling },
    { label: "Place", value: horse.place },
    { label: "Gender", value: horse.gender },
  ] satisfies HorseSection[];

  return (
    <section
      className={clsx(
        "py-4 flex  items-center justify-center",
        flexCol ? "flex-col" : "flex-row"
      )}
    >
      <ProfileImage url={horse.profileImage.url} horseName={horse.name} />
      <div className="flex flex-col justify-start items-start mt-5 ml-5 text-left">
        {horseSection.map((item) => {
          return (
            <HorseDetails
              key={item.label}
              label={item.label}
              value={item.value}
            />
          );
        })}
      </div>
    </section>
  );
};
