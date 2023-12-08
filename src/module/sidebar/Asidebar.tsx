import React from "react";
import { SidebarImage } from "./SidebarImage";
import { type SidebarDataHorsesFragment } from "@/gql/graphql";
import { ActiveLink } from "@/shared/ActiveLink";

type Props = {
  data?: SidebarDataHorsesFragment[];
};

export const Asidebar = ({ data }: Props) => {
  return (
    <aside className="h-full w-full bg-nav rounded-s-sm ">
      <ul className="h-full w-full flex-col items-stretch p-5">
        {data?.map(({ attributes }) => {
          if (!attributes) return null;
          return (
            <li key={attributes.slug}>
              <ActiveLink href={`/horse/${attributes.slug}`}>
                <SidebarImage
                  name={attributes.name}
                  src={attributes.profileImage.data?.attributes?.hash}
                />
              </ActiveLink>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};
