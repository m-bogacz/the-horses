import React from "react";
import { CardItem } from "./CardItem";
import { type DetailsProps } from "@/module/tabs/common/types";

export const CardList = ({ data }: { data: DetailsProps[] }) => {
  return (
    <ul className="flex flex-col gap-2 mb-5">
      {data.map((item) => {
        return <CardItem key={item.attributes?.title} data={item} />;
      })}
    </ul>
  );
};
