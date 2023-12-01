import React from "react";
import { type TabSlugProps } from "../../common/types";

import { TableTR } from "./table/TableTR";
import { getTabsByTabSlugAndHorseSlug } from "@/api/tabs/getTabsByTabSlugAndHorseSlug";

export const ContentTab = async ({
  tab,
  horseSlug,
}: {
  tab: TabSlugProps;
  horseSlug: string;
}) => {
  const content = await getTabsByTabSlugAndHorseSlug({
    tabSlug: tab,
    horseSlug,
  });
  console.log("content =>", content);
  if (content?.length === 0) {
    return <div>There is no content</div>;
  }

  return (
    <div className="flex flex-col">
      <div className="-m-1.5 overflow-x-auto">
        <div className="p-1.5 min-w-full inline-block align-middle">
          <div className="border rounded-lg shadow overflow-hidden dark:border-gray-700 dark:shadow-gray-900">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead>
                <tr className="divide-x divide-gray-200 dark:divide-gray-700">
                  <th
                    scope="col"
                    className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                  >
                    Date
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                  >
                    Title
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                  >
                    Executed by
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                  >
                    description
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                  >
                    action
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {content?.map((item) => {
                  return <TableTR key={item.attributes?.title} data={item} />;
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

ContentTab.displayName = "ContentTab";
