import React from "react";

type TableTRProps = {
  attributes?: {
    title: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    date?: any;
    slug?: string | null | undefined;
    executedBy: string;
    description?: string | null | undefined;
  };
};

export const TableTR = ({ data }: { data: TableTRProps }) => {
  return (
    <tr>
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
        {data?.attributes?.date}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
        {data?.attributes?.title}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
        {data?.attributes?.executedBy}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
        {data?.attributes?.description}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
        <button
          type="button"
          className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};
