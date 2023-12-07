import React from "react";
import { type DetailsProps } from "@/module/tabs/common/types";

export const CardItem = ({ data }: { data: DetailsProps }) => {
  return (
    <li className="block rounded-lg bg-[#065b61] p-2 shadow-lg  dark:bg-neutral-700">
      <h5 className="mb-2 text-xl font-medium leading-tight text-white dark:text-neutral-50">
        {data.attributes?.title}
      </h5>
      <p className="mb-1 text-base text-white dark:text-neutral-200">
        {data.attributes?.description}
      </p>
      <div className="flex justify-evenly">
        <p className="mb-2 text-base text-white dark:text-neutral-200">
          {data.attributes?.date}
        </p>
        <p className="text-base text-white dark:text-neutral-200">
          {data.attributes?.executedBy}
        </p>
      </div>
    </li>
  );
};
