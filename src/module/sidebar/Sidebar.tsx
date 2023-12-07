import React from "react";
import { SidebarImage } from "./SidebarImage";
import { getHorses } from "@/api/horses/getAllhorses";
import { ActiveLink } from "@/shared/ActiveLink";

export const Sidebar = async () => {
  const horses = await getHorses();
  if (horses?.length === 0) return null;

  return (
    <aside className="h-full w-full bg-nav rounded-s-sm ">
      <ul className="h-full w-full flex-col items-stretch p-5">
        {horses?.map(({ attributes }) => {
          if (!attributes) return null;
          return (
            <ActiveLink
              key={attributes.slug}
              href={`/horse/${attributes.slug}`}
            >
              <SidebarImage
                name={attributes.name}
                src={attributes.profileImage.data?.attributes?.hash}
              />
            </ActiveLink>
          );
        })}
      </ul>
    </aside>
  );
};
