import React from "react";
import { type DetailsProps } from "@/module/tabs/common/types";

export const TableTR = ({ data }: { data: DetailsProps }) => {
  return (
    <tr>
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
        {data?.attributes?.date}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
        {data?.attributes?.title}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
        {data?.attributes?.description}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
        {data?.attributes?.executedBy}
      </td>
    </tr>
  );
};
